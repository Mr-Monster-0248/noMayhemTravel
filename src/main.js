import Vue from 'vue'
import App from './App.vue'
import bootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false;
Vue.use(bootstrapVue);

new Vue({
  render: h => h(App),
}).$mount('#app');
