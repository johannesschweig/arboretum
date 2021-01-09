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
      mb: 0,
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
      mb: 0,
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
      // TODO clean this mess up
      if(state.kpTotal <= 0) {
        state.sg = 0
      } else if (state.kpTotal < 120) {
        state.sg = 1
      } else if (state.kpTotal < 180) {
        state.sg = 2
      } else if (state.kpTotal < 240) {
        state.sg = 3
      } else if (state.kpTotal < 300) {
        state.sg = 4
      } else if (state.kpTotal < 360) {
        state.sg = 5
      } else if (state.kpTotal < 420) {
        state.sg = 6
      } else if (state.kpTotal < 480) {
        state.sg = 7
      } else if (state.kpTotal < 540) {
        state.sg = 8
      } else if (state.kpTotal < 600) {
        state.sg = 9
      } else if (state.kpTotal < 800) {
        state.sg = 10
      } else if (state.kpTotal < 1000) {
        state.sg = 11
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

