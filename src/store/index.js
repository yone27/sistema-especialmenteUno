import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import shared from './shared'
import patients from './patients'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    shared,
    patients
  }
})
