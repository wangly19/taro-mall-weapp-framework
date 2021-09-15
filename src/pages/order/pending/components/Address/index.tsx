import { View } from '@tarojs/components'
import { Arrow } from '@taroify/icons'
import { Cell } from '@taroify/core'
import router from '@/router'
import React from 'react'
import './index.scss'

export default function Address() {

  const onChangeAddressInfo = (action: 'ADD' | 'CHANGE') => () => {
    router.push({
      url: 'pages/address/list/index',
      query: {
        source: action
      }
    })
  }

  return (
    <View className="order-pending__address">
      <View className="order-pending__address__empty">
        <Cell 
          clickable
          title="手动添加收货地址" 
          rightIcon={<Arrow />} 
          onClick={ onChangeAddressInfo('ADD') } />
      </View>
    </View>
  )
}
