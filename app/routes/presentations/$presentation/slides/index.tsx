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
      return { ...slide, ...mdx }
    }),
  )

  return { slides: slidesWithMdx }
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
          <Preview key={slide.nr}>
            <Slide code={slide.code} />
          </Preview>
        ))}
      </div>
    </div>
  )
}
