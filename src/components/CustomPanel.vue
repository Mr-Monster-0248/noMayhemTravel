<template>
    <div id="customPanel">
        <slideout-panel></slideout-panel>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {EventBus} from './../event-bus.js';
    //import {VueSlideoutPanel} from 'vue2-slideout-panel';
    import {vueSlideoutPanelService} from 'vue2-slideout-panel';

    //Vue.component('slideout-panel', VueSlideoutPanelService);

    // Vue.component('slideout-panel', VueSlideoutPanel);
    //Vue.component('slideout-panel', vueSlideoutPanelService);

    Vue.component("panel-1", {
        name: "panel-1",
        template: '<h1>Test</h1>',
        data() {
            return {};
        },
        methods: {
            closePanel() {
                this.$emit("closePanel", {});
            }
        }
    });


    export default {
        name: "CustomPanel",
        components: {
            vueSlideoutPanelService
        },

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

        mounted() {
            EventBus.$on('clickPanel', () => {
                // eslint-disable-next-line
                console.log("Test");
                window.vue2PanelDebug = true;
                const panelInstance = vueSlideoutPanelService.show({
                    component: 'panel-1',
                    width: '400px', //customize the width
                    keepAlive: true,
                });

            })
        },

        methods: {
            /*showPanel() {
                const panel = this.$showPanel({
                    component: "panel-1",
                    cssClass: "panel-1",
                    props: {}
                });
            }*/

            /* launchPanel() {
                 //this.show = false;
                 const panelInstance = vueSlideoutPanel.show({
                     component: 'PanelCountry',
                     width: '400', //customize the width

                 });
                 //panelInstance.$showPanel();
                 this.$emit('PanelCountry');

             }*/
        },
    }
</script>

<style scoped>

</style>