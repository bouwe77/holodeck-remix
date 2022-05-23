import { Link } from 'remix'

export default function Header({ slug }: { slug: string }) {
  return (
    <div className="presentation-header">
      <div style={{ margin: 0, padding: 0 }}>
        <h1>{slug}</h1>
      </div>

      <div>
        <Link to={`/presentations/${slug}/slides/1`} target="_blank">
          <button className="start-presentation">START PRESENTATION</button>
        </Link>
      </div>
    </div>
  )
}
