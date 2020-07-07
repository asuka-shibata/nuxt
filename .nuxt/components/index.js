export { default as Logo } from '../../components/Logo.vue'
export { default as Navi } from '../../components/Navi.vue'
export { default as Tab } from '../../components/Tab.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo'}" */).then(c => c.default || c)
export const LazyNavi = import('../../components/Navi.vue' /* webpackChunkName: "components/Navi'}" */).then(c => c.default || c)
export const LazyTab = import('../../components/Tab.vue' /* webpackChunkName: "components/Tab'}" */).then(c => c.default || c)
