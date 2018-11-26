import {
    wxRequest,wxPost
} from '@/utils/wxRequest';
  
let env = "-dev" //-dev 或者 -test
var meetingApi = 'http://meeting.test.dxkj.com/api/'

const versionName = 'v1.0.0'
const login = (params) => wxPost(params, meetingApi + 'account/login');
const wxLogin = (params) => wxPost(params, meetingApi + 'account/login_wx');
const register = (params) => wxPost(params, meetingApi + 'account/register');
const reset = (params) => wxPost(params, meetingApi + 'account/reset');
const updateInfo = (params) => wxPost(params, meetingApi + 'account/info');
const getInterviewList = (params) => wxPost(params, meetingApi + 'interview/list');
const getVerifyCode = (params) => wxPost(params, meetingApi + 'sms/verify');
const getAreaCode = (params) => wxPost(params, meetingApi + 'sms/code'); 
const getJobLists = (params) => wxPost(params, meetingApi + 'interview/lists');

export default {
    login,
    wxLogin,
    register,
    reset,
    updateInfo,
    getVerifyCode,
    getAreaCode,
    getInterviewList,
    getJobLists
}