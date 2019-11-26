import Vue from 'vue'
import Vuex from 'vuex'
import user, { IUserState } from './user'

Vue.use(Vuex)

export interface IRootState {
  modules: {
    user: IUserState
  }
}

export default new Vuex.Store({
  modules: {
    user
  }
})

