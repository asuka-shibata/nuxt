import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _dedf0c1e = () => interopDefault(import('../pages/category/character.vue' /* webpackChunkName: "pages/category/character" */))
const _45433950 = () => interopDefault(import('../pages/category/discipline.vue' /* webpackChunkName: "pages/category/discipline" */))
const _54b46900 = () => interopDefault(import('../pages/category/fashion.vue' /* webpackChunkName: "pages/category/fashion" */))
const _630ce946 = () => interopDefault(import('../pages/category/food.vue' /* webpackChunkName: "pages/category/food" */))
const _002b9648 = () => interopDefault(import('../pages/category/goingOut.vue' /* webpackChunkName: "pages/category/goingOut" */))
const _60cd9c44 = () => interopDefault(import('../pages/category/health.vue' /* webpackChunkName: "pages/category/health" */))
const _72002522 = () => interopDefault(import('../pages/category/insurance.vue' /* webpackChunkName: "pages/category/insurance" */))
const _59ceeed9 = () => interopDefault(import('../pages/category/todayPhoto.vue' /* webpackChunkName: "pages/category/todayPhoto" */))
const _505937df = () => interopDefault(import('../pages/category/trimming.vue' /* webpackChunkName: "pages/category/trimming" */))
const _5fadc131 = () => interopDefault(import('../pages/category/walk.vue' /* webpackChunkName: "pages/category/walk" */))
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
    path: "/category/character",
    component: _dedf0c1e,
    name: "category-character"
  }, {
    path: "/category/discipline",
    component: _45433950,
    name: "category-discipline"
  }, {
    path: "/category/fashion",
    component: _54b46900,
    name: "category-fashion"
  }, {
    path: "/category/food",
    component: _630ce946,
    name: "category-food"
  }, {
    path: "/category/goingOut",
    component: _002b9648,
    name: "category-goingOut"
  }, {
    path: "/category/health",
    component: _60cd9c44,
    name: "category-health"
  }, {
    path: "/category/insurance",
    component: _72002522,
    name: "category-insurance"
  }, {
    path: "/category/todayPhoto",
    component: _59ceeed9,
    name: "category-todayPhoto"
  }, {
    path: "/category/trimming",
    component: _505937df,
    name: "category-trimming"
  }, {
    path: "/category/walk",
    component: _5fadc131,
    name: "category-walk"
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
