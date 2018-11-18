import wepy from 'wepy';
const SET_ADDRESS = 'SET_ADDRESS';

let address = wx.getStorageSync("address_v1.0") || '暂未定位';
const initState = {
    addressInfo:{
        address: address
    }
}

export function addressReducer(state = initState, action) {
    switch (action.type) {
        case SET_ADDRESS:
            return Object.assign(initState,action.addressInfo);
        default:
            return state
    }
}

export function setAddress(data) {
    return {
        type: SET_ADDRESS,
        addressInfo: data
    }
}
