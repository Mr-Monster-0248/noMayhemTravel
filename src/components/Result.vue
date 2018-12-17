<template>
    <div id="result">
        <h2>test</h2>

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