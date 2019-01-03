// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
// import FastClick from 'fastclick'
import { Toast, Popup, Picker, Dialog } from 'vant'

Vue.use(Toast).use(Popup).use(Picker).use(Dialog)

// 移除移动端页面点击延迟
// FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
