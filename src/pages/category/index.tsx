import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Sidebar } from "@taroify/core"

const Category = () => {

  const [activeKey, setActiveKey] = useState<Sidebar.TabKey>(0)
  
  return (
    <View className='category-view'>
      <View className='category-view__slide'>
      <Sidebar activeKey={activeKey} onChange={({ key }) => setActiveKey(key)}>
      <Sidebar.Tab dot>标签名</Sidebar.Tab>
      <Sidebar.Tab badge='5'>标签名</Sidebar.Tab>
      <Sidebar.Tab badge='20'>标签名</Sidebar.Tab>
    </Sidebar>
      </View>
      <View></View>
    </View>
  )
}

export default Category