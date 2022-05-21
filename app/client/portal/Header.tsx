import { Link } from 'remix'

export default function Header({ slug }: { slug: string }) {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ minWidth: '300px' }}>
        <h1>{slug}</h1>
      </div>

      <div style={{ margin: '30px' }}>
        <Link to={`/presentations/${slug}/slides/1`} target="_blank">
          <button style={{ width: '200px' }}>START PRESENTATION</button>
        </Link>
      </div>
    </div>
  )
}
