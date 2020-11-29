const OneHundredThousand = 100000
const TenThousand = 10000

// 达到十万格式化，单位：万
function countOneHundredThousandFix (num) {
  if (num < OneHundredThousand) {
    return +num
  } else {
    return Math.floor(num / OneHundredThousand * 10) + '万'
  }
}

// 达到一万格式化，单位：万
function countTenThousandFix (num) {
  if (num < TenThousand) {
    return +num
  } else {
    return Math.floor(num / TenThousand) + '万'
  }
}

function dateFormat (timeStamp) {
  const date = new Date(timeStamp)
  const Y = date.getFullYear()
  const M = (date.getMonth() + 1 < 10) ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  const D = date.getDate()
  return `${Y}-${M}-${D}`
}

function musicTimeFormat (ms) {
  const s = ms / 1000 | 0 // 由毫秒ms计算得到秒s，并向下取整
  let minute = s / 60 | 0
  minute = minute >= 10 ? minute : `0${minute}` // 得到分钟数候，格式化为两位数
  const second = _pad(s % 60) // 除去整数分钟后，剩余多少秒，格式化为两位数
  return `${minute}:${second}`
}

function _pad (num, n = 2) {
  let len = num.toString().length
  while (len < n) {
    num = '0' + num
    len++
  }
  return num
}

export {
  countOneHundredThousandFix,
  countTenThousandFix,
  dateFormat,
  musicTimeFormat
}
