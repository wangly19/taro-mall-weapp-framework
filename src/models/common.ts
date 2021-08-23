import { createModel } from "@rematch/core";
import { RootModel } from "./connect";


interface CommonState {
  selectTabBarPath: string
}

const initializeCommonState: CommonState = {
  /** @name 切换选中的tab */
  selectTabBarPath: ''
}

export default createModel<RootModel>()({
  name: 'common',
  state: initializeCommonState,
  reducers: {
    setTabBarSelectPath: (state: CommonState, path: string) => {
      return {
        ...state,
        selectTabBarPath: path
      }
    }
  },
});