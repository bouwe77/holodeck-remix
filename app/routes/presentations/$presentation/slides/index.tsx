import { Link, useNavigate } from '@remix-run/react'
import { LoaderFunction, useLoaderData } from 'remix'
import Preview from '~/components/slides/Preview'
import { Slide } from '~/components/slides/Slide'
import { getSlides } from '~/server/getSlides.server'
import { getMdx } from '~/server/mdx.server'
import styles from '~/styles/slide-preview.css'

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

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
      return { ...slide, ...mdx, presentationSlug }
    }),
  )

  return { slides: slidesWithMdx }
}

const LinkToSlide = ({ children, url }) => {
  const navigate = useNavigate()

  return (
    <div className="link-to-slide" onClick={() => navigate(url)}>
      {children}
    </div>
  )
}

export default function Index() {
  const { slides } = useLoaderData<LoaderData>()

  return (
    <div className="slides-container">
      <h1>Slides</h1>

      {slides.length === 0 || (slides.length === 1 && slides[0].mdxContent === '') ? (
        <p>Please add some slides to this presentation</p>
      ) : null}

      <div className="slides">
        {slides.map((slide) => (
          <LinkToSlide key={slide.nr} url={`/presentations/${slide.presentationSlug}/slides/${slide.nr}`}>
            <Preview>
              <Slide code={slide.code} />
            </Preview>
          </LinkToSlide>
        ))}
      </div>
    </div>
  )
}
