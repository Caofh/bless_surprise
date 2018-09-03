import { callApi } from './_util'

const axios = callApi('https://tpdoc.cn')

export function getList () {
  return axios.get('/api/person_page')
}
