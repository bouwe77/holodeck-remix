import { Link, Outlet } from 'remix'
import styles from '~/styles/slide.css'

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

const howMany = 2

export default () => {
  return (
    <>
      <Nav />

      <div className="container">
        <Outlet />
      </div>
    </>
  )
}

export const Center = ({ children }) => {
  return (
    <div className="center-horizontally-vertically">
      <div className="center-content">{children}</div>
    </div>
  )
}

export const Left = ({ children }) => {
  return (
    <div className="left">
      <div />
      <div className="left-content">
        <div>{children[0]}</div>
        <div>{children[1]}</div>
      </div>
    </div>
  )
}

const Nav = () => {
  return (
    <div style={{ border: '2px solid #ddd', padding: '10px', position: 'absolute', top: '50px', left: '30px' }}>
      {Array.from({ length: howMany }).map((_, i) => (
        <Link style={{ margin: '10px', fontSize: '48px', color: '#ddd' }} key={i} to={`/test/${i + 1}`}>
          {i + 1}
        </Link>
      ))}
    </div>
  )
}
