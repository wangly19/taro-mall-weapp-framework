import Taro from "@tarojs/taro";
import { createModel } from "@rematch/core";
import { RootModel } from "./connect";


interface CommonState {
  systemInfo: Taro.getSystemInfoSync.Result | null
}

const initializeCommonState: CommonState = {
  systemInfo: null
}

export default createModel<RootModel>()({
  name: 'common',
  state: initializeCommonState,
  reducers: {
    setSystemInfo(state, payload: CommonState['systemInfo']) {
      return {
        ...state,
        systemInfo: payload
      }
    },
  },
  effects: (dispatch) => ({
    /**
     * 获取当前设备信息
     */
    async getSystemInfoSync() {
      const systemInfo = await Taro.getSystemInfoSync()
      console.log(systemInfo, 'systemInfo')
      dispatch.common.setSystemInfo(systemInfo)
    },
  }),
});