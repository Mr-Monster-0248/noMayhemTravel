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
            launchPanel() {

                console.log("WTF");
                EventBus.$emit('clickPanel', 1);
            }

        },


    }
</script>

<style scoped>

</style>