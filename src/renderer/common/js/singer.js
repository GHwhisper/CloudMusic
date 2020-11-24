/**
 * 歌手类
 * @class Singer
 * @constructor
 * @param {Number} id 歌手id
 * @param {String} name 歌手名
 * @param {Array} alias 艺名、别名
 */
export default class Singer {
  constructor ({id, name, alias}) {
    this.id = id
    this.name = name
    this.alias = alias
  }
}
