<template>
    <b-navbar toggleable="md" type="dark" style="background-color: rgb(240, 188, 43)" >

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#">Immersion Time</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
                <b-nav-item href="#">À propos</b-nav-item>
                <b-nav-item-dropdown text="Lang." right>
                    <b-dropdown-item href="#">English</b-dropdown-item>
                    <b-dropdown-item href="#">Français</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>

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
