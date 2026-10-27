import Vue from 'vue'
import App from './App.vue'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import router from './router'

import VueRouter from 'vue-router'
import router1 from './views/router1'
import router2 from './views/router2'
import router3 from './views/router3'
import router4 from './views/router4'
import router5 from './views/router5'
import router6 from './views/router6'
import leftRouter from './views/leftRouter'
const router = new VueRouter({
  routes: [
    // mode: "history"  路由模式
    // routes 路由规则们
    // route  一条路由规则  {path: 路径  component: 组件}
    { path: '/router1', component: router1},
    { path: '/router2', component: router2},
    { path: '/router3', component: router3},
    { path: '/router4', component: router4},
    { path: '/router5', component: router5},
    { path: '/router6', component: router6},
    { name:'BaseLeft', path: '/', component: leftRouter},
    { path: '*', component: leftRouter},
  ],
  // 自定义 route-link 高亮类名
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'

})

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(VueRouter)


new Vue({
  router: router,
  store,
  render: h => h(App),
}).$mount('#app')
