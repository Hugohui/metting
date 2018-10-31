import wepy from 'wepy';
const SET_USER = 'SET_USER';

let userInfo = wx.getStorageSync("userInfo1") || {};
const initState = {
    userInfo1:userInfo
}

export function userReducer(state = initState, action) {
    switch (action.type) {
        case SET_USER:
            return Object.assign(initState,action.user);
        default:
            return state
    }
}

export function setUser(data) {
    return {
        type: SET_USER,
        user: data
    }
}