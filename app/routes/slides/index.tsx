import { LoaderFunction, useLoaderData } from 'remix'
import { useNavigate } from 'react-router-dom'
import { getSlides, Slide } from '~/server/getSlides.server'

type LoaderData = {
  slides: Slide[]
}

export const loader: LoaderFunction = async () => {
  const slides = await getSlides()
  return { slides }
}

export default function Index() {
  const { slides } = useLoaderData<LoaderData>()
  const navigate = useNavigate()

  return (
    <div>
      <h1>Slides</h1>

      <div>
        <button onClick={() => navigate(`/slides/${slides[0].nr}`)}>START PRESENTATION</button>
      </div>
    </div>
  )
}
