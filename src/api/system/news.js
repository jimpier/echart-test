import request from '../http'

export function getNewsListApi(params) {
  return request.post('/shangge/news/findAll', params)
}

export function moveUpApi(params) {
  return request.post('/shangge/news/sortUp', params)
}

export function moveDownApi(params) {
  return request.post('/shangge/news/sortDown', params)
}

export function deleteNewApi(params) {
  return request.post('/shangge/news/delete', params)
}

export function lockNewApi(params) {
  return request.post('/shangge/news/disableNews', params)
}

export function addNewsApi(params) {
  return request.post('/shangge/news/save', params)
}

export function editNewsApi(params) {
  return request.post('/shangge/news/update', params)
}

export function getNewsInfoApi(params) {
  return request.post('/shangge/news/findById', params)
}
