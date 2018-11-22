<template>
    <p>coucou</p>
</template>

<script>
    export default {
        name: 'sliderTest',
        props: {
            data: {
                type: Object,
                required: true
            }
        },
        data() {
            return {};
        },
        methods: {
            closePanel() {
                this.$emit('closePanel', {
                    name: this.form.name
                });
            }
        }
    };
</script>

<style scoped>

</style>