import * as React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { Link, LoaderFunction, useLoaderData } from 'remix'
import { getMdx } from '~/server/mdx.server'
import { getSlides } from '~/server/getSlides.server'
import { useNavigate } from 'react-router-dom'

export type LoaderData = {
  slide: {
    code: string
    frontmatter: {
      [key: string]: any
    }
    previousSlideNr?: number
    nextSlideNr?: number
  }
  numberOfSlides: number
}

const isNumeric = (value: any): value is number | string => !isNaN(parseFloat(value)) && isFinite(value)

export const loader: LoaderFunction = async ({ params }): Promise<LoaderData> => {
  //   const slides = await getSlides()

  if (!isNumeric(params.slideNr)) {
    throw new Response(`Not Found: slideNr '${params.slideNr}' should be numeric`, {
      status: 404,
    })
  }

  const slideNr = parseInt(params.slideNr)

  const slides = await getSlides()
  const slide = slides.find((slide) => slide.nr === slideNr)

  if (!slide)
    throw new Response(`Not Found: slideNr ${slideNr} could not be found`, {
      status: 404,
    })

  const mdx = await getMdx(slide.mdxContent)

  return { slide: { ...slide, ...mdx }, numberOfSlides: slides.length }
}

export default () => {
  const {
    slide: { code, previousSlideNr, nextSlideNr },
    numberOfSlides,
  } = useLoaderData<LoaderData>()

  const navigate = useNavigate()

  const Component = React.useMemo(() => getMDXComponent(code), [code])

  return (
    <>
      <div>
        {Array(numberOfSlides)
          .fill(0)
          .map((_, i) => (
            <Link to={`/slides/${i + 1}`} key={i}>
              {i + 1}
            </Link>
          ))}
      </div>

      <div>
        {previousSlideNr && <button onClick={() => navigate(`/slides/${previousSlideNr}`)}>Previous</button>}
        {nextSlideNr && <button onClick={() => navigate(`/slides/${nextSlideNr}`)}>Next</button>}
      </div>

      <Component />
    </>
  )
}
