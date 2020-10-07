import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue/es'
import 'ant-design-vue/dist/antd.css'
import 'common/styles/base.styl'
import qs from 'qs'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

Vue.use(Antd)

axios.defaults.baseURL = 'http://localhost:3000'
// 请求拦截器
axios.interceptors.request.use(
  config => {
    if (config.method === 'get') {
      config.paramsSerializer = params => {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      }
    }
    return config
  }
)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
