<template>
    <div id="popupCard">
        <div class="container" v-show="show">
            <div class="row align-items-center">
                <div class="cols-6">
                    <img src="../img/no-image-2.png" alt="img description" style="height: 200px; width: 200px">
                </div>
                <div class="cols-6">
                    <h1>Titre</h1>
                    <p>text dans la carte</p>
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
        data () {
            return {
                proprieties: Object,
                show : true
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