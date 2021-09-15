import React, { useMemo, useRef, CSSProperties } from "react"
import { View } from "@tarojs/components"
import { getNavBarInfo } from "@/utils"
import useRouterAuth from "@/hooks/useRouterAuth"
import NavBar from "./NavBar"
import "./index.scss"

interface LayoutProps {
  title: string,
  menu?: ['BACK'] | ['HOME'] | ['BACK', 'HOME'] | [],
  clearHeight?: boolean,
  customNavBar?: React.ReactNode,
}

const Layout: React.FC<LayoutProps> = (props) => {

  /** @Ref 当前getNavBarInfo的返回值 */
  const navHeightRef = useRef<ReturnType<typeof getNavBarInfo>>(
    getNavBarInfo()
  )

  const isTab = useRouterAuth()

  /**@MemoValue 当前导航条样式计算 */
  const navBarStyle: CSSProperties = useMemo(() => {
    const diffTop: number = navHeightRef.current.navHeight - navHeightRef.current.menu.bottom
    return {
      height: navHeightRef.current.navHeight,
      paddingTop: navHeightRef.current.menu.top - diffTop
    }
  }, [])

  console.log(props.customNavBar, 'customNavBar')

  return (
    <View className='weapp-layout'>
      {
        props.customNavBar ? props.customNavBar :
        <View className='weapp-layout__header' style={navBarStyle}>
          <NavBar title={props.title} menu={props.menu || []} />
        </View>
      }
      <View className='weapp-layout__content'>
        {props.children}
      </View>
      {
        isTab && <View className="weapp-layout__footer" />
      }
    </View>
  );
};

Layout.defaultProps = {
  menu: []
}

export default Layout;
