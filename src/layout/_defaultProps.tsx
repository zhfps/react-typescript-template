export default {
  title: 'admin-template',
  locale: 'zh-CN',
  route: {
    path: '/',
    routes: [
      {
        path: '/welcome',
        name: '欢迎',
        icon: 'icon-add',
        component: './Welcome'
      },
      {
        path: '/admin',
        name: '管理页',
        icon: 'icon-add',
        access: 'canAdmin',
        component: './Admin',
        routes: [
          {
            path: '/admin/sub-page1',
            name: '一级页面',
            component: './Welcome'
          },
          {
            path: '/admin/sub-page2',
            name: '二级页面',
            component: './Welcome'
          },
          {
            path: '/admin/sub-page3',
            name: '三级页面',
            component: './Welcome'
          }
        ]
      },
      {
        name: '列表页',
        icon: 'icon-add',
        path: '/list',
        component: './ListTableList',
        routes: [
          {
            path: '/list/sub-page',
            name: '一级列表页面',
            routes: [
              {
                path: 'sub-sub-page1',
                name: '一一级列表页面',
                component: './Welcome'
              },
              {
                path: 'sub-sub-page2',
                name: '一二级列表页面',
                component: './Welcome'
              },
              {
                path: 'sub-sub-page3',
                name: '一三级列表页面',
                component: './Welcome'
              }
            ]
          },
          {
            path: '/list/sub-page2',
            name: '二级列表页面',
            component: './Welcome'
          },
          {
            path: '/list/sub-page3',
            name: '三级列表页面',
            component: './Welcome'
          }
        ]
      }
    ]
  },
  location: {
    pathname: '/'
  }
}
