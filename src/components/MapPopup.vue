<template>
    <div id="popupCard">
        <div class="popupcard-container container">
            <b-card bg-variant="dark"
                    :header="'<h1 class=\'popup\'>'+this.destination.country+'</h1> <h2 class=\'popup\'>('+this.destination.city+')</h2>'"
                    text-variant="white"
                    class="text-center">

                <div class="row align-items-center">
                    <div class="popuptext">
                        <h2 class='popup'>{{ this.destination.name }}</h2>

                        <b-button variant="primary"
                                  class="d-flex align-items-end"
                                  @click="launchPanel">En savoir plus
                        </b-button>
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
                city: ""
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
    .popupcard-container {
        padding-right: 0px;
        padding-left: 0px;
    }

    .img-fluid {
        max-width: 60%;
        height: auto;
    }

    .popuptext {
        margin-left: 7px;
        margin-right: 7px;
    }

    .card-header h1 {
        margin-bottom: 0rem;
    }

    .card-body {
        padding-top: 1rem;
        padding-bottom: 0.8rem;
    }


    .card-header {
        padding: 0rem;
        margin-bottom: 0;
    }

    /*Reset mapbox style*/
    .mapboxgl-popup-content {
        position: relative;
        background: transparent;
        border-radius: 0px;
        box-shadow: none;
        padding: 0px 0px 0px;
        pointer-events: auto;
    }

    /* Set infos size */
    h1.popup {
         font-size: 1.5rem;
     }

    h2.popup  {
        font-size: 1.1rem;
    }
</style>