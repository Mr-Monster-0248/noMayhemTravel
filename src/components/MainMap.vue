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

    createPopUp: function(map, place) {

        console.log(place.properties);

      new mapboxgl.Popup({ closeOnClick: true })
        .setLngLat(place.geometry.coordinates)
        .setHTML("<div id='vue-popup-content'></div>")
        .addTo(map);

      new this.PopupContent({
          propsData: {
              destination: place.properties
          }
      }).$mount('#vue-popup-content')
    },
    mapClicked: function(map, e) {
      var features = map.queryRenderedFeatures(e.point);
      if (features.length) {
        var clickedPoint = features[0];
        this.createPopUp(map, clickedPoint);
      }
    }
  }
};
</script>
