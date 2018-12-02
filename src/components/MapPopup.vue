<template>
    <div id="popupCard">
        <div class="container">
            <b-card bg-variant="warning"
                    :header="'<h1 class=\'popuph1\'>'+this.destination.country+'</h1>'"
                    text-variant="white"
                    class="text-center">

                <div class="row align-items-center">
                    <div class="cols-6">
                        <b-img :src="this.destination.thumbnail" :alt="this.destination.name"
                               width="200" height="200"
                               rounded fluid/>
                    </div>
                    <div class="cols-6 popuptext">

                        <h3>{{ this.destination.name }}</h3>
                        <b-button class="d-flex align-items-end" @click="launchPanel">En savoir plus</b-button>
                    </div>
                </div>
            </b-card>

        </div>

    </div>
</template>

<script>
    import {EventBus} from './../event-bus.js';

    export default {
        name: "PopupCard",
        props: {
            destination: {
                name: "",
                country: "",
                id: "",
                thumbnail: ""
            }
        },

        data() {
            return {}
        },

        methods: {
            launchPanel() {
                EventBus.$emit('clickPanel', this.destination.id);
            }
        },
    }
</script>

<style>
    .container {
        padding-right: 0px;
        padding-left: 0px;
    }
    .img-fluid {
        max-width: 60%;
        height: auto;
    }

    .popuptext {
        margin-left: 10px;
    }

    .card-header h1 {
        margin-bottom: 0rem;
    }
    .card-body{
        padding-top: 1rem;
        padding-right: 1.3rem;
        padding-bottom: 1rem;
        padding-left: 0.1rem;
    }

    h1 {
        font-size: 2rem
    }

    h2 {
        font-size: 1.6rem
    } h2 {
        font-size: 1.25rem
    }

    .card-header {
        padding: 0rem;
        margin-bottom: 0;
    }

    .mapboxgl-popup-content {
        position: relative;
        background: transparent;
        border-radius: 0px;
        box-shadow: none;
        padding: 0px 0px 0px;
        pointer-events: auto;
    }
</style>