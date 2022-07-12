import { useLoaderData, Link, Outlet } from '@remix-run/react'
import type { LoaderFunction } from '@remix-run/node'
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
        <h1>Holodeck</h1>
        <h2>Quickly create a slide deck with Markdown and MDX</h2>
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
