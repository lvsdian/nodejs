const axios = require('axios');
const projectConfig = require('../util/projectConfigResolver');

const hostBaseUrl = projectConfig.hostBaseUrl;

exports.doHttpGetRequest = function(ctx, requestUrl, params) {
    return this.doHttpRequest(ctx, requestUrl, params, 'get');
};

exports.doHttpPutRequest = function(ctx, requestUrl, params) {
    return this.doHttpRequest(ctx, requestUrl, params, 'put');
};

exports.doHttpPostRequest = function(ctx, requestUrl, params) {
    return this.doHttpRequest(ctx, requestUrl, params, 'post');
};

exports.doHttpDeleteRequest = function(ctx, requestUrl, params) {
    return this.doHttpRequest(ctx, requestUrl, params, 'delete');
};

exports.doHttpRequest = function (ctx, requestUrl, params, method) {
    if ('get' === method) {
        return axios({
            baseUrl: hostBaseUrl,
            url: requestUrl,
            method: "get",
            params: params
        });
    } else if ('put' === method || 'post' === method || 'delete' === method) {
        return axios({
            baseUrl: hostBaseUrl,
            url: requestUrl,
            method: "get",
            data: params
        });
    }
};