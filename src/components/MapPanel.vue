<template>
    <div id="customPanel">
        <!-- To put transparent: bgOverlay="rgb(0,0,0,0.8)" -->
        <vue-modaltor :bgPanel="'#00222E'" :resize-width='{1200:"80%",992:"80%",768:"93%"}'
                      :visible="this.open"
                      @hide="hideModal"
                      bgOverlay="rgb(0,0,0,0.8)">
            <template slot="close-icon">
                <svg height="20" version="1.1" viewBox="0 0 40 40" width="20" xml:space="preserve"
                     xmlns="http://www.w3.org/2000/svg">
            <path class="st0"
                  d="M8.7,7.6c-0.4-0.4-1-0.4-1.4,0C6.9,8,6.9,8.6,7.3,9l11,11l-11,11c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0 l11-11l11,11c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4l-11-11L32,9c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-11,11L8.7,7.6z"
                  fill="white"/>
        </svg>
            </template>
            <div v-if="this.open">

                <PanelCountry :idJson="$route.params.id"></PanelCountry>
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
                // open: this.$route.meta.showModal,
                idJson: 'none'
            }
        },

        mounted() {
            this.open = this.$route.meta.showModal;
            EventBus.$on('clickPanel', (idJson) => {
                this.$router.push({name: 'destination', params: {id: idJson}});
                //  this.open = !this.open;
                //this.idJson = idJson;
            })
        },
        updated() {

        },
        watch: {
            "$route.meta"({showModal}) {
                this.open = showModal;
            }
        },
        methods: {
            hideModal() {
                this.open = false;
                this.$router.push("/");
            }
        },
    }
</script>

<style scoped>
    #customPanel {
        background-color: #00222E;
    }
</style>