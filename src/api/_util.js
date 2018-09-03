import axios from 'axios'
import cookie from 'component-cookie'
import gateway from '../_gateway.config'

// function getBaseUrl (apiRoot) {
//   if (~apiRoot.indexOf('_account')) {
//     return apiRoot.replace('_account', account)
//   }
//   if (~apiRoot.indexOf('_course')) {
//     return apiRoot.replace('_course', course)
//   }
//   if (~apiRoot.indexOf('_teacher')) {
//     return apiRoot.replace('_teacher', teacher)
//   }
//   if (~apiRoot.indexOf('_signalling')) {
//     return apiRoot.replace('_signalling', signalling)
//   }
//   if (~apiRoot.indexOf('_link')) {
//     return apiRoot.replace('_link', link)
//   }
//   return `${account}/api${apiRoot}`
// }

export
function callApi (apiRoot = '/') {

  var obj = {}
    // var token = cookie('abc-token') || decodeURIComponent(getQueryString('authToken'))
    obj = axios.create({
      baseURL: apiRoot,
      timeout: 10000,
      // headers: { 'Authorization': token }
    })

  obj.interceptors.request.use(config => {
    return config
  }, err => {
    return Promise.reject(err)
  })

  obj.interceptors.response.use(res => {
    return res.data
  }, err => {
    // let error
    // function netError () {
    //   if (isTeacher()) {
    //     error = new Error('Network error, please check your network settings')
    //   } else {
    //     error = new Error('网络错误，请检查网络设置')
    //   }
    // }
    //
    // if (err.message === 'Network Error' || ~(err.message || '').indexOf('timeout')) {
    //   netError()
    //   return Promise.reject(error)
    // }
    //
    // const { status, data = {} } = err.response || {}
    //
    // let error = data.message ? new Error(data.message) : err
    // if (~error.message.indexOf('timeout')) {
    //   netError()
    // }

    const error = err
    return Promise.reject(error)

  })

  return obj
}
