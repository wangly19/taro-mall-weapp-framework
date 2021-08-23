import { useEffect } from "react";
import { getCurrentInstance } from "@tarojs/taro";
import store from "@/models";

export default function useInitialSetting () {

  useEffect(() => {
    const currentPath: string = getCurrentInstance().router?.path || 'pages/home/index'
    store.dispatch.common.setTabBarSelectPath(currentPath)
  }, [])

}