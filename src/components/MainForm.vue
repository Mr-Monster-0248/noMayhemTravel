<template>
    <div id="mainForm">
        <!--<h2>Find your destination</h2>-->
        <b-form @reset="onReset" @submit="onSubmit">
            <b-form-group id="inputSectionGroupe"
                          label="Votre section"
                          label-for="inputSection">
                <b-form-select :options="section"
                               id="inputSection"
                               required
                               v-model="form.section">
                </b-form-select>
            </b-form-group>
            <b-row>
                <b-col sm="6">
                    <b-form-group id="inputToeicGroup"
                                  label="Toeic en fin L1"
                                  label-for="inputToiec"
                                  v-if="form.section == "Internationale"">
                        <b-form-input id="inputToiec"
                                      placeholder="Votre Toeic en fin L1"
                                      required
                                      type="number"
                                      v-model="form.toiec">
                        </b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col sm="6">
                    <b-form-group id="inputMoyenneGroup"
                                  label="Moyenne en L1"
                                  label-for="inputMoyenne">
                        <b-form-input id="inputMoyenne"
                                      placeholder="Votre moyenne en L1"
                                      required
                                      type="number"
                                      v-model="form.moyenne">
                        </b-form-input>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group id="inputGPAGroup"
                                  label="GPA en L1"
                                  label-for="inputGPA">
                        <b-form-input id="inputGPA"
                                      placeholder="Votre GPA en L1"
                                      required
                                      type="number"
                                      v-model="form.gpa">
                        </b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-form-group id="inputBudgetGroup"
                          label-for="inputBudgetGroup">
                <span title="Votre budget total sur les 5 mois comprenant le transport (aller-retour)"
                      v-b-tooltip.hover>Budget</span>
                <b-input-group append="€">
                    <b-form-input id="inputBudget"
                                  placeholder="Votre budget total"
                                  type="number"
                                  v-model="form.budget">
                    </b-form-input>
                </b-input-group>
            </b-form-group>

            <b-form-group id="exampleGroup4">
                <b-form-checkbox-group id="exampleChecks" v-model="form.checked">
                    <b-form-checkbox value="passport">Passport en cours de validité</b-form-checkbox>
                </b-form-checkbox-group>
            </b-form-group>

            <b-button type="submit" variant="primary">Décoller ✈️</b-button>
            <b-button style="margin-left:10px" type="reset" variant="danger">Réinitialiser</b-button>
        </b-form>
    </div>
</template>

<script>
    import findDest from "./../algo";
    import {EventBus} from "./../event-bus.js";


    export default {
        name: "MainForm",

        data() {
            return {
                form: {
                    section: null,
                    toeic: null,
                    moyenne: null,
                    gpa: null,
                    budget: null,
                    checked: [],
                },
                section: ["Internationale", "Classique", "Bio-numérique", "Renforcée"],
                show: false
            }
        },

        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                if (this.show === false) {
                    this.form.choices = [];
                }

                EventBus.$emit("displayRes", findDest(this.form))
            },
            onReset(evt) {
                evt.preventDefault();
                /* Reset our form values */
                this.form.section = null;
                this.form.toeic = null;
                this.form.moyenne = null;
                this.form.gpa = null;
                this.form.budget = null;
                this.form.checked = [];
                /* Trick to reset/clear native browser form validation state */
                this.$nextTick(() => {
                    this.show = true;
                });
            },
        }
    };
</script>

<style scoped>

</style>
