import wepy from 'wepy';
import config  from'../config/config.js';
import tip from './tip'

const wxRequest = async(params = {}, url) => {
    if (params.showLoading) {
      tip.loading();
    }
    let data = params.query || {};
    // data.app_version = config.version_name
    // data.app_name = config.app_name;
    // data.app_id = config.app_id;
    let res = await wepy.request({
        url: url,
        method: params.method || 'GET',
        data: data,
        header: { 'Content-Type': 'application/xml' },
    });
    if (params.showLoading) {
      tip.loaded();
    }
    return res;
};

const wxPost = async(params = {}, url) => {
    if (params.showLoading) {
      tip.loading();
    }
    let data = params.post || {};
    data.app_version = config.version_name
    data.app_name = config.app_name;
    data.app_id = config.app_id;
    let res = await wepy.request({
        url: url,
        method: 'POST',
        data: data,
        header: { 'Content-Type': 'application/json' },
    });
    if (params.showLoading) {
      tip.loaded();
    }
    return res;
};

module.exports = {
    wxRequest,
    wxPost
}
