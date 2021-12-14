import React from 'react'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import Routers from './routers'
const App = () => (
  <div className='App'>
    <ConfigProvider locale={zhCN}>
      <Routers />
    </ConfigProvider>
  </div>
)

export default App
