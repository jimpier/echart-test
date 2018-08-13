import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const sample = () => import(/* webpackChunkName: "sample" */'../pages/system/index/index.vue')
let routes = [{
  path: '/',
  component: sample
}]
const router = new VueRouter({routes})

export default router
