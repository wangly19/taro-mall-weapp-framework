import { useEffect } from 'react'
import router, { useRouter } from '@/router'
import { useSelector } from 'react-redux'
import { RootState } from '@/models'

const useRouterAuth = (fn?: (router: ReturnType<typeof useRouter>) => void) => {

  const routerInstance = useRouter()

  const { nickName, accessToken } = useSelector((state: RootState) => ({
    nickName: state.common.userInfo?.nick_name,
    accessToken: state.common.token
  }))

  /**
   * 默认权限处理方式。
   * @param path 当前路径
   */
  const onAuthDefaultCallBack = (path: string) => {
    console.log('onAuthDefaultCallBack')
    router.replace({
      url: 'pages/auth/index',
      query: {
        last_url: path
      }
    })
  }

  useEffect(() => {

    console.log('useRouterAuth', accessToken)

    /** 获取当前路由 */
    const currentRouterConfig = router.getCurrentPageView(routerInstance.path)

    const currentParsePath: string = router.stringifyRoute({
      url: currentRouterConfig.path, 
      query: routerInstance.params
    })

    /** 获取本地local是否存在token */
    if (currentRouterConfig.useAuth && !accessToken) {
      fn && typeof fn === 'function' ? fn(routerInstance) : onAuthDefaultCallBack(currentParsePath)
    }
  }, [accessToken, nickName])

  return router.getCurrentPageView(routerInstance.path).isTab
}

export default useRouterAuth