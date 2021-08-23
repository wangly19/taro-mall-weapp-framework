import React from 'react'
import { View } from '@tarojs/components'
import Layout from '@/components/Layout'
import { Button } from "@taroify/core"
import pageViewConfig from './index.config'

const Home = () => {

  return (
    <Layout title={pageViewConfig.navigationBarTitleText}>
      <View>
        <Button color='primary'>主要按钮</Button>
        <Button color='info'>信息按钮</Button>
        <Button color='success'>成功按钮</Button>
        <Button color='warning'>警告按钮</Button>
        <Button color='danger'>危险按钮</Button>
        <Button color='default'>默认按钮</Button>
      </View>
    </Layout>
  )
}

export default Home