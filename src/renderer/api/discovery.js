import http from 'api/http'

export function getBanner () {
  const url = '/banner'
  return http(url)
}

export function getSongListRCMD () {
  const url = '/personalized'
  return http(url, {
    limit: 9
  })
}
