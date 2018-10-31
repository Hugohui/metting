import {
    wxRequest,wxPost
} from '@/utils/wxRequest';
  
let env = "-dev" //-dev 或者 -test
var meetingApi = 'https://metting.com/'

const versionName = 'v1.0.0'
const login = (params) => wxRequest(params, meetingApi + 'user/login');
const register = (params) => wxRequest(params, meetingApi + 'user/register');

export default {
    login,
    register
}