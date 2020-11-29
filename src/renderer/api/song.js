import http from 'api/http'

export function getSongUrl (songId) {
  const url = '/song/url'
  return http(url, {
    id: songId
  })
}
