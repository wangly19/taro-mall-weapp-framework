import { createModel } from "@rematch/core";
import { RootModel } from "./connect";
import { Popup } from '@taroify/core'



interface ActionsState {
  globalLoadingText: string,
  globalModal: null | Popup.BackdropProps
}

const initializeActionsState: ActionsState = {
  globalLoadingText: '',
  globalModal: null
}

export default createModel<RootModel>()({
  name: 'actions',
  state: initializeActionsState,
  reducers: {
    /**
     * 
     * @param state ActionsState
     * @param isShow 是否显示加载中文本
     * @returns ActionsState
     */
    showLoadingTextTips: (state: ActionsState, isShow: boolean) => {
      return {
        ...state,
        globalLoadingText: isShow ? '加载中...' : ''
      }
    }
  },
})