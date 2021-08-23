import React from 'react'
import { View } from '@tarojs/components'
import { useSelector } from 'react-redux'
import type { RootState } from '@/models'
import Layout from '@/components/Layout'
import pageViewConfig from './index.config'

const Cart = () => {

  const selectTabBarPath = useSelector((state: RootState) => {
    return state.common
  })

  return (
    <Layout title={pageViewConfig.navigationBarTitleText}>
      1111
      <View>
        {
          JSON.stringify(selectTabBarPath)
        }
      </View>
    </Layout>
  )
}

export default Cart