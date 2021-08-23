import Taro from "@tarojs/taro"
import { TAB_BAR_HEIGHT } from '@/utils/shard'

/**
 * 获取当前导航条信息高度
 * @returns { 项目相关高度 }
 */
export function getNavBarInfo () {
  
  const systemInfo = Taro.getSystemInfoSync()

  const capsuleInfo = Taro.getMenuButtonBoundingClientRect()
  
  if (systemInfo && capsuleInfo) {
    const navHeight = (
      capsuleInfo.top - systemInfo.statusBarHeight
    ) * 2 + capsuleInfo.height + systemInfo.statusBarHeight;
    return {
      navHeight,
      screen: {
        height: systemInfo.screenHeight,
        body: systemInfo.screenHeight - TAB_BAR_HEIGHT - navHeight
      },
      menu: {
        height: capsuleInfo.height,
        width: capsuleInfo.width,
        bottom: capsuleInfo.bottom,
        right: capsuleInfo.right,
        top: capsuleInfo.top,
      }
    }

  }
  return {
    navHeight: 0,
    screen: {
      height: 0,
      body: 0,
    },
    menu: {
      height: 0,
      width: 0,
      bottom: 0,
      right: 0,
      top: 0
    }
  }
}