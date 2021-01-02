import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import SuiVue from 'semantic-ui-vue'
import VueResource from 'vue-resource'
import './firebase'
import { rtdbPlugin } from 'vuefire'
import VueMarkdown from 'vue-markdown'
import VueLocalStorage from 'vue-localstorage'
import autofocus from 'vue-autofocus-directive'
import VueGtag from 'vue-gtag'

Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: { id: 'UA-26178243-2' }
}, router)

Vue.directive('autofocus', autofocus)

Vue.use(VueMarkdown)
Vue.use(VueLocalStorage)
Vue.use(VueResource)
Vue.use(rtdbPlugin)

require('semantic-ui-css/semantic.css')
Vue.use(SuiVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
