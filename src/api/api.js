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
const getJobLists = (params) => wxPost(params, meetingApi + 'interview/index_lists');
const getJobDetail = (params) => wxPost(params, meetingApi + 'interview/info');
const getBookedJobLists = (params) => wxPost(params, meetingApi + 'interview/candidate_lists');
const getJobTimeable = (params) => wxPost(params, meetingApi + 'interview/timeable');
const submitBookTime = (params) => wxPost(params, meetingApi + 'interview/submit');

export default {
    login,
    wxLogin,
    register,
    reset,
    updateInfo,
    getVerifyCode,
    getAreaCode,
    getInterviewList,
    getJobLists,
    getJobDetail,
    getBookedJobLists,
    getJobTimeable,
    submitBookTime
}