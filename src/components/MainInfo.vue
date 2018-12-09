<template>
    <div id="mainInfo">
        <h2>What is Immersion Time?</h2>
        <p>It's a tool to quickly visualize and gather information about all destinations for your L3 at Efrei.
        It features a matching algorithm that could suggest you some destinations you might not have thought a lot about...</p>
        <h3>L'Equipe de Mayhem Adventure</h3>
        <b-table striped hover :items="items"></b-table>
    </div>
</template>

<script>
    const items = [
        {Nom: 'Gabriel DUGNY', post: 'Chef de projet'},
        {Nom: 'Thibault Lepez', post: 'Responsable technique'},
        {Nom: 'Aïda LEMDANI', post: 'Responsable design'},
        {Nom: 'Louise BOUREY', post: 'Responsable communication'},
        {Nom: 'Vincent LACROUTS', post: 'Testeur agile'}

    ];

    export default {
        data () {
            return {
                name: "MainInfo",

                items: items
            }
        }
    }
</script>

<style scoped>

</style>