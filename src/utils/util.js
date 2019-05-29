function getCurrentTime() {
  var keep = '';
  var date = new Date();
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  var f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  var rand = Math.round(Math.random() * 899 + 100);
  keep = y + '-' + m + '-' + d + ' ' + h + ':' + f + ':' + s;
  return keep; //20160614134947
}
function getTimeStamp() {
  var date = new Date().getTime();
  return date; //20160614134947
}

function objLength(input) {
  var type = toString(input);
  var length = 0;
  if (type != "[object Object]") {
    //throw "输入必须为对象{}！"
  } else {
    for (var key in input) {
      if (key != "number") {
        length++;
      }

    }
  }
  return length;
}
//验证是否是手机号码
function vailPhone(number) {
  let flag = false;
  let myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
  if (number.length != 11) {
    flag = flag;
  }else if (!myreg.test(number)) {
    flag = flag;
  }else{
    flag = true;
  }
  return flag;
}
//验证是否西班牙手机(6开头 9位数)
function ifSpanish(number) {
  let flag = false;
  let myreg = /^([6|7|9]{1}(\d+){8})$/;
  if (number.length != 9) {
    flag = flag;
  } else if (!myreg.test(number)) {
    flag = flag;
  } else {
    flag = true;
  }
  return flag;
}
//浮点型除法
function div(a, b) {
  var c, d, e = 0,
    f = 0;
  try {
    e = a.toString().split(".")[1].length;
  } catch (g) { }
  try {
    f = b.toString().split(".")[1].length;
  } catch (g) { }
  return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), mul(c / d, Math.pow(10, f - e));
}
//浮点型加法函数
function accAdd(arg1, arg2) {
  var r1, r2, m;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return ((arg1 * m + arg2 * m) / m).toFixed(2);
}
//浮点型乘法
function mul(a, b) {
  var c = 0,
    d = a.toString(),
    e = b.toString();
  try {
    c += d.split(".")[1].length;
  } catch (f) { }
  try {
    c += e.split(".")[1].length;
  } catch (f) { }
  return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
}

// 遍历对象属性和值
function displayProp(obj) {
  var names = "";
  for (var name in obj) {
    names += name + obj[name];
  }
  return names;
}
// 去除字符串所有空格
function sTrim(text) {
  return text.replace(/\s/ig, '')
}
//去除所有:
function replaceMaohao(txt) {
  return txt.replace(/\:/ig, '')
}
//转换星星分数
function convertStarArray(score) {
  //1 全星,0 空星,2半星
  var arr = []
  for (var i = 1; i <= 5; i++) {
    if (score >= i) {
      arr.push(1)
    } else if (score > i-1 && score < i + 1) {
      arr.push(2)
    } else {
      arr.push(0)
    }
  }
  return arr
}

function isInArray(arr,value){
    for(var i = 0; i < arr.length; i++){
        if(value === arr[i]){
            return true;
        }
    }
    return false;
}


function generateUploadFeedbackData(data,rating,deviceId,attachPlatform){
  var items = new Array();
  var item = new Object();
  var dreason = [];
  dreason.push("不感兴趣");
  item.attachPlatform = attachPlatform;
  item.deviceId = deviceId;
  item.platform = 3;
  item.infoId = data.infoId;
  item.infoType=data.infoType;
  item.rating = rating
  item.recId=data.recId;
  item.dreason = JSON.stringify(dreason);
  item.time =getTimeStamp();
  items.push(item);
  return items;
}
function generateUploadSingleData(data,rating,deviceId,attachPlatform){
  var items = new Array();
  var item = new Object();
  item.attachPlatform = attachPlatform;
  item.deviceId = deviceId;
  item.platform = 3;
  item.infoId = data.infoId;
  item.infoType=data.infoType;
  item.rating = rating
  item.recId=data.recId;
  item.time =getTimeStamp();
  items.push(item);
  return items;
}

function generateUploadItemData(infoId,infoType,recId,rating,deviceId,attachPlatform,dreason){
  var items = new Array();
  var item = new Object();
  item.attachPlatform = attachPlatform;
  item.deviceId = deviceId;
  item.platform = 3;
  item.infoId = infoId;
  item.infoType=infoType;
  item.rating = rating;
  item.recId=recId;
  item.dreason = JSON.stringify(dreason);
  item.time =getTimeStamp();
  items.push(item);
  return items;
}
function generateUploadData(data,deviceId,attachPlatform){
  var item;
  var items = new Array();
  for (var i = 0; i < data.length; i++) {
    item = new Object();
    item.attachPlatform = attachPlatform;
    item.deviceId = deviceId;
    item.platform = 3;
    item.infoId = data[i].infoId;
    item.infoType=data[i].infoType;
    item.rating = 0;
    item.recId=data[i].recId;
    item.time =getTimeStamp();
    items.push(item);
  }
  return items;
}


//检查网络，无网络时提示
function isConnectedNetwork(o){
  let networkStorage = wx.getStorageSync('isConnectedNetwork');
  if(!networkStorage){
    return false;
  }else{
    return true;
  }
}

function setNetwork(){
  //当前网络情况
  wx.getNetworkType({
    success: function(res) {
      // 返回网络类型, 有效值：
      // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
      var networkType = res.networkType;
      let isConnected = true;
      if(networkType == 'none'){
        isConnected = false;
      }else{
        isConnected = true;
      }
      wx.setStorage({
        key:'isConnectedNetwork',
        data:isConnected
      });
    }
  })
  //注册网络变化监听，当网络情况变化时设置网络
  wx.onNetworkStatusChange(function(res){
    wx.setStorage({
      key:'isConnectedNetwork',
      data:res.isConnected
    });
  });
}

function isEmpty(obj){
    if(typeof obj == "undefined" || obj == null || obj == '' ||JSON.stringify(obj) == "{}"){
        return true;
    }else{
        return false;
    }
}
function compareVersion(current,target) {
  if (isEmpty(current)||isEmpty(target)) {
    return true;
  }
  var cu = current.split('.').join('');
  var ta = target.split('.').join('');
  var res = cu*10000>=ta*10000;
  console.log("util  current = "+cu+",target="+ta+"result="+res);
  return cu*10000>=ta*10000;
}

function timeFormat(dateObj,format){
  var args = {
    "M+": dateObj.getMonth() + 1,
    "d+": dateObj.getDate(),
    "h+": dateObj.getHours(),
    "m+": dateObj.getMinutes(),
    "s+": dateObj.getSeconds(),
    "q+": Math.floor((dateObj.getMonth() + 3) / 3), //quarter
  };
  if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (dateObj.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var i in args) {
      var n = args[i];
      if (new RegExp("(" + i + ")").test(format)) format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? n : ("00" + n).substr(("" + n).length));
  }
  return format;
}

module.exports = {
  getCurrentTime: getCurrentTime,
  objLength: objLength,
  displayProp: displayProp,
  sTrim: sTrim,
  replaceMaohao: replaceMaohao,
  vailPhone: vailPhone,
  ifSpanish: ifSpanish,
  div: div,
  mul: mul,
  accAdd: accAdd,
  convertStarArray: convertStarArray,
  getTimeStamp: getTimeStamp,
  isInArray:isInArray,
  generateUploadData,
  generateUploadSingleData,
  isEmpty,
  generateUploadItemData,
  generateUploadFeedbackData,
  setNetwork,
  isConnectedNetwork,
  compareVersion,
  timeFormat
}
