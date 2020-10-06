import axios from 'axios'

export function getDiscovery () {
  const url = '/homepage/block/page'
  return axios.get(url).then(res => {
    return Promise.resolve(res)
  }).catch(err => {
    return Promise.reject(err)
  })
}
