import React, { useMemo, useRef, CSSProperties } from "react"
import { View } from "@tarojs/components"
import { getNavBarInfo } from "@/utils"
import NavBar from "./NavBar"
import "./index.scss"

interface LayoutProps {
  title: string,
  menu?: string[],
  clearHeight?: boolean
}

const Layout: React.FC<LayoutProps> = (props) => {

  /** @Ref 当前getNavBarInfo的返回值 */
  const navHeightRef = useRef<ReturnType<typeof getNavBarInfo>>(
    getNavBarInfo()
  )

  /**@MemoValue 当前导航条样式计算 */
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
        <NavBar title={props.title} menu={props.menu || []} />
      </View>
      <View className='weapp-layout__content' style={{
        height: props.clearHeight ? '100%' : navHeightRef.current.screen.body 
      }}
      >
        {props.children}
      </View>
    </View>
  );
};

Layout.defaultProps = {
  menu: []
}

export default Layout;
