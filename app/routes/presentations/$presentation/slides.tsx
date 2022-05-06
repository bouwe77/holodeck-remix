import { Outlet } from 'remix'

export default () => {
  return (
    <>
      {/* <p>This text is shown for every /slides route...</p> */}
      <Outlet />
    </>
  )
}
