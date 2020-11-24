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

function dateFix (timeStamp) {
  const date = new Date(timeStamp)
  const Y = date.getFullYear()
  const M = (date.getMonth() + 1 < 10) ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  const D = date.getDate()
  return `${Y}-${M}-${D}`
}

export {
  countOneHundredThousandFix,
  countTenThousandFix,
  dateFix
}
