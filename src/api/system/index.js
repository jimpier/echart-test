import request from '../http'

export function statByWorkTypeApi(searchParams) {
  return request.post('/shangge/sta/workByWorkTypeStat', searchParams)
}

export function statByWorekGroupApi(searchParams) {
  return request.post('/shangge/sta/workByGroupTypeStat', searchParams)
}

export function statByCountryApi(searchParams) {
  return request.post('/shangge/sta/workByCountryStat', searchParams)
}

export function statByJoinerTypeApi(searchParams) {
  return request.post('/shangge/sta/workBySignStat', searchParams)
}
