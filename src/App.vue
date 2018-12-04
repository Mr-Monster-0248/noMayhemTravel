<template>
    <div id="app">
        <Navbar/>
        <MainMap/>
        <b-container>
            <b-row>
                <b-col class="maincol" sm="12" md="6">
                    <MainInfo/>
                </b-col>
                <b-col class="maincol" sm="12" md="6">
                    <MainForm/>
                </b-col>
            </b-row>

        </b-container>

        <Footer/>
        <CustomPanel/>

    </div>
</template>

<script>
    import MainMap from "./components/Map";
    import Navbar from "./components/TheNavbar";
    import MainForm from "./components/MainForm";
    import MainInfo from "./components/MainInfo";
    import Footer from "./components/TheFooter"
    import CustomPanel from "./components/MapPanel"


    export default {
        name: "app",
        components: {
            Footer,
            MainForm,
            Navbar,
            MainMap,
            CustomPanel,
            MainInfo
        },

        methods: {}
    };
</script>

<style>
    #map {
        width: 100%;
        height: 500px;
    }

        .maincol {
            padding: 25px;
            margin-top: 20px;
        }




</style>
