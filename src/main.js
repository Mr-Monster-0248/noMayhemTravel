import Vue from "vue";
import App from "./App.vue";
import bootstrapVue from "bootstrap-vue";
import VueModalTor from "vue-modaltor";
import VueRouter from "vue-router";

import {createRouter} from "./router";

Vue.config.productionTip = false;

Vue.use(bootstrapVue);
Vue.use(VueModalTor);
Vue.use(VueRouter);


const router = createRouter();

new Vue({
    router,
    render: (h) => h(App)
}).$mount("#app");