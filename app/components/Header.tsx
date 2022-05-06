import { Link } from 'remix'

export default function Header({ title = 'My Slides' }: { title?: string }) {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ minWidth: '300px' }}>
        <h1>{title}</h1>
      </div>

      <div style={{ margin: '30px' }}>
        <Link to="/slides/1" target="_blank">
          <button style={{ width: '200px' }}>START PRESENTATION</button>
        </Link>
      </div>
    </div>
  )
}
