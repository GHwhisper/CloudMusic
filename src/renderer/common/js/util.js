const CARDINAL = 100000

function countFix (num) {
  if (num < CARDINAL) { // 小于10万直接返回
    return +num
  } else { // 达到10万格式化，单位：万
    return Math.floor(num / CARDINAL * 10) + '万'
  }
}

export {
  countFix
}
