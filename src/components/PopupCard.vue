<template>
    <div id="popupCard">
        <div class="container">
            <div class="row align-items-center">
                <div class="cols-6">
                    <img :src="this.destination.thumbnail" :alt="this.destination.name">
                </div>
                <div class="cols-6">
                    <h1>{{ this.destination.country }}</h1>
                    <h3>{{ this.destination.name }}</h3>
                    <b-button @click="launchPanel">En savoir plus</b-button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {vueSlideoutPanelService} from 'vue2-slideout-panel';
    import PanelCountry from "./PanelCountry";

    import Vue from 'vue';
    // import { VueSlideoutPanel } from 'vue2-slideout-panel';

    // Vue.component('slideout-panel', VueSlideoutPanel);

    //Vue.component('slideout-panel', vueSlideoutPanelService);

    import {EventBus} from './../event-bus.js';

    export default {
        name: "PopupCard",


        props: {
            destination: {
                name: "",
                country: "",
                thumbnail: ""
            }
        },

        data() {
            return {}
        },

        methods: {
            /*showPanel() {
                const panel = this.$showPanel({
                    component: "panel-1",
                    cssClass: "panel-1",
                    props: {}
                });
            }*/
            launchPanel() {
                //this.show = false;
                /*  const panelInstance = vueSlideoutPanelService.show({
                      component: 'PanelCountry',
                      width: '400', //customize the width

                  });
                  //panelInstance.$showPanel();
                  this.$emit('PanelCountry');

  */
                console.log("WTF");
                EventBus.$emit('clickPanel', 1);
                // this.$root.$emit('clickPanel');
                //this.$root.$on('clickPanel');
                //this.$root.$on.$emit('clickPanel');
                /*const panelInstance = this.$showPanel.show({
                    component: 'PanelCountry',
                    props: {
                        //any data you want passed to your component
                    }
                });*/

                /*panelInstance.promise
                    .then(result => {

                    });
            */
            }

        },


    }
</script>

<style scoped>

</style>