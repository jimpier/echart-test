import request from '../http'

export function getWorkListApi(params) {
  return request.post('/shangge/userWorks/findAll', params)
}

export function firstTrialApi(params) {
  return request.post('/shangge/userWorks/preExcute', params)
}

export function exportWorkApi(params) {
  return request.post('/shangge/userWorks/exportExecl', params)
}

export function getWorkInfoApi(params) {
  return request.post('/shangge/userWorks/findById', params)
}

export function addWorkInfoApi(params) {
  return request.post('/shangge/userWorks/save', params)
}

export function editWorkInfoApi(params) {
  return request.post('/shangge/userWorks/update', params)
}
