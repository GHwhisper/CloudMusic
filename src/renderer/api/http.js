import axios from 'axios'

export default function http (url, data, method = 'GET') {
  let promise
  return new Promise((resolve, reject) => {
    if (method === 'GET') {
      promise = axios.get(url, { params: data })
    } else {
      promise = axios.post(url, data)
    }
    return promise.then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
