const routes = require('./config/routes')

module.exports =  {
  pages: routes.getPageRoutes(),
  tabBar: {
    custom: true, 
    list: routes.getTabBarRoutes()
  },
  window: {
    navigationStyle: 'custom',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  usingComponents: {
  }
}