<template>
    <div id="result">
        <h2>test</h2>


				<p v-for="res in this.result" v-bind:key="res.univ[0]">
					<span v-for="univ in res.univ" v-bind:key="univ">
						{{ univ }}
					</span>
				</p>
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