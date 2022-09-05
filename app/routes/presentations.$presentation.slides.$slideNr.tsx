import * as React from 'react'
import { useLoaderData } from '@remix-run/react'
import type { LoaderFunction } from '@remix-run/node'
import { getMdx } from '~/server/mdx.server'
import { getSlides } from '~/server/getSlides.server'
import { useNavigate } from 'react-router-dom'
import useKeyboardNavigation from '~/components/slides/useKeyboardNavigation'
import Fullscreen from '~/components/slides/Fullscreen'
import { Slide } from '~/components/slides/Slide'
import styles from '~/styles/slide-fullscreen.css'
import VerticalAlign from '~/components/slides/VerticalAlign'
import Wrapper from '~/components/slides/Wrapper'

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export type LoaderData = {
  slide: {
    code: string
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

  console.log(slide.mdxContent)

  const mdx = await getMdx(presentationSlug, slide.mdxContent)

  return {
    slide: {
      ...slide,
      code: mdx.code,
    },
    numberOfSlides: slides.length,
    presentationSlug,
  }
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
    <Wrapper>
      <Fullscreen>
        <Slide code={code} />
      </Fullscreen>
    </Wrapper>
  )
}
