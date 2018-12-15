<template>
    <div id="panelCountry" v-if="ok">
        <div class="header" v-bind:style="{ 'background-image': 'url(img/country-panel/'+this.idJson+'.jpg)'}">
            <div class="header-content">
                <b-row>
                    <b-col sm="12" md="10">
                        <h1>
                            <a :href="destination.link_website" class="dark">{{ destination.university }}</a>
                        </h1>

                        <h2 v-if="destination.country.name === destination.city">
                            <span class="dark">{{destination.city}}</span>
                        </h2>
                        <h2 v-else-if="destination.country">
                            <span class="dark">{{destination.city}}, {{ destination.country.name }}</span>
                        </h2>


                        <!-- TODO : add to h2 {{ destination.country.flag_url }} -->
                    </b-col>
                </b-row>
            </div>
        </div>

        <b-table striped hover :items="cost"></b-table>

        <div v-for="info in destination.info" v-bind:key="info.text">
            <b-alert show variant="info">{{ info.text }}</b-alert>
        </div>
        <b-container class="panel-content">
            <b-row>
                <b-col v-if="destination.comments && destination.comments.length > 0" sm="12" lg="6">
                    <h2>Commentaires</h2>
                    <b-card v-for="comment in destination.comments" v-bind:key="comment.text">
                        <b-media>
                            <h3 v-if="comment.name">{{ comment.name }}</h3>
                            <b-img slot="aside" blank blank-color="#ccc" width="64" alt="profil picture"/>
                            <p class="card-text">{{ comment.text }}</p>
                        </b-media>
                    </b-card>
                </b-col>
                <b-col v-if="destination.hints && destination.hints.length > 0" sm="12" lg="6">
                    <h2>Astuces d'anciens voyageurs</h2>
                    <div v-for="hint in destination.hints" v-bind:key="hint.text">
                        <b-card>
                            <b-media>
                                <b-img slot="aside" blank blank-color="#ccc" width="64" alt="profil picture"/>
                                <p class="card-text">{{ hint.text }}</p>
                            </b-media>
                        </b-card>
                    </div>
                </b-col>
            </b-row>
        </b-container>
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
            // console.debug("YAS")
        }
    };
</script>

<style scoped>
    .header {
        background-size: cover;
        background-position: center;
        height: 150px;
    }

    .header-content {
        padding: 15px;
        color: #fff;
    }

    a {
        color: #fff;
        font-size: 2rem;
    }

    h1 {
        text-align: left;
        text-transform: uppercase;
    }

    h2 {
        font-size: 1.6rem;
        color: #fff;
    }

    .dark {
        background: rgba(0, 0, 0, 0.7);
        padding: 0 5px;
    }

    .blockquote {
        margin-bottom: 0rem;
        font-size: 1rem;
    }

    @media (min-width: 576px)

    .container {
        max-width: none;
    }

</style>

<style>
    .modal-vue--content {
        padding-left: 0px !important;
        padding-right: 0px !important;
        padding-top: 0px !important;
        padding-bottom: 0px !important;
    }
</style>