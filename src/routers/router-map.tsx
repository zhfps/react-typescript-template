import React from 'react'
import Setting from '@/pages/Setting'
import Home from '@/pages/Home'
interface IRouter{
    path: string
    element: JSX.Element
}

const RouterMap:Array<IRouter> = [
  {
    path: 'admin/sub-page1',
    element: <Setting></Setting>
  },
  {
    path: '*',
    element: <Home></Home>
  }
]

export default RouterMap
