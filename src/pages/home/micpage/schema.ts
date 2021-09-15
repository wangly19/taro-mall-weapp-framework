import { pxTransform } from "@tarojs/taro"

export type MicPageComponentsType = 'page' | 'title' | 'coupon' | 'products' | 'image' | ''

export interface ElementContentAttribute<P = any, R = any> {
  type: MicPageComponentsType
  props?: Record<string, any> | P
  options?: Record<string, any> | R
  body?: ElementContentAttribute []
}

const MicPageSchema: ElementContentAttribute = {
  type: 'page',
  options: {
    title: '自定义页面',
    key: 'ARJaAJENT_page'
  },
  body: [
    {
      type: 'title',
      props: {
        children: '我是自定义的内容',
        style: {
          background: '#FC622C',
          color: '#FFFFFF',
        }
      },
      options: {
        key: 'AKALALALALALAAL_title'
      }
    }
  ]
}

export default MicPageSchema