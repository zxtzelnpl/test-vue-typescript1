import { ActionContext } from 'vuex'
import { IRootState } from './index'
import _ from 'lodash'

interface FindItem {
  id: string;
}

interface IItem {
  id: string;
  flag: boolean;
  children?: IList;
}

type IList = IItem[];

export interface IDepTestOneState {
  root: IItem;
}

interface IInitMutationPayload {
  item: IItem
}

interface IChangeMutationPayload {
  id: string
}

const matchObj = (item1: IItem, item2: FindItem) => {
  if (!item1 || !item2) { return false }
  const id = item2.id
  return item1.id === id
}

const findNodeInTree = (nodeInTree: IItem, nodeWeNeed: FindItem):(IItem| null) => {
  if (matchObj(nodeInTree, nodeWeNeed)) {
    return nodeInTree
  }

  const { children } = nodeInTree

  if (Array.isArray(children) && children.length > 0) {
    for (let i = 0, l = children.length; i < l; i++) {
      const fnidedNode = findNodeInTree(children[i], nodeWeNeed)
      if (fnidedNode) {
        return fnidedNode
      }
    }
  }

  return null
}

const renderList = () => ({
  id: '0',
  flag: true,
  children: [
    {
      id: '0-0',
      flag: true,
      children: [
        {
          id: '0-0-0',
          flag: true,
          children: [
            {
              id: '0-0-0-0',
              flag: true,
              children: [
                {
                  id: '0-0-0-0-0',
                  flag: true,
                  children: [
                    {
                      id: '0-0-0-0-0-0',
                      flag: true
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: '0-1',
      flag: true,
      children: [
        {
          id: '0-1-0',
          flag: true,
          children: [
            {
              id: '0-1-0-0',
              flag: true,
              children: [
                {
                  id: '0-1-0-0-0',
                  flag: true,
                  children: [
                    {
                      id: '0-1-0-0-0-0',
                      flag: true
                    },
                    {
                      id: '0-1-0-0-0-1',
                      flag: true
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
})

export default {
  namespaced: true,
  state: {
    root: null
  },
  mutations: {
    add (state: IDepTestOneState, payload: IInitMutationPayload) {
      state.root = payload.item
    },
    change (state: IDepTestOneState, payload: IChangeMutationPayload) {
      const { id } = payload
      const root = state.root
      const item = findNodeInTree(root, { id })
      if (item) {
        item.flag = !item.flag
      }
    }
  },
  actions: {
    add ({ state, commit }: ActionContext<IDepTestOneState, IRootState>) {
      commit('add', { item: renderList() })
    },
    change ({ commit }: ActionContext<IDepTestOneState, IRootState>, payload: IChangeMutationPayload) {
      console.log('begin change')
      setTimeout(() => {
        commit('change', payload)
      }, 2000)
    }
  }
}
