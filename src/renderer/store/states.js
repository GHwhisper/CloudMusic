import { playMode } from 'common/js/config'

const states = {
  mode: playMode.sequence.code, // 播放模式，默认顺序播放
  playing: false, // 是否正在播放
  normalPlayerVisibility: false, // 是否显示normal-player
  sequenceList: [], // 顺序列表（页面列表顺序）
  playList: [], // 播放列表
  currentIndex: -1, // 当前歌曲下标
  currentSong: {}, // 当前歌曲
  currentSongUrl: '', // 当前歌曲url
  currentLyric: '' // 当前歌曲歌词
}

export default states
