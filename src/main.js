import Vue from "vue";
import App from "./App.vue";
import bootstrapVue from "bootstrap-vue";
import VueModalTor from "vue-modaltor";

Vue.config.productionTip = false;
Vue.use(bootstrapVue);
Vue.use(VueModalTor);


new Vue({
  render: h => h(App)
}).$mount("#app");
