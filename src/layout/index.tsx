import React, { useState } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { Button, Descriptions, Avatar, Space, Statistic } from 'antd'
import { LikeOutlined, UserOutlined } from '@ant-design/icons'
import type { ProSettings } from '@ant-design/pro-layout'
import ProLayout, { PageContainer, SettingDrawer, ProBreadcrumb } from '@ant-design/pro-layout'
import defaultProps from './_defaultProps'
import './index.less'
const content = (
  <Descriptions size='small' column={2}>
    <Descriptions.Item label='创建人'>张三</Descriptions.Item>
    <Descriptions.Item label='联系方式'>
      <a>421421</a>
    </Descriptions.Item>
    <Descriptions.Item label='创建时间'>2017-01-10</Descriptions.Item>
    <Descriptions.Item label='更新时间'>2017-10-10</Descriptions.Item>
    <Descriptions.Item label='备注'>中国浙江省杭州市西湖区古翠路</Descriptions.Item>
  </Descriptions>
)
const BaseLayout = () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({ fixSiderbar: true, fixedHeader: true, contentWidth: 'Fluid' })
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
        iconfontUrl='../icon/iconfont.js'
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
        <PageContainer
          breadcrumbRender={false}
          content={content}
          tabList={[
            {
              tab: '基本信息',
              key: 'base'
            },
            {
              tab: '详细信息',
              key: 'info'
            }
          ]}
          extraContent={
            <Space size={24}>
              <Statistic title='Feedback' value={1128} prefix={<LikeOutlined />} />
              <Statistic title='Unmerged' value={93} suffix='/ 100' />
            </Space>
          }
          extra={[
            <Button key='3'>操作</Button>,
            <Button key='2'>操作</Button>,
            <Button key='1' type='primary'>
              主操作
            </Button>
          ]}
        >
          <div
            style={{
              height: '120vh'
            }}
          >
            <Outlet/>
          </div>
        </PageContainer>
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
