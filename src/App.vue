<template>
    <div id="app">
        <Navbar/>
        <MainMap/>
        <PopupCard/>
        <MainForm/>
    </div>
</template>

<script>
import MainMap from "./components/MainMap";
import Navbar from "./components/Navbar";
import MainForm from "./components/MainForm";
import  PopupCard from "./components/PopupCard";

export default {
  name: "app",
  components: {
      MainForm,
      Navbar,
      MainMap,
      PopupCard
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
