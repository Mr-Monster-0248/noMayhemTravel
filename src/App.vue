<template>
    <div id="app">
        <Navbar/>
        <MainMap/>
        <b-container>
            <b-row>
                <b-col>
                    <MainInfo/>
                </b-col>
                <b-col>
                    <MainForm/>
                </b-col>
            </b-row>

        </b-container>

        <Footer/>
        <CustomPanel/>

    </div>
</template>

<script>
    import MainMap from "./components/MainMap";
    import Navbar from "./components/Navbar";
    import MainForm from "./components/MainForm";
    import MainInfo from "./components/MainInfo";
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

    #mainForm {
        margin-top: 20px;
    }

    #mainInfo {
        margin-top: 20px;
    }
</style>
