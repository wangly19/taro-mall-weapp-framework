import React, { useMemo, useRef, CSSProperties } from "react"
import { pxTransform } from "@tarojs/taro"
import { View } from "@tarojs/components"
import { getNavBarInfo } from "@/utils"
import NavBar from "./NavBar"
import "./index.scss"

const Layout: React.FC = (props) => {
  const navHeightRef = useRef<ReturnType<typeof getNavBarInfo>>(
    getNavBarInfo()
  )

  const navBarStyle: CSSProperties = useMemo(() => {
    const diffTop: number = navHeightRef.current.navHeight - navHeightRef.current.menu.bottom
    return {
      height: navHeightRef.current.navHeight,
      paddingTop: navHeightRef.current.menu.top - diffTop
    }
  }, [])  

  return (
    <View className='weapp-layout'>
      <View className='weapp-layout__header' style={navBarStyle}>
        <NavBar />
      </View>
      {props.children}
    </View>
  );
};

export default Layout;
