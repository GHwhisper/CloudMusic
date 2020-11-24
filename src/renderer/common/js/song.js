/**
 * 歌曲类
 * @class Song
 * @constructor
 * @param {Number} id 歌曲id
 * @param {String} name 歌曲名
 * @param {Array} singers 歌手
 * @param {Number} duration 时长
 * @param {Object} album 专辑
 */
export default class Song {
  constructor ({id, name, singers, duration, album}) {
    this.id = id
    this.name = name
    this.singers = singers
    this.duration = duration
    this.album = album
  }
}
