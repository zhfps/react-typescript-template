import React from 'react'
import Setting from '@/pages/Setting'
import Home from '@/pages/Home'
interface IRouter{
    path: string
    element: JSX.Element
}

const RouterMap:Array<IRouter> = [
  {
    path: 'setting',
    element: <Setting></Setting>
  },
  {
    path: '*',
    element: <Home></Home>
  }
]

export default RouterMap
