import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _45433950 = () => interopDefault(import('../pages/category/discipline.vue' /* webpackChunkName: "pages/category/discipline" */))
const _59ceeed9 = () => interopDefault(import('../pages/category/todayPhoto.vue' /* webpackChunkName: "pages/category/todayPhoto" */))
const _505937df = () => interopDefault(import('../pages/category/trimming.vue' /* webpackChunkName: "pages/category/trimming" */))
const _3c7e18c9 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/category/discipline",
    component: _45433950,
    name: "category-discipline"
  }, {
    path: "/category/todayPhoto",
    component: _59ceeed9,
    name: "category-todayPhoto"
  }, {
    path: "/category/trimming",
    component: _505937df,
    name: "category-trimming"
  }, {
    path: "/",
    component: _3c7e18c9,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
