<template>
    <div id="customPanel">
        <!-- To put transparent: bgOverlay="rgb(0,0,0,0.8)" -->
        <vue-modaltor :visible="this.open" :resize-width='{1200:"60%",992:"75%",768:"93%"}' @hide="hideModal">
            <div v-if="this.open">
                <PanelCountry :idJson="this.idJson"></PanelCountry>
            </div>
        </vue-modaltor>

    </div>
</template>

<script>
    import {EventBus} from './../event-bus.js';
    import PanelCountry from "./PanelCountry";

    export default {
        name: "CustomPanel",
        components: {
            PanelCountry,
        },

        data() {
            return {
                open: false,
                idJson: 'none'
            }
        },

        mounted() {
            EventBus.$on('clickPanel', (idJson) => {
                this.open = true;
                this.idJson = idJson;
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