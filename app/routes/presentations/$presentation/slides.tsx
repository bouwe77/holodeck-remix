import { Outlet } from '@remix-run/react'

export default () => {
  return (
    <>
      {/* <p>This text is shown for every /slides route...</p> */}
      <Outlet />
    </>
  )
}
