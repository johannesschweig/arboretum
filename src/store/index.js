import Vue from 'vue'
import Vuex from 'vuex'
import { base, alias, creatures } from '../data/bestiary'

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
    // set single attribute and creature points
    set (state, payload) {
      state.attr[payload.short] = payload.attr
      // calculate kp
      let mod = 0
      for (let i = 0; i < alias.length; i++) {
        if (alias[i].short === payload.short) {
          mod = alias[i].mod
          break
        }
      }
      state.kp[payload.short] = payload.attr * mod
    },
    // recalculate creature points and difficulty level
    calcKpSg (state) {
      // compute new creature points
      let sum = 0
      for (const [_key, value] of Object.entries(state.kp)) {
        sum += value
      }
      state.kpTotal = sum
      // compute new difficulty level
      //          [1....., 2  , 3  , 4  ,...]
      let ranks = [1, 120, 180, 240, 300, 360, 420, 480, 540, 600, 800, 1000, 1200, 1400, 1600, 2000, 2400, 2800, 3200, 3600, 4200]
      let last = 0 // last creature points level
      for (let i = 0; i < ranks.length; i++) {
        if (state.kpTotal < ranks[i]) {
          // partial sg
          let prog = state.kpTotal - last
          let spread = ranks[i] - last
          let increment = Math.round(prog / spread * 10) / 10
          state.sg = i + increment
          break
        }
        last = ranks[i] 
      }
    }
  },
  actions: {
    set ({ commit }, payload ) {
      // obj: short, attr
      commit('set', payload)
      commit('calcKpSg')
    },
    // batch set multiple attributes
    // payload: name of creature
    batchSet ({ commit }, payload) {
      // find creature
      let i = creatures.map(c => c.name).indexOf(payload)
      if (i != -1) {
        let creature = creatures[i].attr
        // effective attr
        let eff = {
          ...base,
          ...creature
        } 

        for (const [key, value] of Object.entries(eff)) {
          commit('set', {
            short: key,
            attr: value
          })
        }
        commit('calcKpSg')
      } else {
        // does not work TODO htmlINPUTELEMNT
        console.log(`Could not find creature "${template}"`)
      }
      
    }
  },
  getters: {
  }
})

