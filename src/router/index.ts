import Taro from '@tarojs/taro'
import routerConfig from '@/config/routes'
import qs from 'query-string'
import type { Route } from '@/config/routes'

interface RouteParams {
  url: string,
  query?: qs.StringifiableRecord,
}


class Router {

  private routes: Route[]

  constructor() {
    this.routes = routerConfig.routes
  }

  /**
   * 转换 query string 字符串
   * @param params 跳转页面参数
   * @returns query string
   */
  stringifyRoute(params: RouteParams): string {

    const parseUrl: string = params.url.startsWith('/') ? params.url : `/${params.url}`

    const qsRouteUrl: string = qs.stringifyUrl({
      url: parseUrl,
      query: params.query
    })
    return qsRouteUrl
  }

  /**
   * 获取当前路由的配置参数
   * @param url 路由地址
   * @returns 路由参数
   */
  getCurrentPageView (url: string): Route {

    const currentRoute: Route | undefined = this.routes.find(el => url.includes(el.path))

    if (!currentRoute) throw new Error(`[ Router Error ]: ${url}地址不存在，请检查当前地址是否正确。`)

    return currentRoute
  }

  /**
   * 跳转到指定页面
   * @param params 页面参数
   * @returns 
   */
  push(params: RouteParams) {
    
    const qsRouteUrl = this.stringifyRoute(params)

    const currentRoute = this.getCurrentPageView(params.url)

    /** @if 判断当前页面是否是tab页面 */
    if (currentRoute.isTab) {
      return Taro.switchTab({
        url: qsRouteUrl
      })
    }

    return Taro.navigateTo({
      url: qsRouteUrl
    })
    
  }

  /**
   * 重定向跳转页面
   * @param params 请求参数
   * @returns 
   */
  replace(params: RouteParams) {

    const qsRouteUrl = this.stringifyRoute(params)

    const currentRoute = this.getCurrentPageView(params.url)

    /** @if 判断当前页面是否是tab页面 */
    if (currentRoute.isTab) {
      return Taro.switchTab({
        url: qsRouteUrl
      })
    }

    return Taro.redirectTo({
      url: qsRouteUrl
    })
  }

  goBack(pageLength: number) {
    try {
      return Taro.navigateBack({
        delta: pageLength
      })
    } catch (error) {
      throw new Error(`路由错误：router.goBack方式执行有误, ${ error }`)
    }
  }

  reLaunch(params: RouteParams ) {

    const qsRouteUrl = this.stringifyRoute(params)

    this.getCurrentPageView(params.url)

    return Taro.reLaunch({
      url: qsRouteUrl
    })
    
  }

  reHome(query?: RouteParams['query']) {
    if (query) {
      return this.reLaunch({
        url: 'pages/home/index',
        query
      })
    }
    return this.reLaunch({
      url: 'pages/home/index',
    })
  }
  
}

const router = new Router()


export default router