export { default as Logo } from '../../components/Logo.vue'
export { default as Tab } from '../../components/Tab.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo'}" */).then(c => c.default || c)
export const LazyTab = import('../../components/Tab.vue' /* webpackChunkName: "components/Tab'}" */).then(c => c.default || c)
