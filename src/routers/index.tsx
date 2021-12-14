import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BaseLayout from '@/layout'
import RouterMap from './router-map'
import Home from '@/pages/Home'
const Routers = () => {
  const RouteList = RouterMap.map((item, index) => {
    return (
      <Route key={index} path={item.path} element={item.element}></Route>
    )
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BaseLayout />}>
          <Route index element={<Home />} />
          {RouteList}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
