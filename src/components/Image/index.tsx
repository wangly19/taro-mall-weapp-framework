import { Image as NativeImage } from '@tarojs/components'
import { ImageProps } from '@tarojs/components/types/Image'
import React, { createElement, useMemo } from 'react'

const { NODE_ENV } = process.env

interface CustomImageProps extends ImageProps {}

const Image: React.FC<CustomImageProps> = (props) => {

  console.log(NODE_ENV, 'NODE_ENV')

  const newProps = useMemo(() => {
    const src = props.src
    

    return props
  }, [props.src])
  

  return createElement(NativeImage, newProps)
}


export default Image