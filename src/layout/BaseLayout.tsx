import React from 'react'
import { Outlet, Link } from 'react-router-dom'
const Layout = () => {
  return (<>
    <div>xxxx</div>
    <Link to='/setting'>About</Link>
    <Outlet />
  </>)
}
export default Layout
