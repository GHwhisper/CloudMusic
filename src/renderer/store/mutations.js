import * as types from './mutation-types'

const mutations = {
  [types.SET_PLAY_MODE] (state, mode) {
    state.mode = mode
  },
  [types.SET_PLAYING_STATE] (state, flag) {
    state.playing = flag
  },
  [types.SET_NORMAL_PLAYER_VISIBILITY] (state, flag) {
    state.normalPlayerVisibility = flag
  },
  [types.SET_SEQUENCE_LIST] (state, list) {
    state.sequenceList = list
  },
  [types.SET_PLAY_LIST] (state, list) {
    state.playList = list
  },
  [types.SET_CURRENT_INDEX] (state, index) {
    state.currentIndex = index
  },
  [types.SET_CURRENT_SONG] (state, song) {
    state.currentSong = song
  },
  [types.SET_CURRENT_LYRIC] (state, lyric) {
    state.currentLyric = lyric
  }
}

export default mutations
