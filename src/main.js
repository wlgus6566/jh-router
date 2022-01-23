import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router //뷰 인스턴스에 라우터 인스턴스를 등록
}).$mount('#app')
