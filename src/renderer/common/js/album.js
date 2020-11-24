/**
 * 专辑类
 * @class Album
 * @constructor
 * @param {Number} id 专辑id
 * @param {String} name 专辑名
 * @param {String} pic 封面图片
 */
export default class Album {
  constructor ({id, name, pic}) {
    this.id = id
    this.name = name
    this.pic = pic
  }
}
