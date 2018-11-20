<template>
    <div id="app">
        <Navbar/>
        <MainMap/>
        <b-container class="bv-example-row">
            <b-row>
                <b-button type="submit" variant="primary" @click="onSubmit">Test</b-button>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import MainMap from "./components/MainMap";
import Navbar from "./components/Navbar";

export default {
  name: "app",
  components: {
    Navbar,
    MainMap
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert("coucou");
    }
  }
};
</script>

<style>
#map {
  width: 100%;
  height: 500px;
}
</style>
