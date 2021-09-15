import Taro from "@tarojs/taro"

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
        body: systemInfo.screenHeight - navHeight
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

/**
 * 
 * @param val 当前传入的值
 * @returns 与compareVal的最小值
 */
export function getMinValue (val: number, compareVal?: number) {
  return Math.min(val, compareVal || 0)
}