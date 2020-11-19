import http from 'api/http'

export function getSongList (listId) {
  const url = '/playlist/detail'
  return http(url, {
    id: listId
  })
}
