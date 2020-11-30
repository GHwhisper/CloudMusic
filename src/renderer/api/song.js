import http from 'api/http'

export function getSongUrl (songId) {
  const url = '/song/url'
  return http(url, {
    id: songId
  })
}

export function getLyric (songId) {
  const url = '/lyric'
  return http(url, {
    id: songId
  })
}

export function getSongDetail (...songId) {
  const url = '/song/detail'
  return http(url, {
    ids: songId
  })
}
