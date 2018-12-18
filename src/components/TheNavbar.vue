<template>
    <b-navbar id="theNavbar" style="background-color: rgb(0, 34, 46)" toggleable="md" type="dark">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#">
            <img alt="logo" src="img/logo.png" style="width: 50px; height: 51px">
            IMMERSION TIME
        </b-navbar-brand>

        <b-collapse id="nav_collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <search></search>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    import Search from "./TheSearch";

    export default {
        name: "Navbar",
        components: {Search}
    };
</script>

<style scoped>

</style>
