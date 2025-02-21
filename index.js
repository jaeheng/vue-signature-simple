import { App } from 'vue'
import VueSignature from './src/components/vue-signature-simple.vue'

// 以插件方式安装
VueSignature.install = function (app: App) {
    app.component(VueSignature.name, VueSignature)
}

// 如果是在浏览器环境下并且 Vue 已加载，则自动安装
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueSignature)
}

export default VueSignature
