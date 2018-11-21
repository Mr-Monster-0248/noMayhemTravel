<template>
    <div id="popupCard" class="container">
        <div class="row align-items-center">
            <div class="cols-6">
                <img src="../img/no-image-2.png" alt="img description" style="height: 200px; width: 200px">
            </div>
            <div class="cols-6">
                <h1>Titre</h1>
                <p>text dans la carte</p>
                <b-button @click="test">En savoir plus</b-button>
            </div>
        </div>
        <slideout-panel></slideout-panel>
    </div>
</template>

<script>
    import { vueSlideoutPanelService } from 'vue2-slideout-panel';

    export default {
        name: "PopupCard",
        data () {
            return {
                proprieties: Object
            }
        },

        methods: {

            test() {
                const panel1Handle = vueSlideoutPanelService.show({
                    component: 'slideout-panel',
                    width: '500px', //customize the width
                    keepAlive: true,
                    props: {
                        data: {
                            firstName: 'John',
                            lastName: 'Doe',
                            age: 39
                        }
                    }
                });

                panel1Handle.promise
                    .then(results => {
                        console.log('Results for panel 1:', results);
                    });
            }
        }
    }
</script>

<style scoped>

</style>