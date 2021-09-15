import { useEffect } from "react";
import { getCurrentInstance, getStorageSync } from "@tarojs/taro";
import store from "@/models";

export default function useInitialSetting () {

  const onSetStorageAccessToken = () => {
    const accessTokenResult = getStorageSync('access_token')
    if (accessTokenResult) {
      store.dispatch.common.setAuthToken(accessTokenResult)
    }
  }

  useEffect(() => {
    const currentPath: string = getCurrentInstance().router?.path || 'pages/home/index'
    store.dispatch.common.setTabBarSelectPath(currentPath)
    onSetStorageAccessToken()
  }, [])

}