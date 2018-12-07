<template>
    <div id="mainForm">
        <h2>Find your destination</h2>
        <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group id="inputSectionGroupe"
                          label="Votre section:"
                          label-for="inputSection">
                <b-form-select id="inputSection"
                               :options="section"
                               required
                               v-model="form.section">
                </b-form-select>
            </b-form-group>

            <b-form-group v-if="form.section == 'Internationale'" id="examplesolo">
                <b-form-checkbox v-model="form.solo" value="true">Destinations solo</b-form-checkbox>
            </b-form-group>

            <b-form-group v-if="form.solo == 'true'"
                          id="inputToeicGroup"
                          label="Toeic en fin L1"
                          label-for="inputToiec">
                <b-form-input id="inputToiec"
                              type="number"
                              v-model="form.toiec"
                              required
                              placeholder="Votre Toeic en fin L1">
                </b-form-input>
            </b-form-group>

            <b-form-group id="inputMoyenneGroup"
                          label="Moyenne en L1"
                          label-for="inputMoyenne">
                <b-form-input id="inputMoyenne"
                              type="number"
                              v-model="form.moyenne"
                              required
                              placeholder="Votre classement en L1">
                </b-form-input>
            </b-form-group>

            <b-form-group id="inputGPAGroup"
                          label="GPA en L1"
                          label-for="inputGPA">
                <b-form-input id="inputGPA"
                              type="number"
                              v-model="form.gpa"
                              required
                              placeholder="Votre GPA en L1">
                </b-form-input>
            </b-form-group>

            <b-form-group id="inputBudgetGroup"
                          label="Budget"
                          label-for="inputBudgetGroup">
                <b-input-group append="€">
                    <b-form-input id="inputBudget"
                                  type="number"
                                  v-model="form.budget"
                                  placeholder="Votre budget">
                    </b-form-input>
                </b-input-group>
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
    </div>
</template>

<script>

    export default {
        name: "MainForm",

        data () {
            return {
                form: {
                    section: null,
                    solo: [],
                    toeic: null,
                    moyenne: null,
                    gpa: null,
                    budget: null,
                    checked: [],
                    choices: [],
                    choicessolo: []
                },
                section: ['Internationale', 'Classique', 'Bio-numérique', 'Renforcée'],
                gpamoyenne: ['GPA', 'Moyenne'],
                destination: ['Canada', 'Afrique du sud', 'Pologne', 'UK', 'Malaisie', 'India'],
                destinationsolo: ['Angleterre', 'Australie', 'Singapour', 'USA', 'Corée du Sud', 'Irelande'],
                destinationsolonul: ['Irelande', 'Singapour'],
                show: false
            }
        },

        methods: {
            onSubmit (evt) {
                evt.preventDefault();
                if (this.show === false) {
                    this.form.choices = []
                }
                alert(JSON.stringify(this.form));
            },
            onReset (evt) {
                evt.preventDefault();
                /* Reset our form values */
                this.form.section = null;
                this.form.solo = [];
                this.form.classement = null;
                this.form.gpa = null;
                this.form.budget = null;
                this.form.checked = [];
                this.form.choices = [];
                /* Trick to reset/clear native browser form validation state */
                this.$nextTick(() => { this.show = true });
            },
        }
    }
</script>

<style scoped>

</style>