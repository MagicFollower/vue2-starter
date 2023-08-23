import {title, version} from '@/settings'

const state = {
  title: title,
  version
}

const mutations = {
  PLUS_VERSION: (state, stepLength) => {
    state.version+=stepLength
  }
}

const actions = {
  plusVersion: ({commit}, stepLength)=>{
    commit('PLUS_VERSION', stepLength)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

