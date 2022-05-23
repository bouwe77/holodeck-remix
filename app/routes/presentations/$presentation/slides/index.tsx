import { LoaderFunction, useLoaderData } from 'remix'
import Preview from '~/components/slides/Preview'
import { Slide } from '~/components/slides/Slide'
import { getSlides } from '~/server/getSlides.server'
import { getMdx } from '~/server/mdx.server'

type LoaderData = {
  slides: {
    nr: number
    code: string
    frontmatter: {
      [key: string]: any
    }
  }[]
  presentationSlug: string
}

export const loader: LoaderFunction = async ({ params }) => {
  const presentationSlug = params.presentation ?? ''
  const slides = await getSlides(presentationSlug)

  const slidesWithMdx = await Promise.all(
    slides.map(async (slide) => {
      const mdx = await getMdx(slide.mdxContent)
      return { ...slide, ...mdx }
    }),
  )

  return { slides: slidesWithMdx }
}

export default function Index() {
  const { slides } = useLoaderData<LoaderData>()

  return (
    <div>
      {/* <h1>Slides</h1>

      {slides.map((slide) => (
        <Preview key={slide.nr}>
          <Slide code={slide.code} />
        </Preview>
      ))} */}
    </div>
  )
}
