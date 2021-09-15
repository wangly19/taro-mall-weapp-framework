import { View } from '@tarojs/components'
import React, { CSSProperties, useMemo } from 'react'

interface MicPageTitleProps {
  style?: CSSProperties,
  className?: string
}

const MicPageTitle: React.FC<MicPageTitleProps> = (props) => {

  return (
    <View 
      style={ props?.style } 
      className={ props.className } 
      { ...props }
    >
      {
        props.children
      }
    </View>
  )
}

export default MicPageTitle