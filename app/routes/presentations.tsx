import { Link, LoaderFunction, Outlet, useLoaderData } from 'remix'
import { getPresentations } from '~/server/getSlides.server'

interface LoaderData {
  presentations: string[]
}

export const loader: LoaderFunction = async (): Promise<LoaderData> => {
  const presentations = await getPresentations()

  return { presentations: presentations.map((p) => p.slug) }
}

export default function Index() {
  const { presentations } = useLoaderData<LoaderData>()

  return (
    <div>
      <h1>My Presentations</h1>

      <div style={{ display: 'flex' }}>
        <div style={{ width: '200px' }}>
          <Link to="/presentations">Presentations</Link>
          <ul>
            {presentations.map((presentation) => (
              <li key={presentation}>
                <Link to={`/presentations/${presentation}/slides`}>{presentation}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
