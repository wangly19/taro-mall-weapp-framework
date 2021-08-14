import { resolve } from 'path'
import DEV from './dev'
import PRO from './prod'

const config = {
  projectName: 'mall-weapp',
  date: '2021-7-11',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {
  },
  
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  sass: {
    resource: [
			resolve(__dirname, '..', 'src/styles/mixins.scss'),
			resolve(__dirname, '..', 'src/styles/variables.scss'),
		],
  },
  alias: {
		'@': resolve(__dirname, '..', 'src'),
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

export default function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, DEV)
  }
  return merge({}, config, PRO)
}
