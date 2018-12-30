<template>
    <b-container class="legendbar" fluid>
        <div class="d-flex justify-content-between">
            <div>
                <p>
                    <switches v-model="group" @input="switchGroup" theme="custom"
                              color="group"></switches>
                    Destination en groupe

                    <switches v-model="solo" @input="switchSolo" theme="custom"
                              color="solo"></switches>
                    Destination en solo (INT)
                </p>
            </div>
            <div>
                <p>Cliquez sur une destination pour en savoir plus.</p>
            </div>
        </div>

    </b-container>
</template>

<script>
    import Switches from "vue-switches";

    import {EventBus} from "./../event-bus.js";

    export default {
        name: "MapLegend",
        components: {
            Switches
        },
        data() {
            return {
                solo: true,
                group: true
            }
        },
        methods: {
            switchSolo(state) {
                EventBus.$emit("setLayer", "solo", state)
            },
            switchGroup(state) {
                EventBus.$emit("setLayer", "group", state)
            }
        }
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
</style>

<style lang="scss">
    .vue-switcher-theme--custom {
        &.vue-switcher-color--group {
            div {
                background-color: lighten(#a81a1a, 10%);

                &:after {
                    background-color: darken(#a81a1a, 5%);
                }
            }

            &.vue-switcher--unchecked {
                div {
                    background-color: lighten(#a81a1a, 30%);

                    &:after {
                        background-color: lighten(#a81a1a, 10%);
                    }
                }
            }
        }
    }

    .vue-switcher-theme--custom {
        &.vue-switcher-color--solo {
            div {
                background-color: lighten(#ffd000, 10%);

                &:after {
                    background-color: darken(#ffd000, 5%);
                }
            }

            &.vue-switcher--unchecked {
                div {
                    background-color: lighten(#ffd000, 30%);

                    &:after {
                        background-color: lighten(#ffd000, 10%);
                    }
                }
            }
        }
    }
</style>