import { createModel } from "@rematch/core";
import { RootModel } from "./connect";
import { UserInfo } from '@/typings/common'


interface CommonState {
  selectTabBarPath: string,
  userInfo: null | UserInfo,
  token: string | null
}

const initializeCommonState: CommonState = {
  /** @name 切换选中的tab */
  selectTabBarPath: '',
  
  /** @name 当前用户信息 */
  userInfo: null,

  /** @name 授权token */
  token: null
}

export default createModel<RootModel>()({
  name: 'common',
  state: initializeCommonState,
  reducers: {

    setAuthToken(state: CommonState, token: string) {
      return {
        ...state,
        token
      }
    },

    setTabBarSelectPath: (state: CommonState, path: string) => {
      return {
        ...state,
        selectTabBarPath: path
      }
    },
    
    setGlobalUserInfo: (state: CommonState, payload: CommonState["userInfo"]) => {
      return {
        ...state,
        userInfo: payload
      }
    }
  },
})