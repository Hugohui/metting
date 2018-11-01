import wepy from 'wepy';
function pixel(){
  return 750/wx.getSystemInfoSync().windowWidth;
}

module.exports = {
    pixel
}
