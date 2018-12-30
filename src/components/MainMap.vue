<template>
    <div id="mainMap">
        <mapbox :fullscreen-control="{
                    show: true,
                    position: 'top-right'
                }"
                @map-click="mapClicked"
                @map-init="mapInit"
                @map-load="mapLoaded"
                @map-mousemove="mouseOverLabel"
                accessToken='pk.eyJ1IjoidGhpYmF1bHRsZXBleiIsImEiOiJjam9rODhlOHIwMXBqM3FteDY3cjVnMmk4In0.1y1C0L8RxjVOkndgeo5xMg'
                v-bind:mapOptions="{ style: 'mapbox://styles/thibaultlepez/cjpe5zf7r28d02spc17r22xjy' }"

        ></mapbox>

        <!--<button v-on:click="switchLayer('solo', 'solo_label')">Test</button>-->
    </div>
</template>
<script>
    import {EventBus} from "./../event-bus.js";

    import Mapbox from "mapbox-gl-vue";
    import PopupCard from "./MapPopup";
    import Vue from "vue"
    import mapboxgl from "mapbox-gl";

    export default {
        name: "MainMap",
        components: {
            Mapbox
        },
        data() {
            return {
                PopupContent: Vue.extend(PopupCard),
                map: Object,
                source: Object,
                successLoaded: false
            }
        },
        mounted() {
            EventBus.$on("flyTo", (id) => {
                this.flyTo(id);
            });
            /* EventBus.$on("switchLayer", (id) => {
                this.switchLayer(id);
            }); */
            EventBus.$on("setLayer", (id, state) => {
                this.setLayer(id, state);
            });
        },
        methods: {
            mapInit(map) {
                this.map = map;
            },
            mapLoaded(map) {
                // list all layers
                // console.log(map.getSource("composite").vectorLayerIds);

                // Get all points from our layers
                const sourceSolo = map.querySourceFeatures("composite", {
                    "sourceLayer": "solo"
                });
                const sourceGroup = map.querySourceFeatures("composite", {
                    "sourceLayer": "test"
                });

                // Merge them and keep only the geometry (coordinates)
                let ar = {};
                let i;
                for (i = 0; i < sourceGroup.length; i++) {
                    // console.log(sourceGroup[i]);
                    ar[sourceGroup[i].properties.id] = sourceGroup[i].geometry;
                }
                for (i = 0; i < sourceSolo.length; i++) {
                    //  console.log(sourceSolo[i]);
                    ar[sourceSolo[i].properties.id] = sourceSolo[i].geometry;
                }
                this.source = ar;
                this.successLoaded = true;
            },
            mouseOverLabel(map, e) {
                // Put the click cursor on our markers
                const features = map.queryRenderedFeatures(e.point, {
                    layers: ["group", "group_label", "solo", "solo_label"]
                });
                map.getCanvas().style.cursor = (features.length) ? "pointer" : "";
            },
            mapClicked(map, e) {
                // We get the features from the point we clicked
                const features = map.queryRenderedFeatures(e.point);
                // console.log(features);
                // If clicked on a point of our layers...
                if (features.length !== 0) {
                    if (features[0].layer.id === "solo"
                        || features[0].layer.id === "group"
                        || features[0].layer.id === "solo_label"
                        || features[0].layer.id === "group_label"
                    ) {
                        // Select the main feature (our layer is first)
                        const clickedPoint = features[0];
                        this.createPopUp(map, clickedPoint);
                    }
                }
            },
            createPopUp(map, place) {
                // To check if properties were updated by Mapbox
                map.flyTo({
                    center: place.geometry.coordinates
                });
                // Create an element <div id="vue-popup-content">
                var div = window.document.createElement("div");
                div.id = "vue-popup-content";
                // Add a 100px square in the div so it will go in the right place
                div.style.height = "160px";
                div.style.width = "260px";

                // Create a new Mapbox Popup, put it in the DOM
                new mapboxgl.Popup({closeOnClick: true})
                    .setLngLat(place.geometry.coordinates)
                    .setDOMContent(div)
                    .addTo(map);

                new this.PopupContent({
                    propsData: {
                        destination: place.properties
                    }
                }).$mount("#vue-popup-content");
            },
            flyTo(id) {
                var data = this.source;
                var goToFeature = data[id];

                this.map.flyTo({
                    center: goToFeature.coordinates,
                    zoom: 6
                });

            },
            /*switchLayer(id) {
                for (var i=0; i < arguments.length; i++) {
                    id = arguments[i];
                    const visibility = this.map.getLayoutProperty(id, 'visibility');
                    if (visibility === 'visible') {
                        this.map.setLayoutProperty(id, 'visibility', 'none');
                        this.className = '';
                    } else {
                        this.className = 'active';
                        this.map.setLayoutProperty(id, 'visibility', 'visible');
                    }
                }

            },*/
            setLayer(id, state) {
                if (this.successLoaded) {
                    if (!state) {
                        this.map.setLayoutProperty(id, "visibility", "none");
                        this.map.setLayoutProperty(id + "_label", "visibility", "none");
                    } else {
                        this.map.setLayoutProperty(id, "visibility", "visible");
                        this.map.setLayoutProperty(id + "_label", "visibility", "visible");
                    }
                }
            }
        }
    };
</script>

<style>
    .marker {
        background-size: cover;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
</style>
