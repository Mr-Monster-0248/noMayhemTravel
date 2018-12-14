<template>
    <div id="result">
        <div class="res" v-for="uni in this.result.easy.univ" v-bind:key="uni">
            <p>{{ uni }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Result",

        data: function () {
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
                }
            };
        }
    }
</script>

<style scoped>

</style>