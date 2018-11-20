<template>
    <mapbox v-bind:mapOptions="{ style: 'mapbox://styles/thibaultlepez/cjok8sf3600sw2rqiau1nvrmt' }"
            accessToken='pk.eyJ1IjoidGhpYmF1bHRsZXBleiIsImEiOiJjam9rODhlOHIwMXBqM3FteDY3cjVnMmk4In0.1y1C0L8RxjVOkndgeo5xMg'
            @map-click="mapClicked"
    ></mapbox>
</template>
<script>
/* eslint-disable no-console */

import Mapbox from "mapbox-gl-vue";

export default {
  name: "MainMap",
  components: { Mapbox },
  methods: {
    createPopUp: function(map, place) {
      var popup = new mapboxgl.Popup({ closeOnClick: true })
        .setLngLat(place.geometry.coordinates)
        .setHTML(
          "<h2>Destination: " +
            place.properties.country +
            "!</h2>" +
            "<br/><p>" +
            place.properties.name +
            "</p>"
        )
        .addTo(map);
    },
    mapClicked: function(map, e) {
      var features = map.queryRenderedFeatures(e.point);
      //var features = map.queryRenderedFeatures(e.point, { layers: ['destination'] });
      console.log(JSON.stringify(features, null, 2));
      console.log(features);
      if (features.length) {
        var clickedPoint = features[0];
        this.createPopUp(map, clickedPoint);
      }
    }
  }
};
</script>
