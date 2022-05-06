import { Link, LoaderFunction, Outlet, useLoaderData } from 'remix'

interface LoaderData {
  presentations: string[]
}

export const loader: LoaderFunction = async (): Promise<LoaderData> => {
  return { presentations: ['about-me', 'react'] }
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
