import React, { useState } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import type { ProSettings } from '@ant-design/pro-layout'
import ProLayout, { SettingDrawer, ProBreadcrumb } from '@ant-design/pro-layout'
import defaultProps from './_defaultProps'
import defaultSettings from './defaultSetting'
import './index.less'
const BaseLayout = () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>(defaultSettings)
  const [pathname, setPathname] = useState('/welcome')
  const navigate = useNavigate()
  return (
    <div
      id='base-layout'
      style={{
        height: '100vh'
      }}
    >
      <ProLayout
        {...defaultProps}
        logo='../favicon.svg'
        location={{
          pathname
        }}
        waterMarkProps={{
          content: 'it_dog_zhang'
        }}
        // iconfontUrl='../icon/iconfont.js'
        headerContentRender={() => <ProBreadcrumb />}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome')
              navigate(item.path || '/welcome')
            }}
          >
            {dom}
          </a>
        )}
        rightContentRender={() => (
          <div>
            <Avatar shape='square' size='small' icon={<UserOutlined />} />
          </div>
        )}
        {...settings}
      >
        <div className='dg-page-content'>
          <Outlet/>
        </div>
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        getContainer={() => document.getElementById('base-layout')}
        settings={settings}
        onSettingChange={(changeSetting) => {
          setSetting(changeSetting)
        }}
        disableUrlParams
      />
    </div>
  )
}

export default BaseLayout
