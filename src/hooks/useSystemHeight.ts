import { getMenuButtonBoundingClientRect, getSystemInfoSync } from "@tarojs/taro";
import { useEffect, useRef } from "react";

export default function useSystemHeight () {

  /** @name 系统信息ref */
  const systemInfoRef = useRef<null | getSystemInfoSync.Result>(null)

  /** @name 获取胶囊位置ref */
  const capsuleRef = useRef<null | getMenuButtonBoundingClientRect.Rect>(null)

  useEffect(() => {
    systemInfoRef.current = getSystemInfoSync()
    capsuleRef.current =  getMenuButtonBoundingClientRect()
  }, [])

  return {
    systemInfoRef,
    capsuleRef
  }
}