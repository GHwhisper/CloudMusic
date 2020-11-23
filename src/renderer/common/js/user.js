/**
 * 用户类
 * @class User
 * @constructor
 * @param {Number} id 用户id
 * @param {String} nickname 昵称
 * @param {String} avatar 头像
 */
export default class User {
  constructor ({id, nickname, avatar}) {
    this.id = id
    this.nickname = nickname
    this.avatar = avatar
  }
}
