<template>
    <div id="mainForm">
        <b-container>
            <h2>Find your destination</h2>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-group id="inputSectionGroupe"
                              label="Votre section:"
                              label-for="inputSection">
                    <b-form-select id="inputSection"
                                   :options="section"
                                   required
                                   v-model="form.section">
                    </b-form-select>
                </b-form-group>
                <b-form-group id="inputClassementGroup"
                              label="Classement en L1"
                              label-for="inputClassement">
                    <b-form-input id="inputClassement"
                                  type="integer"
                                  v-model="form.classement"
                                  required
                                  placeholder="Votre classement en L1">
                    </b-form-input>
                </b-form-group>
                <b-form-group id="inputGPAGroup"
                              label="GPA du S3"
                              label-for="inputGPAGroup">
                    <b-form-input id="inputGPA"
                                  type="integer"
                                  v-model="form.gpa"
                                  placeholder="GPA du S3">
                    </b-form-input>
                </b-form-group>
                <b-form-group id="inputBudgetGroup"
                              label="Budget"
                              label-for="inputBudgetGroup">
                    <b-form-input id="inputBudget"
                                  type="integer"
                                  v-model="form.budget"
                                  placeholder="Votre budget">
                    </b-form-input>
                </b-form-group>

                <b-form-group id="exampleGroup4">
                    <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
                        <b-form-checkbox value="passport">Passport en cours de validité</b-form-checkbox>
                        <b-form-checkbox value="bourse">Boursier</b-form-checkbox>
                    </b-form-checkbox-group>
                </b-form-group>
                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
        </b-container>
    </div>
</template>

<script>

    export default {
        name: "MainForm",

        data () {
            return {
                form: {
                    section: null,
                    classement: null,
                    gpa: null,
                    budget: null,
                    checked: []
                },
                section: ['International', 'Classique', 'Bio-numérique', 'Renforcé'],
                show: true
            }
        },

        methods: {
            onSubmit (evt) {
                evt.preventDefault();
                alert(JSON.stringify(this.form));
            },
            onReset (evt) {
                evt.preventDefault();
                /* Reset our form values */
                this.form.section = null;
                this.form.classement = null;
                this.form.gpa = null;
                this.form.budget = null;
                this.form.checked = [];
                /* Trick to reset/clear native browser form validation state */
                this.$nextTick(() => { this.show = true });
            }
        }
    }
</script>

<style scoped>
    #mainForm {
        margin-top: 20px;
    }
</style>