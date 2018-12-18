<template>
    <div id="result" v-if="this.result.easy">
        <h2>Découvrez: </h2>

            <div v-for="res in this.result" v-bind:key="res.univ[0]">
                <b-card v-for="univ in res.univ" v-bind:key="univ">
                        <b-row>
                            <b-col sm="12" md="10">

                                <h3>{{ univInfo[univ].name }}</h3>
                                <p>Prix minimum retrouvé sur nos sondages : {{ univInfo[univ].price }}€</p>
                                <p>Monnaie locale : {{ univInfo[univ].currency }} et un taux de change pour un euros de {{ univInfo[univ].rate}}</p>

                            </b-col>


                            <b-col sm="12" md="2">
                                <b-button  @click="flyTo(univ)">Voir sur la carte</b-button>
                            </b-col>
                        </b-row>


                </b-card>

            </div>
    </div>
</template>

<script>
    import {EventBus} from './../event-bus.js';

    export default {
        name: "Result",

        data () {
            return {
                result: {
                    easy: {
                        univ: [],
                        comments: []
                    },
                    hard: {
                        univ: [],
                        issue: []
                    }
                },
                univInfo: {
                    agh: {
                        name: "AGH University",
                        price: 3700,
                        currency: "Zloty",
                        rate: 4.29
                    },
                    cape:{
                        name: "Cape University of Technology",
                        price: 3350,
                        currency: "Rand",
                        rate: 15.55
                    },
                    concordia: {
                        name: "Concordia University",
                        price: 4560,
                        currency: "Dollar Canadien",
                        rate: 1.51
                    },
                    cork: {
                        name: "University College of Cork",
                        price: 2720,
                        currency: "Euro",
                        rate: 1
                    },
                    coventry: {
                        name: "Coventry University",
                        price: 3360,
                        currency: "Livre Sterling",
                        rate: 0.89
                    },
                    curtin: {
                        name: "Curtin University",
                        price: 4020,
                        currency: "Dollar Australien",
                        rate: 1.55
                    },
                    kaist: {
                        name: "korea Advanced Institute of Science and Technology",
                        price: 2396,
                        currency: "Won Sud Coréen",
                        rate: 1273.35
                    },
                    malaysia: {
                        name: "Asia-Pacific University",
                        price: 3395,
                        currency: "Ringgit",
                        rate: 4.76
                    },
                    manipal: {
                        name: "Manipal Institute of Technology",
                        price: 3190,
                        currency: "Roupie",
                        rate: 79.45
                    },
                    nanyang: {
                        name: "Nanyang Technological University",
                        price: 4870,
                        currency: "Dollar Singapourien",
                        rate: 1.56
                    },
                    staffordshire: {
                        name: "Staffordshire Universtity",
                        price: 3300,
                        currency: "Livre Sterling",
                        rate: 0.89
                    },
                    stonybrook: {
                        name: "Stony Brook University",
                        price: 4600,
                        currency: "Dollar Américain",
                        rate: 1.56
                    }

                }
            };
        },

        methods: {
            flyTo(id) {
                EventBus.$emit('flyTo', id);
                window.scrollTo(0, 0);
            }
        },

        mounted() {
            EventBus.$on('displayRes', (result) => {
                this.result = result;
                /*for (let uni of this.result.easy.univ) {
                    console.log("on est là")
                    fetch('country/' + this.result.easy.univ[uni] + '.json')
                        .then(response => response.text())
                        .then(text => {
                            try {
                                const data = JSON.parse(text);
                                this.univInfo[uni] = data;
                            }
                            catch (err) {
                                console.log(err);
                            }
                        })
                        .catch(err => console.log("c'est la merde" + err));

                }*/
                // TODO: fetch JSON
            });
        }
    }
</script>

<style scoped>

</style>