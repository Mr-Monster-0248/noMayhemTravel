<template>
    <div v-if="ok">
        <h1>
            <a :href="destination.link_website">{{ destination.university }}</a>
        </h1>

        <div v-if="destination.country"><h2> {{ destination.country.name }}{{ destination.country.flag_url }}</h2></div>


        <b-table striped hover :items="cost"></b-table>

        <div v-for="info in destination.info" v-bind:key="info.text">
            <b-alert show variant="info">{{ info.text }}</b-alert>
        </div>
        <div v-for="comment in destination.comments" v-bind:key="comment.text">
            <b-card>
                <blockquote class="blockquote">
                    <p class="card-text">"{{ comment.text }}"</p>
                    <div v-if="comment.name">
                        <footer class="blockquote-footer">
                            {{ comment.name }} parti en <cite>{{ comment.year }} </cite>
                        </footer>
                    </div>
                </blockquote>
            </b-card>

        </div>
        <h2>Astuces d'anciens voyageurs</h2>
        <div v-for="hint in destination.hints" v-bind:key="hint.text">
            <b-card>
                <blockquote class="blockquote">
                    <p class="card-text">"{{ hint.text }}"</p>
                </blockquote>
            </b-card>

        </div>
    </div>
    <div v-else>
        <b-alert show variant="danger">Couldn't load data !</b-alert>
    </div>
</template>

<script>
    export default {
        name: 'PanelCountry',
        props: ['idJson'],
        data: function () {
            return {
                destination: {},
                cost: {},
                ok: false
            };
        },
        created() {

            // console.log("PanelCountry created...");
            // Fetch the right file, put it in this.destination

            fetch('country/' + this.idJson + '.json')
                .then(response => response.text())
                .then(text => {
                    try {
                        const data = JSON.parse(text);
                        this.destination = data;
                        this.ok = true;
                    } catch (err) {
                        // It is text, do you text handling here
                        this.ok = false;
                    }
                });
            this.cost = this.destination.prices;
            console.debug(this.cost);
            console.debug("YAS")
        }
    };
</script>

<style scoped>
    h1 {
        font-size: 2rem
    }

    h2 {
        font-size: 1.6rem
    }

    .blockquote {
        margin-bottom: 0rem;
        font-size: 1rem;
    }
</style>