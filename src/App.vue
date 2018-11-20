<template>
    <div id="app">
        <Navbar/>
        <MainMap/>
        <MainForm/>
    </div>
</template>

<script>
import MainMap from "./components/MainMap";
import Navbar from "./components/Navbar";
import MainForm from "./components/MainForm";

export default {
  name: "app",
  components: {
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
