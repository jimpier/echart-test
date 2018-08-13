import request from '../http'

export function getBannersListApi(params) {
  return request.post('/shangge/sysData/findAll', params)
}

export function moveUpApi(params) {
  return request.post('/shangge/sysData/sortUp', params)
}

export function moveDownApi(params) {
  return request.post('/shangge/sysData/sortDown', params)
}

export function deleteBannersApi(params) {
  return request.post('/shangge/sysData/delete', params)
}

export function addBannerInfoApi(params) {
  return request.post('/shangge/sysData/save', params)
}

export function editBannerInfoApi(params) {
  return request.post('/shangge/sysData/update', params)
}

export function getBannersInfoApi(params) {
  return request.post('/shangge/sysData/findById', params)
}
