<template>
    <div>
        <h1>
            <a :href="destination.link_website">{{ destination.university }}</a>
        </h1>
        <h2>{{ destination.country.name }}</h2>
        <div v-for="info in destination.info" v-bind:key="info.text">
            <b-alert show variant="info">{{ info.text }}</b-alert>
        </div>
        <div v-for="comment in destination.comments" v-bind:key="comment.text">
            <b-card>
                <blockquote class="blockquote">
                    <p class="card-text">"{{ comment.text }}"</p>

                    <footer class="blockquote-footer">
                        {{ comment.name }} parti en <cite>{{ comment.year }} </cite>
                    </footer>
                </blockquote>
            </b-card
            >
        </div>
    </div>
</template>

<script>
    import canadajson from "../../public/country/canada.json";

    console.log("10");

    export default {
        name: 'PanelCountry',
        data: function () {
            return {
                destination: canadajson
            };
            /*return {
                destination: canadajson
            };*/
        },
        created() {
            console.log("10");
            fetch('country/canada.json').then(response => response.json()).then(json => {
                this.destination = json
            })

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