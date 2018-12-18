<template>
    <div id="result" v-if="this.result.easy">
        <h2>Découvrez: </h2>

            <div v-for="res in this.result" v-bind:key="res.univ[0]">
                <b-card v-for="univ in res.univ" v-bind:key="univ">
                    <h3>{{ univ }}</h3>
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
                        price: 3700,
                        currency: "Zloty",
                        rate: 4.29
                    },
                    cape:{
                        price: 3350,
                        currency: "Rand",
                        rate: 15.55
                    },
                    concordia: {
                        price: 4560,
                        currency: "Dollar Canadien",
                        rate: 1.51
                    },
                    cork: {
                        price: 4500,
                        currency: "Livre",
                        rate: 0.89
                    },
                    coventry: {
                        price: 4000,
                        currency: "Livre",
                        rate: 0.89
                    },
                    curtin: {
                        price: 4000,
                        currency: "Dollar Australien",
                        rate: 1.55
                    },
                    kaist: {
                        price: 3700,
                        currency: "Zloty",
                        rate: 4.29
                    },
                    malaysia: {
                        price: 3395,
                        currency: "Ringgit",
                        rate: 4.76
                    },
                    manipal: {
                        price: 3190,
                        currency: "Roupie",
                        rate: 79.45
                    },
                    nanyang: {
                        price: 3700,
                        currency: "Zloty",
                        rate: 4.29
                    },
                    staffordshire: {
                        price: 3700,
                        currency: "Zloty",
                        rate: 4.29
                    },
                    stonybrook: {
                        price: 3700,
                        currency: "Zloty",
                        rate: 4.29
                    }

                }
            };
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





            console.log(JSON.stringify(this.univInfo))
        }
    }
</script>

<style scoped>

</style>