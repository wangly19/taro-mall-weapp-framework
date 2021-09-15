import Layout from '@/components/Layout'
import { View } from '@tarojs/components'
import Address from './components/Address'
import React from 'react'
import './index.scss'

const OrderPending = () => {
  return <Layout title="确认订单" menu={['BACK']}>
    <View className="order-pending">
      <Address/>
      </View>
  </Layout>
}

export default OrderPending