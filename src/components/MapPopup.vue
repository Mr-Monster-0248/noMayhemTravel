<template>
    <div id="popupCard">
        <div class="popupcard-container container">
            <b-card :header="'<h1 class=\'popup\'>'+this.destination.country+'</h1><h2 class=\'popup\'>('+this.destination.city+')</h2>'"
                    bg-variant="dark"
                    class="text-center"
                    text-variant="white"
                    v-if="this.destination.country !== this.destination.city">

                <div class="row align-items-center">
                    <div class="popuptext">
                        <h2 class="popup">{{ this.destination.name }}</h2>

                        <b-button @click="launchPanel"
                                  class="d-flex align-items-end"
                                  variant="primary">En savoir plus
                        </b-button>
                    </div>
                </div>
            </b-card>
        </div>

    </div>
</template>

<script>
    import {EventBus} from "./../event-bus.js";

    export default {
        name: "PopupCard",
        props: {
            destination: {
                name: "",
                country: "",
                id: "",
                city: ""
            },

        },

        data() {
            return {}
        },

        methods: {
            launchPanel() {
                EventBus.$emit("clickPanel", this.destination.id);
            }
        },
    }
</script>


<style>
    .popupcard-container {
        padding-right: 0px;
        padding-left: 0px;
    }

    .popuptext {
        max-width: 250px;
        margin-left: 7px;
        margin-right: 7px;
    }

    button.popuptext {
        text-align: center;
        margin: auto;
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
        font-size: 1.4rem;
    }

    h2.popup {
        font-size: 1rem;
    }
</style>