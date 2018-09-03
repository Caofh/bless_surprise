import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "ChannelShow" */ './Home')
    },{
      path: '/payrollDetail',
      name: 'PayrollDetail',
      component: () => import(/* webpackChunkName: "ChannelShow" */ './PayrollDetail')
    }
  ]
})
