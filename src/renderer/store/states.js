import { playMode } from 'common/js/config'

const states = {
  mode: playMode.sequence.code, // 播放模式，默认顺序播放
  playing: false, // 是否正在播放
  normalPlayerVisibility: false // 是否显示normal-player
}

export default states
