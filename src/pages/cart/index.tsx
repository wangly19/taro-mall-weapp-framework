import React from 'react'
import { View } from '@tarojs/components'
import { useSelector } from 'react-redux'
import type { RootState } from '@/models'
import Layout from '@/components/Layout'
import OperationBar from './components/OperationBar'
import ProductList from './components/ProductList'
import MarketingBar from './components/MarketingBar'
import './index.scss'

const Cart = () => {

  return (
    <Layout title="购物车">
      <View className="cart-container">
        <MarketingBar/>
        <ProductList/>
        <OperationBar/>
      </View>
    </Layout>
  )
}

export default Cart