import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// TODO create attr and kp on the fly from bestiary.js

export default new Vuex.Store({
  state: {
    attr: {
      tp: 0,
      ini: 0,
      kb: 0,
      rb: 0,
      s: 0,
      mp: 0,
      spelll: 0,
      targetedspells: 0,
      magres: 0,
      reg: 0,
      reload: 0,
      elemenatt: 0,
      fear: 0,
      venom: 0,
      flying: 0,
      bodiless: 0,
      scream: 0,
      pack: 0,
      reborn: 0,
      doesnotdie: 0,
      yielding: 0,
      spread: 0,
      sensitive: 0,
      vulnerable: 0
    },
    kp: {
      tp: 0,
      ini: 0,
      kb: 0,
      rb: 0,
      s: 0,
      mp: 0,
      spelll: 0,
      targetedspells: 0,
      magres: 0,
      reg: 0,
      reload: 0,
      elemenatt: 0,
      fear: 0,
      venom: 0,
      flying: 0,
      bodiless: 0,
      scream: 0,
      pack: 0,
      reborn: 0,
      doesnotdie: 0,
      yielding: 0,
      spread: 0,
      sensitive: 0,
      vulnerable: 0
    },
    kpTotal: 0, // creature points
    sg: 0 // difficulty level
  },
  mutations: {
    set (state, payload) {
      state.attr[payload.short] = payload.attr
      state.kp[payload.short] = payload.kp
      // compute new creature points
      let sum = 0
      for (const [key, value] of Object.entries(state.kp)) {
        sum += value
      }
      state.kpTotal = sum
      // compute new difficulty level
      let ranks = [1, 120, 180, 240, 300, 360, 420, 480, 540, 600, 800, 1000, 1200, 1400, 1600, 2000, 2400, 2800, 3200, 3600, 4200]
      for (let i = 0; i < ranks.length; i++) {
        if (state.kpTotal < ranks[i]) {
          state.sg = i
          break
        }
      }
    }
  },
  actions: {
    set ({ commit }, payload ) {
      commit('set', payload)
    }
  },
  getters: {
  }
})

