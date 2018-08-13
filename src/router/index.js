import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const sample = () => import(/* webpackChunkName: "Container" */'../pages/system/index/index.vue')
let routes = [{
  path: '/',
  component: sample,
  meta: { title: '登录' }
}]
const router = new VueRouter({routes})

export default router
