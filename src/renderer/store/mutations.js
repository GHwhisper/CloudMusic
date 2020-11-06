import * as types from './mutation-types'

const mutations = {
  [types.SET_PLAY_MODE] (state, mode) {
    state.mode = mode
  },
  [types.SET_PLAYING_STATE] (state, flag) {
    state.playing = flag
  }
}

export default mutations
