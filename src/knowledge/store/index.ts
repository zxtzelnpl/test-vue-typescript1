import Vue from 'vue'
import Vuex from 'vuex'
import user, { IUserState } from './user'
import depTestOne, { IDepTestOneState } from './dep-test-one'

Vue.use(Vuex)

export interface IRootState {
  modules: {
    user: IUserState,
    depTestOne: IDepTestOneState
  }
}

export default new Vuex.Store({
  modules: {
    user,
    depTestOne
  }
})
