<template>
    <div id="result">
    <div class="res" v-for="uni in this.result.easy.univ">
        <p>{{ uni }}</p>
    </div>


    </div>
</template>

<script>
    export default {
        name: "Result",

        props: {
            result: {
                easy: {
                    univ: [],
                    comments: []
                },
                hard: {
                    univ: [],
                    issue: []
                }
            }
        }
    }
</script>

<style scoped>

</style>