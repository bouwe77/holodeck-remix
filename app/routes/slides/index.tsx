import { LoaderFunction, useLoaderData } from 'remix'
import { getSlides, Slide } from '~/server/getSlides.server'
import Header from '~/components/Header'

type LoaderData = {
  slides: Slide[]
}

export const loader: LoaderFunction = async () => {
  const slides = await getSlides()
  return { slides }
}

export default function Index() {
  //  const { slides } = useLoaderData<LoaderData>()

  return (
    <div>
      <Header title="Travelling Through Space with React" />
      <h1>Slides</h1>
      TO DO: Navigation bar + slide preview
    </div>
  )
}
