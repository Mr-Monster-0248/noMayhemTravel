<template>
    <div id="mainInfo">
        <h2>Qu'est ce qu'Immersion Time?</h2>
        <p>Dans le cadre du projet de programmation de L2, Mayhem Adventure présente un site dédié exclusivement aux
            étudiants d’Efrei Paris.</p>
        <p>
            Il permet, à titre théorique, d’étudier vos possibilités de mobilités à l’international.
            Notre équipe a pour ambition de te faire découvrir des destinations auxquelles tu n’avais peut-être pas
            pensé.
        </p>
        <p>
            Cependant, ce site ne peut en aucun cas vous assurer l’application des destinations obtenues.
            Ces dernières évoluant en fonction de paramètres étant propres à chaque promotions d’Efrei Paris.
        </p>
        <h3>L'Équipe de Mayhem Adventure</h3>
        <b-table :items="items" hover small striped></b-table>
    </div>
</template>

<script>
    const items = [
        {Nom: "Gabriel DUGNY", poste: "Chef de projet"},
        {Nom: "Thibault LEPEZ", poste: "Responsable technique"},
        {Nom: "Aïda LEMDANI", poste: "Responsable design"},
        {Nom: "Louise BOUREY", poste: "Responsable communication"},
        {Nom: "Vincent LACROUTS", poste: "Testeur agile"}

    ];

    export default {
        data() {
            return {
                name: "MainInfo",
                items
            }
        }
    }
</script>

<style scoped>

</style>
