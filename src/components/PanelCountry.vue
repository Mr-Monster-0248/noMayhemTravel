<template>
    <h1>coucou</h1>
</template>

<script>
    console.log("10");

    export default {
        name: 'PanelCountry',
        data() {
            return {};
        },
        methods: {
            closePanel() {
                alert("coucou");
                this.$emit("closePanel", {});
            }
        }
    };
</script>

<style scoped>

</style>