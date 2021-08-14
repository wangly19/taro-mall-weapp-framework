const router = [
  {
    name: '首页',
    path: 'pages/home/index',
    useAuth: false,
    isTab: true,
  },
  {
    name: '分类',
    path: 'pages/category/index',
    useAuth: false,
    isTab: true,
  },
  {
    name: '购物车',
    path: 'pages/cart/index',
    useAuth: true,
    isTab: true,
  },
  {
    name: '我的',
    path: 'pages/my/index',
    useAuth: true,
    isTab: true,
  }
]

const getTabBarRoutes = () => {
  return router.filter(r => {
    return r.isTab
  }).map(r => {
    return {
      text: r.name,
      pagePath: r.path
    }
  })
}

const getPageRoutes = () => {
  return router.map(r => {
    return r.path
  })
}

module.exports = {
  routes: router,
  getTabBarRoutes,
  getPageRoutes
}
