import { Link } from 'remix'

export default function Index() {
  return (
    <div>
      <h1>My Slides app</h1>

      <Link to="/slides">Slides</Link>
    </div>
  )
}
