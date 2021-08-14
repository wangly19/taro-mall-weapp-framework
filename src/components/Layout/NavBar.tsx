import React, { useRef } from 'react'
import { View } from '@tarojs/components'
import { getNavBarInfo } from '@/utils'
import { HomeOutlined, ArrowLeft } from '@taroify/icons'


const NavBar = () => {

  const navHeightRef = useRef<ReturnType<typeof getNavBarInfo>>(
    getNavBarInfo()
  )

  return (
    <View className='weapp-layout__header__navbar'>
      <View className='weapp-layout__header__navbar__icon'>
        <ArrowLeft className='weapp-layout__header__navbar__icon--primary' />
        <HomeOutlined className='weapp-layout__header__navbar__icon--primary' />
      </View>
      <View className='weapp-layout__header__navbar__title'>标题</View>
    </View>
  )
}

export default NavBar
