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
                result: {}
            };
        },

        mounted() {
            EventBus.$on('displayRes', (result) => {
                this.result = result;
            })
        }
    }
</script>

<style scoped>

</style>