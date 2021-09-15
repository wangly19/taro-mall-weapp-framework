import Radio from '@taroify/core/radio/radio'
import { View } from '@tarojs/components'
import Image from '@/components/Image'
import React from 'react'

const ProductItem = () => {
  return (
    <View className="product-item">
      <View>
        <Radio/>
      </View>
      <View>
        <Image src="11111" />
      </View>
    </View>
  )
}

export default ProductItem