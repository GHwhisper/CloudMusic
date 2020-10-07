import http from 'api/http'

export function getBanner () {
  const url = '/banner'
  return http(url)
}

export function getDiscovery () {
  const url = '/homepage/block/page'
  return http(url)
}
