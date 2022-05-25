import { Link, LoaderFunction, Outlet, useLoaderData } from 'remix'
import { getPresentations } from '~/server/getSlides.server'
import styles from '~/styles/presentation.css'

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

interface LoaderData {
  presentations: string[]
}

export const loader: LoaderFunction = async (): Promise<LoaderData> => {
  const presentations = await getPresentations()

  return {
    presentations: presentations.map((p) => p.slug).sort((a, b) => (a < b ? -1 : a > b ? 1 : 0)),
  }
}

export default function Index() {
  const { presentations } = useLoaderData<LoaderData>()

  return (
    <div className="container">
      <div className="header">
        <h1>My slides</h1>
      </div>

      <div className="main">
        <div className="presentations">
          <ul className="presentations-nav">
            {presentations.map((presentation) => (
              <li key={presentation}>
                <Link to={`/presentations/${presentation}/slides`}>{presentation}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="content">
          <Outlet />

          <div className="footer">
            made by <a href="https://bouwe.io">Bouwe</a>
          </div>
        </div>
      </div>
    </div>
  )
}
