import request from './http'

export function loginApi(params) {
  return request.getWithParam('/shangge/userLogin/login', params)
}

export function logoutApi(params) {
  return request.getWithParam('/shangge/userLogin/loginOut', params)
}

export function editPwdApi(params) {
  return request.getWithParam('/shangge/user/updatePwd', params)
}
