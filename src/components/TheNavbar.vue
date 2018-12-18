<template>
    <b-navbar toggleable="md" type="dark" style="background-color: rgb(0, 34, 46)" >

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#">
            <img src="img/logo.png" alt="logo" style="width: 50px; height: 51px">
            IMMERSION TIME
        </b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <search></search>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
import Search from "./Search";
export default {
  name: "Navbar",
    components: { Search}
};
</script>

<style scoped>

</style>
