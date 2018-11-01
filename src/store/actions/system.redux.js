import wepy from 'wepy';
const SET_SYSTEM = 'SET_SYSTEM';
let systemInfo = wx.getSystemInfoSync();
let pixel = 750/systemInfo.windowWidth;

const initState = {
  systemInfo:systemInfo,
  pixel: pixel
}

export function systemReducer(state = initState, action) {
    switch (action.type) {
        case SET_SYSTEM:
            return {...initState, ...action.system }
        default:
            return state
    }
}

export function setSystem(data) {
    return {
        type: SET_SYSTEM,
        system: data
    }
}
