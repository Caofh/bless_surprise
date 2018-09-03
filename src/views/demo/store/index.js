import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

import { payrollActions, payrollMutations, payrollState } from './page/payrollDetail' // payrollDetail页面的store

Vue.use(Vuex)

// 合并各个页面的store方法
Object.assign(actions, payrollActions)
Object.assign(mutations, payrollMutations)

let state = {
  test: 1
}
// 合并各个页面的store值
state = Object.assign(state, payrollState)

export default new Vuex.Store({
  state,
  mutations,
  actions
})
