import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/tailwindcss.css'

Vue.use(ElementUI)
var axios = require('axios')
//axios.defaults.baseURL = 'http://localhost:8443/api'
axios.defaults.baseURL = 'http://114.117.194.152:8081/api'
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
