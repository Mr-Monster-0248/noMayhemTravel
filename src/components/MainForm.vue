<template>
    <div id="mainForm">
        <b-container>
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
                <b-form-group id="inputClassementGroup"
                              label="Classement en L1"
                              label-for="inputClassement">
                    <b-form-input id="inputClassement"
                                  type="number"
                                  v-model="form.classement"
                                  required
                                  placeholder="Votre classement en L1">
                    </b-form-input>
                </b-form-group>
                <b-form-group id="inputGPAGroup"
                              label="GPA du S3"
                              label-for="inputGPAGroup">
                    <b-form-input id="inputGPA"
                                  type="number"
                                  v-model="form.gpa"
                                  placeholder="GPA du S3">
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

                <b-form-group id="choiceGroupe">
                    <b-form-checkbox v-model="show" value="true">Spécifiez des choix</b-form-checkbox>
                </b-form-group>
                <b-card v-if="show" bg-variant="light">
                    <b-form-group horizontal label="Vos choix" label-size="lg" class="mb-0">
                        <b-form-group>
                            <b-input-group horizontal label="1er choix" label-class="text-sm-right" label-for="firstChoice" prepend="1°">
                                <b-form-select id="firstChoice"
                                               type="text"
                                               v-model="form.choices[0]"
                                               :options="destination"
                                               placeholder="Votre choix">
                                </b-form-select>
                            </b-input-group>
                        </b-form-group>
                        <b-form-group>
                            <b-input-group horizontal label="2ème choix" label-for="secChoice" prepend="2°">
                                <b-form-select id="secChoice"
                                               v-model="form.choices[1]"
                                               type="text"
                                               :options="destination"
                                               placeholder="Votre choix">
                                </b-form-select>
                            </b-input-group>
                        </b-form-group>
                        <b-form-group>
                            <b-input-group prepend="3°">
                                <b-form-select v-model="form.choices[2]"
                                               type="text"
                                               :options="destination"
                                               placeholder="Votre choix">
                                    <div class="input-group-text">test</div>
                                </b-form-select>
                            </b-input-group>
                        </b-form-group>
                    </b-form-group>
                </b-card>
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
                    checked: [],
                    choices: []
                },
                section: ['International', 'Classique', 'Bio-numérique', 'Renforcé'],
                destination: ['Canada', 'Afrique du sud', 'Pologne', 'UK', 'Malaisie'],
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
    #mainForm {
        margin-top: 20px;
    }
</style>