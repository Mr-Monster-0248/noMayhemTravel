<template>
    <div id="mainMap">
        <mapbox v-bind:mapOptions="{ style: 'mapbox://styles/thibaultlepez/cjok8sf3600sw2rqiau1nvrmt' }"
                accessToken='pk.eyJ1IjoidGhpYmF1bHRsZXBleiIsImEiOiJjam9rODhlOHIwMXBqM3FteDY3cjVnMmk4In0.1y1C0L8RxjVOkndgeo5xMg'
                @map-click="mapClicked"
        ></mapbox>
    </div>
</template>
<script>

    import Mapbox from "mapbox-gl-vue";
    import PopupCard from "./PopupCard";
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
            mapClicked: function (map, e) {
                // We get the features from the point we clicked
                var features = map.queryRenderedFeatures(e.point);

                // If clickd on a point of our layer...
                if (features.length && features[0].layer.id === "namestest") {
                    // Select the main feature (our layer is first)
                    var clickedPoint = features[0];
                    this.createPopUp(map, clickedPoint);
                }
            },
            createPopUp: function (map, place) {
                // To check if properties were updated by Mapbox
                // console.log(place.properties);

                // Create an element <div id="vue-popup-content">
                var div = window.document.createElement('div');
                div.id = 'vue-popup-content';
                // Add a 100px square in the div so it will go in the right place
                div.style.height="100px";
                div.style.width="200px";


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
    };
</script>
