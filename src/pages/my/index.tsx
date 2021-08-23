import React from 'react'
import { View } from '@tarojs/components'
import Layout from '@/components/Layout'
import pageViewConfig, { navigatorBarMenu } from './index.config'

const My = () => {
  return (
    <Layout title={pageViewConfig.navigationBarTitleText} menu={navigatorBarMenu}> 
      <View>My</View>
    </Layout>
    
  )
}

export default My