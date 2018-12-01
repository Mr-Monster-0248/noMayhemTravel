<template>
    <div id="customPanel">
        <!-- Trans: bgOverlay="rgb(0,0,0,0.8)" -->
        <vue-modaltor :visible="open" :resize-width='{1200:"60%",992:"75%",768:"93%"}'@hide="hideModal"
>
            <PanelCountry></PanelCountry>
        </vue-modaltor>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {EventBus} from './../event-bus.js';
    import PanelCountry from "./PanelCountry";

    export default {
        name: "CustomPanel",
        components: {
            PanelCountry,
        },

        props: {
            destination: {
                name: "",
                country: "",
                thumbnail: ""
            }
        },

        data() {
            return {
                open: false
            }
        },

        mounted() {
            EventBus.$on('clickPanel', () => {
                // eslint-disable-next-line
                console.log("Test");
                // window.vue2PanelDebug = true;
                this.open = true;

            })
        },

        methods: {
            hideModal() {
                this.open = false;
            }
        },
    }
</script>

<style scoped>

</style>