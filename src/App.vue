<template>
    <div id="app">
        <Navbar/>
        <MainMap/>
        <MainForm/>
        <Footer/>
        <CustomPanel/>

    </div>
</template>

<script>
    import MainMap from "./components/MainMap";
    import Navbar from "./components/Navbar";
    import MainForm from "./components/MainForm";
    import Footer from "./components/Footer"
    import CustomPanel from "./components/CustomPanel"


    export default {
        name: "app",
        components: {
            Footer,
            MainForm,
            Navbar,
            MainMap,
            CustomPanel,


        },

        methods: {}
    };
</script>

<style>
    #map {
        width: 100%;
        height: 500px;
    }
</style>
