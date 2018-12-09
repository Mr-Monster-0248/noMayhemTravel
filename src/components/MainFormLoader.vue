<template>
    <div style="
    height: 100%;
"><H2>Recherche de destination</H2>
        <p>Laissez-vous surprendre !</p>
        <div class="center" :class="{'open': formOpen}">
            <div class="open-button" :class="{'open': formOpen}">

                <div class="button-copy" v-show="!formOpen" @click="formOpen = true">

                    <span class="button-copy-span">Trouver votre destination</span>
                </div>
                <form @submit="cancel()">
                    <MainForm></MainForm>
                    <div class="cancel" v-show="formOpen"><span @click="cancel()">Retour</span></div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import MainForm from './MainForm'

    export default {
        name: "MainFormLoader",
        components: {
            MainForm
        },
        data() {
            return {
                formOpen: false
            }
        },
        methods: {

            cancel: function () {
                this.formOpen = false;
            }
        }
    }
</script>

<style>
    .center {
        height: 60%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .center.open{height: auto;}

    .open-button {
        transition: all 0.3s ease;
        background-color: #a81a1a;
        height: 190px;
        width: 190px;
        border-radius: 95px;
        box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.07);
        cursor: pointer;

        margin: auto;

    }

    .open-button.open {
        background-color: #ffffff;
        padding: 18px 32px;
        border-radius: 5px;
        width: 100%;
        height: 100%;
        cursor: default;
    }

    .open-button.open form {
        opacity: 1;
        transition: opacity 0.1s ease;
        transition-delay: 0.3s;
        height: auto;
    }

    .open-button .button-copy {
        text-align: center;
        line-height: 190px;
        text-transform: uppercase;
        font-weight: bold;
        color: #ffffff;
    }

    .button-copy {
        height: 190px !important;
        line-height: 190px !important;
        text-align: center !important;

    }

    .button-copy-span {
        display: inline-block !important;
        vertical-align: middle !important;
        line-height: normal !important;
    }

    .open-button form {
        transition: none;
        opacity: 0;
        height: 0;
        overflow: hidden;
    }

    .open-button .cancel {
        font-size: 12px;
        text-align: center;
        margin-top: 1em;
    }

    .open-button .cancel span {
        cursor: pointer;
    }

    .open-button .cancel span:hover {
        text-decoration: underline;
    }

    form * {
        outline: none;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    ::selection {
        background-color: #a81a1a;
        color: #fff;
    }

    ::-moz-selection {
        background-color: #a81a1a;
        color: #fff;
    }

</style>