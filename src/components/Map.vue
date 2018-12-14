<template>
    <div id="mainMap">
        <mapbox v-bind:mapOptions="{ style: 'mapbox://styles/thibaultlepez/cjpe5zf7r28d02spc17r22xjy' }"
                accessToken='pk.eyJ1IjoidGhpYmF1bHRsZXBleiIsImEiOiJjam9rODhlOHIwMXBqM3FteDY3cjVnMmk4In0.1y1C0L8RxjVOkndgeo5xMg'
                @map-click="mapClicked"
                @map-mousemove="mouseOverLabel"
        ></mapbox>
    </div>
</template>
<script>

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
                PopupContent: Vue.extend(PopupCard)
            }
        },
        methods: {
            mouseOverLabel: function (map, e) {
                // Put the click cursor on our markers
                const features = map.queryRenderedFeatures(e.point, {
                    layers: ['group', 'group_label', 'solo', 'solo_label']
                });
                map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
            },
            mapClicked: function (map, e) {
                // We get the features from the point we clicked

                var features = map.queryRenderedFeatures(e.point);
                // console.log(features);
                // If clicked on a point of our layers...
                //
                if (features.length !== 0) {
                    if (features[0].layer.id === "solo"
                        || features[0].layer.id === "group"
                        || features[0].layer.id === "solo_label"
                        || features[0].layer.id === "group_label"
                    ) {
                        // Select the main feature (our layer is first)
                        var clickedPoint = features[0];
                        this.createPopUp(map, clickedPoint);
                    }
                }
            },

            createPopUp: function (map, place) {
                // To check if properties were updated by Mapbox
                // console.log(place.properties);

                map.flyTo({
                    center: place.geometry.coordinates
                });
                // Create an element <div id="vue-popup-content">
                var div = window.document.createElement('div');
                div.id = 'vue-popup-content';
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
                }).$mount('#vue-popup-content')
            }
        }
    }
    ;
</script>

<style>
    .marker {
        background-size: cover;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
</style>
