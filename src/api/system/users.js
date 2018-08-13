import request from '../http'

export function getUserListApi(params) {
  return request.post('/shangge/user/findAll', params)
}

export function deleteUserApi(params) {
  return request.post('/shangge/user/delete', params)
}

export function lockUserApi(params) {
  return request.post('/shangge/user/disableUser', params)
}

export function sendEmailMsgApi(params) {
  return request.post('/shangge/sendMail/batchSendMail', params)
}

export function sendPhoneMsgApi(params) {
  return request.post('/shangge/sms/sendSMS', params)
}

export function reSetPwdApi(params) {
  return request.post('/shangge/user/resetUserPwd', params)
}

export function getUserInfoApi(params) {
  return request.post('/shangge/user/findById', params)
}

export function approveSituationApi(params) {
  return request.post('/shangge/userWorks/findWorkStat', params)
}

export function saveUserApi(params) {
  return request.post('/shangge/user/save', params)
}

export function editUserApi(params) {
  return request.post('/shangge/user/update', params)
}

export function getUserSignInfoApi(params) {
  return request.post('/shangge/signup/findByUserId', params)
}

export function saveUserSignInfoApi(params) {
  return request.post('/shangge/signup/update', params)
}
