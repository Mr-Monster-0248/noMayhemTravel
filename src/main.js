import Vue from "vue";
import App from "./App.vue";
import bootstrapVue from "bootstrap-vue";
import { VueSlideoutPanel } from 'vue2-slideout-panel';
import VueModalTor from "vue-modaltor";

Vue.config.productionTip = false;
Vue.use(bootstrapVue);
Vue.use(VueModalTor);
Vue.component('slideout-panel', VueSlideoutPanel);


new Vue({
  render: h => h(App)
}).$mount("#app");
