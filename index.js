import VueSignature from './src/components/vue-signature'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('vue-signature', VueSignature)
}

VueSignature.install = function (Vue) {
  Vue.component(VueSignature.name, VueSignature)
}

export default VueSignature
