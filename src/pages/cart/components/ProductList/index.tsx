import { View } from '@tarojs/components'
import React from 'react'
import ProductItem from './Item'
import './index.scss'

export default function ProductList() {
  return (
    <View className="product-list">
      <ProductItem/>
    </View>
  )
}
