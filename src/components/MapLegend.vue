<template>
    <b-container fluid class="legendbar">
        <div class="d-flex justify-content-between">
            <div>
                <p><span class="dot dest-group"></span> Destination en groupe <span class="dot dest-solo"></span>
                    Destination en solo </p>
            </div>
            <div>
                <p>Cliquez sur une destination pour en savoir plus.</p>
            </div>
        </div>

    </b-container>
</template>

<script>
    export default {
        name: "MapLegend"
    }
</script>

<style scoped>
    .legendbar {
        background-color: #00222E;
        color: white;
        min-height: 30px;


    }

    .legendbar p {
        padding-top: 2px;
        margin-bottom: 0px;
    }

    .dot {
        height: 13px;
        width: 13px;
        border-radius: 50%;
        display: inline-block;
    }

    .dest-group {
        background-color: #a81a1a;
    }

    .dest-solo {
        background-color: #ffd000;
    }
</style>