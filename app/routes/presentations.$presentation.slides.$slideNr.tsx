import * as React from 'react'
import { LoaderFunction, useLoaderData } from 'remix'
import { getMdx } from '~/server/mdx.server'
import { getSlides } from '~/server/getSlides.server'
import { useNavigate } from 'react-router-dom'
import useKeyboardNavigation from '~/client/navigation/useKeyboardNavigation'
import Fullscreen from '~/client/slide/Fullscreen'
import { Slide } from '~/client/slide/Slide'
import styles from '~/styles/slide.css'

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}
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
  presentationSlug: string
}

export const loader: LoaderFunction = async ({ params }): Promise<LoaderData> => {
  const presentationSlug = params.presentation ?? ''
  const slideNr = parseInt(params.slideNr ?? '1')

  const slides = await getSlides(presentationSlug)

  const slide = slides.find((slide) => slide.nr === slideNr)

  if (!slide) {
    throw new Response(`Not Found: slideNr ${slideNr} could not be found`, {
      status: 404,
    })
  }

  const mdx = await getMdx(slide.mdxContent)

  return { slide: { ...slide, ...mdx }, numberOfSlides: slides.length, presentationSlug }
}

export default () => {
  const {
    slide: { code, previousSlideNr, nextSlideNr },
    presentationSlug,
  } = useLoaderData<LoaderData>()

  const navigate = useNavigate()

  const goToNextSlide = React.useCallback(() => {
    if (!nextSlideNr) return
    navigate(`/presentations/${presentationSlug}/slides/${nextSlideNr}`)
  }, [navigate, nextSlideNr, presentationSlug])
  const goToPreviousSlide = React.useCallback(() => {
    if (!previousSlideNr) return
    navigate(`/presentations/${presentationSlug}/slides/${previousSlideNr}`)
  }, [navigate, previousSlideNr, presentationSlug])

  useKeyboardNavigation(goToNextSlide, goToPreviousSlide)

  return (
    <Fullscreen>
      <Slide code={code} />
    </Fullscreen>
  )
}
