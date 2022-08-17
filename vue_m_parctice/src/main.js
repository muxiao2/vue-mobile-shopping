// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//导入Mint UI
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);
//导入MUI
import '@/lib/mui/css/mui.min.css'
import '@/lib/mui/css/icons-extra.css'

// 导入axios
import axios from 'axios'
// 配置全局的baseURL
axios.defaults.baseURL = "http://www.liulongbin.top:3005"
//在vue原型上添加axios
Vue.prototype.$axios = axios

// 导入Moment.js
import moment from 'moment'
// 设置全局过滤器格式化时间
Vue.filter('dateFormat', function(dateStr,pattern = "YYYY-MM-DD hh:mm:ss") {
  return moment(dateStr).format(pattern)
})

// 导入VuePreview
import VuePreview from 'vue-preview'
// defalut install
Vue.use(VuePreview)

// 导入store
import { store } from '@/store.js'
// 导航守卫滚轴位置
// router.afterEach((to, from) => {
//   window.scrollTo(0,0)
// })


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
