import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Moment from 'moment';

Vue.config.productionTip = false

// 使用第三方库
Vue.use(VueAxios, axios)
Vue.use(ElementUI)
Vue.prototype.$moment = Moment;

// 自定义指令
Vue.directive('title',  function (el, binding) {
  document.title = el.dataset.title
})

// 自定义过滤器
import {formatTime} from "./utils/time";
import {formatDay} from './utils/day';
Vue.filter('format', formatTime)
Vue.filter('formatDay', formatDay)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
