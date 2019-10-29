<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="10">
        <v-card>
          <v-form ref="form">
            <v-card-text>
              <v-row>
                <!-- steps -->
                <v-col cols="12">
                  <v-stepper v-model="e1">
                    <template>
                      <v-stepper-header>
                        <template v-for="n in steps">
                          <v-stepper-step
                            :key="`${n}-step`"
                            :complete="e1 > n"
                            :step="n"
                          >Step {{ n }}</v-stepper-step>

                          <v-divider v-if="n !== steps" :key="n"></v-divider>
                        </template>
                      </v-stepper-header>
                      <v-stepper-items>
                        <v-stepper-content v-for="n in steps" :key="`${n}-content`" :step="n">
                          <v-row>
                            <template v-if="n == 1">
                              <!-- Relacionado con el parto -->
                              <v-toolbar dark>
                                <v-toolbar-title>Relacionado con el parto</v-toolbar-title>
                              </v-toolbar>
                              <v-col cols="12">
                                <v-simple-table dense>
                                  <thead>
                                    <tr>
                                      <th class="text-left headline">col as1</th>
                                      <th class="text-left headline">col 2</th>
                                      <th class="text-left headline">col 3</th>
                                      <th class="text-left headline">col 4</th>
                                      <th class="text-left headline">col 5</th>
                                      <th class="text-left headline">col 6</th>
                                      <th class="text-left headline">col 7</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Gestación</td>
                                      <td>
                                        <v-checkbox v-model="selected" value="John"></v-checkbox>
                                      </td>
                                      <td>
                                        <v-checkbox v-model="selected" value="Jacob"></v-checkbox>
                                      </td>
                                      <td>
                                        <v-checkbox v-model="selected" value="yone"></v-checkbox>
                                      </td>
                                      <td>
                                        <v-checkbox v-model="selected" value="jose"></v-checkbox>
                                      </td>
                                      <td>
                                        <v-checkbox v-model="selected" value="jose"></v-checkbox>
                                      </td>
                                      <td>
                                        <v-checkbox v-model="selected" value="jose"></v-checkbox>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Parto</td>
                                      <td>
                                        <v-checkbox v-model="selected" value="John"></v-checkbox>
                                      </td>
                                      <td>
                                        <v-checkbox v-model="selected" value="Jacob"></v-checkbox>
                                      </td>
                                      <td>
                                        <v-checkbox v-model="selected" value="yone"></v-checkbox>
                                      </td>
                                      <td>
                                        <v-checkbox v-model="selected" value="jose"></v-checkbox>
                                      </td>
                                      <td>
                                        <v-checkbox v-model="selected" value="jose"></v-checkbox>
                                      </td>
                                      <td>
                                        <v-checkbox v-model="selected" value="jose"></v-checkbox>
                                      </td>
                                    </tr>
                                  </tbody>
                                </v-simple-table>
                              </v-col>
                              <!-- /Relacionado con el parto -->
                              <!-- name -->
                              <v-col cols="6">
                                <v-text-field
                                  v-model="name"
                                  label="Nombres"
                                  required
                                  :rules="[v => !!v || 'Campo requerido']"
                                ></v-text-field>
                              </v-col>
                              <!-- /name -->
                              <!-- last name -->
                              <v-col cols="6">
                                <v-text-field
                                  v-model="lastName"
                                  label="Apellidos"
                                  required
                                  :rules="[v => !!v || 'Campo requerido']"
                                ></v-text-field>
                              </v-col>
                              <!-- /last name -->
                              <v-col cols="12">
                                <v-row>
                                  <!-- birth date -->
                                  <v-col cols="12" md="6" sm="12">
                                    <div class="subheading">Fecha de nacimiento</div>
                                    <v-date-picker v-model="dateBirth" :show-current="false"></v-date-picker>
                                  </v-col>
                                  <!-- /birth date -->
                                  <v-col cols="12" md="6" sm="12">
                                    <!-- gender -->
                                    <v-select
                                      v-model="selectGender"
                                      :items="genders"
                                      :rules="[v => !!v || 'Campo requerido']"
                                      label="Elige el genero"
                                      required
                                    ></v-select>
                                    <!-- /gender -->
                                    <!-- age -->
                                    <v-text-field
                                      v-model="age"
                                      label="Edad"
                                      required
                                      type="number"
                                      :rules="[v => !!v || 'Campo requerido']"
                                    ></v-text-field>
                                    <!-- /age -->

                                    <!-- school -->
                                    <v-text-field
                                      v-model="school"
                                      label="Institución en la cual estudia"
                                      :rules="[v => !!v || 'Campo requerido']"
                                    ></v-text-field>
                                    <!-- /school -->

                                    <!-- nivel de instruccion en la que require tutor -->
                                    <v-combobox
                                      v-model="selectLevelInstruction"
                                      :items="levelInstruction"
                                      label="Nivel de instruccion en la que requiere tutor"
                                      chips
                                      :rules="[v => !!v || 'Campo requerido']"
                                    ></v-combobox>
                                    <!-- /nivel de instruccion en la que require tutor -->
                                    <!-- gestacion -->
                                    <v-select
                                      v-model="gestacion"
                                      :items="relacionadoParto"
                                      label="Gestacion"
                                      required
                                      :rules="[v => !!v || 'Campo requerido']"
                                    ></v-select>
                                    <!-- /gestacion -->
                                    <!-- parto -->
                                    <v-select
                                      v-model="parto"
                                      :items="relacionadoParto"
                                      label="Parto"
                                      required
                                      :rules="[v => !!v || 'Campo requerido']"
                                    ></v-select>
                                    <!-- /parto -->
                                  </v-col>
                                </v-row>
                              </v-col>
                            </template>
                            <template v-else-if="n == 2"></template>
                            <template v-else-if="n == 3">
                              asdasd
                            </template>
                            <template v-else>N es igual a 4</template>
                            <v-col cols="12">
                              <v-spacer></v-spacer>
                              <v-btn
                                class="mr-4"
                                color="primary"
                                v-if="countStep < 4"
                                @click="nextStep(n)"
                              >Siguiente</v-btn>
                              <v-btn class="mr-4" color="primary" v-else>Registrar</v-btn>
                              <v-btn
                                class="ml-4"
                                text
                                v-if="countStep > 1"
                                @click="backStep(n)"
                              >Atras</v-btn>
                            </v-col>
                          </v-row>
                        </v-stepper-content>
                      </v-stepper-items>
                    </template>
                  </v-stepper>
                </v-col>
                <!-- /steps -->
              </v-row>
            </v-card-text>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CreatePatient",
  data() {
    return {
      selected: [],
      itemsRadio: ["Default (no property)", "Permanent", "Temporary"],
      itemRadio: null,

      testConductual: {
        nombresPreguntas: ["disfruta el balanceo", "mjuega de forma apropiada"],
        opc: ["acuerdo total", "acuerdo parcial", "desacuerdo total"],
        respuestas: []
      },

      name: null,
      lastName: null,
      age: null,
      school: null,
      dateBirth: new Date().toISOString().substr(0, 10),
      // Genders
      genders: ["Masculino", "Femenino"],
      selectGender: null,
      // test
      test: ["Masculino", "Femenino"],
      selectTest: null,
      // LevelInstrunctions
      levelInstruction: ["Primaria", "Bachillerato", "Universitario"],
      selectLevelInstruction: null,
      // Relacionado con el parto
      relacionadoParto: [
        "40 Semanas",
        "Menos de 37 semanas",
        "Parto normal",
        "Cesárea",
        "Inducido con pitocin"
      ],
      gestacion: null,
      parto: null,

      // Steps
      e1: 1,
      steps: 4
    };
  },
  computed: {
    formIsValid() {
      return (
        this.title !== "" &&
        this.location !== "" &&
        this.imageUrl !== "" &&
        this.description !== ""
      );
    },
    submittableDateTime() {
      const date = new Date(this.date);
      if (typeof this.time === "string") {
        let hours = this.time.match(/^(\d+)/)[1];
        const minutes = this.time.match(/:(\d+)/)[1];
        date.setHours(hours);
        date.setMinutes(minutes);
      } else {
        date.setHours(this.time.getHours());
        date.setMinutes(this.time.getMinutes());
      }
      return date;
    },
    countStep() {
      return this.e1;
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    onInput(val) {
      this.steps = parseInt(val);
    },
    nextStep(n) {
      if (n !== this.steps) {
        this.e1 = n + 1;
      }
    },
    backStep(n) {
      if (n !== 1) {
        this.e1 = n - 1;
      }
    }
  },
  watch: {
    steps(val) {
      if (this.e1 > val) {
        this.e1 = val;
      }
    }
  }
};
</script>
