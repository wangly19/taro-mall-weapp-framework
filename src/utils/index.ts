import Taro from "@tarojs/taro"

/**
 * 获取当前导航条信息高度
 * @returns { 项目相关高度 }
 */
export function getNavBarInfo () {
  
  const systemInfo = Taro.getSystemInfoSync()

  const capsuleInfo = Taro.getMenuButtonBoundingClientRect()

  console.log(capsuleInfo, 'capsuleInfo')
  
  if (systemInfo && capsuleInfo) {
    const navHeight = (
      capsuleInfo.top - systemInfo.statusBarHeight
    ) * 2 + capsuleInfo.height + systemInfo.statusBarHeight;
    return {
      navHeight,
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
    menu: {
      height: 0,
      width: 0,
      bottom: 0,
      right: 0,
      top: 0
    }
  }
}