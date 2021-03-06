import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/routersetting.js'

// 安装element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { size: 'medium', });

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
