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
  }
}

export default mutations
