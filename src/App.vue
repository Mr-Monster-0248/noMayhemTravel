<template>
    <!-- Root of App -->
    <div id="app">
        <MainVue></MainVue>

    </div>
</template>

<script>
    import MainVue from "./components/MainVue";

    export default {
        name: "app",
        components: {

            MainVue,
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

    ::selection {
        background-color: #a81a1a;
        color: #fff;
    }

    ::-moz-selection {
        background-color: #a81a1a;
        color: #fff;
    }
</style>
