import { ActionContext } from 'vuex'
import { IRootState } from './index'
import _ from 'lodash'

interface IItem {
  id: number;
  name: string;
  age: number;
  flag: boolean;
}

type IList = {
  index: number;
  children: IItem[];
};

type LevelArray = IList[];

export interface IDepTestOneState {
  level: LevelArray;
}

interface IInitMutationPayload {
  list: IList
}

interface IChangeMutationPayload {
  index: number
  id: number,
  flag: boolean
}

const renderList = (index: number) => ({
  index,
  children: [
    {
      id: 0,
      name: 'name1',
      age: 20,
      flag: true
    },
    {
      id: 1,
      name: 'name2',
      age: 22,
      flag: true
    }
  ]
})

export default {
  namespaced: true,
  state: {
    level: []
  },
  mutations: {
    add (state: IDepTestOneState, payload: IInitMutationPayload) {
      state.level.push(payload.list)
    },
    change (state: IDepTestOneState, payload: IChangeMutationPayload) {
      const { index, id, flag } = payload
      const list = state.level[index]
      const item = _.find(list.children, { id })
      if (item) {
        item.flag = flag
      }
      state.level.splice(index + 1)
      state.level.push(renderList(index + 1))
    }
  },
  actions: {
    add ({ state, commit }: ActionContext<IDepTestOneState, IRootState>) {
      const index = state.level.length
      const list = renderList(index)
      commit('add', { list })
    },
    change ({ commit }: ActionContext<IDepTestOneState, IRootState>, payload: IChangeMutationPayload) {
      console.log('yes')
      setTimeout(() => {
        commit('change', payload)
      })
    }
  }
}
