import React from 'react'
import { SwipeCell, Button, Image } from "@taroify/core"
import { View } from '@tarojs/components'
import './index.scss'

const ProductCell = () => {
  return (
    <View>
    <SwipeCell className='custom-swipe-cell'>
      <View className='custom-card'>
        <Image className='custom-card__thumb' src='https://img01.yzcdn.cn/vant/ipad.jpeg' />
        <View className='custom-card__content'>
          <View className='custom-card__title'>商品标题</View>
        </View>
      </View>
      <SwipeCell.Actions side='right'>
        <Button variant='contained' shape='square' color='danger'>
          删除
        </Button>
        <Button variant='contained' shape='square' color='primary'>
          收藏
        </Button>
      </SwipeCell.Actions>
    </SwipeCell>
    </View>
  )
}

export default ProductCell
