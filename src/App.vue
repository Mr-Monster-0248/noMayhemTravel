<template>
    <div id="app">
        <Navbar/>
        <MainMap/>
        <MainForm/>
        <Footer/>
        <slideout-panel></slideout-panel>
    </div>
</template>

<script>
import MainMap from "./components/MainMap";
import Navbar from "./components/Navbar";
import MainForm from "./components/MainForm";
import Footer from "./components/Footer"

export default {
  name: "app",
  components: {
      Footer,
      MainForm,
      Navbar,
      MainMap
  },

  methods: {

  }
};
</script>

<style>
#map {
  width: 100%;
  height: 500px;
}
</style>
