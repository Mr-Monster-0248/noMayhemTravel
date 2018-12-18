<template>
    <div id="panelCountry" v-if="ok">
        <div class="header" v-bind:style="{ 'background-image': 'url(img/country-panel/'+this.idJson+'.jpg)'}">
            <div class="header-content">
                <b-row>
                    <b-col md="10" sm="12">
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

        <b-table :items="cost" hover striped></b-table>

        <div v-bind:key="info.text" v-for="info in destination.info">
            <b-alert show variant="info">{{ info.text }}</b-alert>
        </div>
        <b-container class="panel-content">
            <b-row>
                <b-col lg="6" sm="12" v-if="destination.comments && destination.comments.length > 0">
                    <h2>Commentaires</h2>
                    <b-card v-bind:key="comment.text" v-for="comment in destination.comments">
                        <b-media>
                            <h3 v-if="comment.name">{{ comment.name }}</h3>
                            <b-img alt="profil picture" blank blank-color="#ccc" slot="aside" width="64"/>
                            <p class="card-text">{{ comment.text }}</p>
                        </b-media>
                    </b-card>
                </b-col>
                <b-col lg="6" sm="12" v-if="destination.hints && destination.hints.length > 0">
                    <h2>Astuces d'anciens voyageurs</h2>
                    <div v-bind:key="hint.text" v-for="hint in destination.hints">
                        <b-card>
                            <b-media>
                                <b-img alt="profil picture" blank blank-color="#ccc" slot="aside" width="64"/>
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

    @media (min-width: 576px) {
        .container {
            max-width: none;
        }
    }


</style>

<style>
    /* Override the modal vue CSS */
    .modal-vue--content {
        padding-left: 0px !important;
        padding-right: 0px !important;
        padding-top: 0px !important;
        padding-bottom: 0px !important;
    }

    .modal-vue--content-panel {
        text-align: left !important;
    }

    .modal-vue---close-icon {
        z-index: 999;
    }
</style>