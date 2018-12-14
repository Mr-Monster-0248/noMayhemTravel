<template>
    <div id="app">
        <Navbar/>
        <MainMap/>
        <MapLegend/>
        <b-container fluid style="max-width: 1700px;">
            <b-row>
                <b-col class="maincol" sm="12" md="6">
                    <MainInfo/>
                </b-col>
                <b-col class="maincol" sm="12" md="6">
                    <MainFormLoader/>
                </b-col>
            </b-row>
            <result/>
        </b-container>

        <Footer/>
        <CustomPanel/>

    </div>
</template>

<script>
    import MainMap from "./components/Map";
    import Navbar from "./components/TheNavbar";
    import MainFormLoader from "./components/MainFormLoader";
    import MainInfo from "./components/MainInfo";
    import Footer from "./components/TheFooter"
    import CustomPanel from "./components/MapPanel"
    import MapLegend from "./components/MapLegend";
    import Result from "./components/Result";


    export default {
        name: "app",
        components: {
            Result,
            MapLegend,
            Footer,
            MainFormLoader,
            Navbar,
            MainMap,
            CustomPanel,
            MainInfo
        },

        methods: {}
    };
</script>

<style>
    .maincol {
        padding: 25px;
        margin-top: 20px;
    }

    #map {
        width: 100%;
        height: 60vh;
    }
</style>
