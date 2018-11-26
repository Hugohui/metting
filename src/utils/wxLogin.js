import wepy from 'wepy';
import api from '@/api/api'
import { setUser } from '@/store/actions/user.redux'
import { getStore } from 'wepy-redux'
const store = getStore();
/**
*授权登录
*params(o):
*userInfo 用户身份信息
*showLoading 登录是否显示加载动画
*callback 授权之后的回调函数
*/

const login = async(o)=> {
  const defaultOptions = {
    showLoading:false,
    userInfo:{},
    callback:function(){}
  }
let options = Object.assign({},defaultOptions,o);
wx.getSetting({
    success:function(res){
      if (res.authSetting["scope.userInfo"]) {
        wx.login({
          success:function(res){
            api.wxLogin({
              post: {
                code: res.code,
                nick: options.userInfo.nickName,
                pic: options.userInfo.avatarUrl
              },
              showLoading:options.showLoading
            }).then(function(json){
              if(json.data.code == 1000){
                store.dispatch(setUser({
                  user_id:json.data.data.userId,
                  userInfo:options.userInfo,
                  loginType: 'wx'
                }));
                wx.setStorage({
                  key:"userInfo_v1.0.0",
                  data:options.userInfo
                });
              }
            });
          }
        });
      }
    }
  })
};
module.exports = {
    login
}