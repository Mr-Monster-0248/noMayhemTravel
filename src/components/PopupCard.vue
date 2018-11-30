<template>
    <div id="popupCard">
        <div class="container">
            <div class="row align-items-center">
                <div class="cols-6">
                    <img :src="this.destination.thumbnail" :alt="this.destination.name">
                </div>
                <div class="cols-6">
                    <h1>{{ this.destination.country }}</h1>
                    <h3>{{ this.destination.name }}</h3>
                    <b-button @click="sideBar">En savoir plus</b-button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import { vueSlideoutPanelService } from 'vue2-slideout-panel';
    import SliderTest from './subcomponents/sliderTest'


    export default {
        name: "PopupCard",

        props: {
          destination: {
              name: "",
              country: "",
              thumbnail: ""
          }
        },

        data () {
            return {
        }
        },

        methods: {
            sideBar() {
                //this.show = false;
                const panel1Handle = vueSlideoutPanelService.show({
                    component: 'SliderTest',
                    width: '800px', //customize the width
                    keepAlive: true,
                });

                this.$emit('sideBar')
            }
        },


    }
</script>

<style scoped>

</style>