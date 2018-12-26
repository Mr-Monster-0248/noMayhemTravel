import Vue from 'vue'
import Router from 'vue-router'
import MapPanel from "./components/MapPanel";
import MainVue from "./components/MainVue";

Vue.use(Router);

export function createRouter() {
    return new Router({
        mode: 'history',
        base: process.env.NODE_ENV === 'production' ? '/ImmersionTime/' : '/',
        routes: [
            {
                path: "/",
                component: MainVue
            },
            {
                path: "/destination/:id",
                name: "destination",
                component: MapPanel,
                meta: {
                    showModal: true
                }
            }
        ]
    })
}
