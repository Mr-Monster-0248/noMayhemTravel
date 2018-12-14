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
                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Recherche"/>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Recherche</b-button>
                </b-nav-form>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>

</style>
