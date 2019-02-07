<template>
    <div>
        <Navbar/>

        <MainMap/>
        <MapLegend/>
        <!-- b-tags are from bootstrap vue -->
        <b-container fluid style="max-width: 1700px;">
            <b-row>
                <b-col class="maincol" md="6" sm="12">
                    <MainInfo/>
                </b-col>
                <b-col class="maincol" md="6" sm="12">
                    <MainFormLoader/>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="12">
                    <Result/>
                </b-col>
            </b-row>

        </b-container>

        <Footer/>

        <!-- Panel, hidden by default -->
        <CustomPanel/>
    </div>
</template>

<script>
    import MainMap from "./MainMap";
    import Navbar from "./TheNavbar";
    import MainFormLoader from "./MainFormLoader";
    import MainInfo from "./MainInfo";
    import Footer from "./TheFooter"
    import CustomPanel from "./MapPanel"
    import MapLegend from "./MapLegend";
    import Result from "./TheResult";

    export default {
        name: "MainVue",
        components: {
            Result,
            MapLegend,
            Footer,
            MainFormLoader,
            Navbar,
            MainMap,
            CustomPanel,
            MainInfo
        }
    }
</script>

<style scoped>

</style>