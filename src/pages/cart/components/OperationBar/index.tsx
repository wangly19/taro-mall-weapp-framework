import { View, Text } from '@tarojs/components'
import React from 'react'
import { Radio, Button } from "@taroify/core";
import router from '@/router';
import './index.scss'

export default function OperationBar() {

  /**
   * 结算购物车
   * @returns { void }
   */
  const onCheckoutCart = () => {
    router.push({
      url: '/pages/order/pending/index',
      query: {
        source: 'CART'
      }
    })
  }

  return (
    <View className="operation-bar">
      <View className="operation-bar__radio">
      <Radio name="2" />
      <Text className="operation-bar__radio__text">全选</Text>
      </View>
      <View className="operation-bar__price">
        合计：<Text className="operation-bar__price__total">¥2000.19</Text>
      </View>
      <View className="operation-bar__btn">
        <Button
          block
          hairline
          variant="contained"
          shape="round"
          onClick={ onCheckoutCart }
          color="linear-gradient(to right, #ff6034, #ee0a24)"
        >
          结算
        </Button>
      </View>
    </View>
  )
}
