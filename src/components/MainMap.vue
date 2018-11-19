<template>
    <mapbox v-bind:mapOptions="{ style: 'mapbox://styles/thibaultlepez/cjok8sf3600sw2rqiau1nvrmt' }"
            accessToken='pk.eyJ1IjoidGhpYmF1bHRsZXBleiIsImEiOiJjam9rODhlOHIwMXBqM3FteDY3cjVnMmk4In0.1y1C0L8RxjVOkndgeo5xMg'
            maxBounds="bounds"
            @map-click="mapClicked"
    ></mapbox>
</template>
<script>
    import Mapbox from 'mapbox-gl-vue'
    import destination from "../assets/features"

    export default {
        name: 'MainMap',
        components: {Mapbox},
        methods: {
            mapClicked: function (map, e) {
                console.log(destination.features[0]);

                var i;
                for (i = 0; i < 4; i++) {
                    console.log(Math.round(destination.features[i].geometry.coordinates[1]));
                    console.log(Math.round(e.lngLat.lng));
                  if (Math.round(destination.features[i].geometry.coordinates[1]) <= Math.round(e.lngLat.lng)) {
                      this.addPopUp(map, e)
                  }
                }

            },
            addPopUp (map, e) {
                var popup = new mapboxgl.Popup({closeOnClick: true})
                    .setLngLat([e.lngLat.lng, e.lngLat.lat])
                    .setHTML('<h1>Hello World!</h1>')
                    .addTo(map);
            }
        }
    }
</script>
