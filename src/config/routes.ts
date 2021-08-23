const router = [
  {
    name: '首页',
    path: 'pages/home/index',
    useAuth: false,
    isTab: true,
    selectIcons: ['/icons/tab-bar/home.png', '/icons/tab-bar/home-active.png']
  },
  {
    name: '分类',
    path: 'pages/category/index',
    useAuth: false,
    isTab: true,
    selectIcons: ['/icons/tab-bar/category.png', '/icons/tab-bar/category-active.png']
  },
  {
    name: '购物车',
    path: 'pages/cart/index',
    useAuth: true,
    isTab: true,
    selectIcons: ['/icons/tab-bar/cart.png', '/icons/tab-bar/cart-active.png']
  },
  {
    name: '我的',
    path: 'pages/my/index',
    useAuth: true,
    isTab: true,
    selectIcons: ['/icons/tab-bar/my.png', '/icons/tab-bar/my-active.png']
  },

  {
    name: '测试',
    path: 'pages/index/index',
    useAuth: true,
    isTab: false,
  }
]

const getTabBarRoutes = () => {
  return router.filter(r => {
    return r.isTab
  }).map(r => {
    return {
      iconPath: r.selectIcons ? r.selectIcons[0] : '',
      selectedIconPath: r.selectIcons ? r.selectIcons[1] : '',
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
