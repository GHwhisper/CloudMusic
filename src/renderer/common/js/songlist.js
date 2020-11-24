/**
 * 歌单类
 * @class SongList
 * @constructor
 * @param {Number} id 歌单id
 * @param {String} name 歌单名
 * @param {String} coverImg 歌单封面
 * @param {Object} creator 创建者
 * @param {Number} createTime 歌单名
 * @param {Number} subscribedCount 收藏数
 * @param {Number} shareCount 分享数
 * @param {Array} tags 歌单标签
 * @param {Number} trackCount 歌曲数
 * @param {Number} playCount 播放量
 * @param {String} description 简介
 * @param {Array} tracks 歌曲列表
 */
export default class SongList {
  constructor ({id, name, cover, creator, createTime, subscribedCount, shareCount, tags, trackCount, playCount, description, tracks}) {
    this.id = id
    this.name = name
    this.cover = cover
    this.creator = creator
    this.createTime = createTime
    this.subscribedCount = subscribedCount
    this.shareCount = shareCount
    this.tags = tags
    this.trackCount = trackCount
    this.playCount = playCount
    this.description = description
    this.tracks = tracks
  }
}
