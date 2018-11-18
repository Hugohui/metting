import {
    wxRequest,wxPost
} from '@/utils/wxRequest';
  
let env = "-dev" //-dev 或者 -test
var meetingApi = 'http://meeting.test.dxkj.com/api/'

const versionName = 'v1.0.0'
const login = (params) => wxRequest(params, meetingApi + 'account/login');
const wxLogin = (params) => wxRequest(params, meetingApi + 'account/login_wx');
const register = (params) => wxPost(params, meetingApi + 'account/register');
const setInfo = (params) => wxPost(params, meetingApi + 'account/info');
const getInterviewList = (params) => wxPost(params, meetingApi + 'interview/list');
const getVerifyCode = (params) => wxPost(params, meetingApi + 'sms/verify');
const getAreaCode = (params) => wxPost(params, meetingApi + 'sms/code');

export default {
    login,
    wxLogin,
    register,
    getVerifyCode,
    getAreaCode,
    setInfo,
    getInterviewList
}