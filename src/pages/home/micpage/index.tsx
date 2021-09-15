import Layout from '@/components/Layout'
import React, { useMemo } from 'react'
import TitleElement from './Elements/TitleElement'

import MicPageSchema, { ElementContentAttribute } from './schema'

const MicPageContainer = () => {

  const handleMicPageComponent = (elSchema: ElementContentAttribute) => {

    switch (elSchema.type) {
      case 'title':
        return <TitleElement key={ elSchema.options.key } { ...elSchema.props } />
    
      default:
        break;
    }
    return null
  }

  const rootElement = useMemo(() => {
    if (MicPageSchema.body && Array.isArray(MicPageSchema.body)) {
      /** TODO: 解析 rootElement, 替换当前fontSize: number 为 pxTransform(number) */
    } else {
      throw new Error(`[throw Error]: 当前MicPageSchema内容不是一个数组，请检查微页面配置是否存在问题`)
    }

    return MicPageSchema
    
  }, [])

  return (
    <Layout title={ rootElement.options.title } menu={ ['BACK', 'HOME'] }>
      {
        rootElement.body?.map((el: ElementContentAttribute) => {
          const element = handleMicPageComponent(el)
          return element ? element : null
        })
      }
    </Layout>
  )

}

export default MicPageContainer