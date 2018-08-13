import request from '../http'

export function getSampleList(searchParams) {
  return request.post('/shangge/userWorks/findAll', searchParams)
}
