<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="11">
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
                          >Paso {{ n }}</v-stepper-step>

                          <v-divider v-if="n !== steps" :key="n"></v-divider>
                        </template>
                      </v-stepper-header>
                      <v-stepper-items>
                        <v-stepper-content v-for="n in steps" :key="`${n}-content`" :step="n">
                          <v-row>
                            <template v-if="n == 1">
                              <!-- name -->
                              <v-col cols="6">
                                <v-text-field
                                  v-model="info.name"
                                  label="Nombres"
                                  required
                                  :rules="[v => !!v || 'Campo requerido']"
                                ></v-text-field>
                              </v-col>
                              <!-- /name -->
                              <!-- last name -->
                              <v-col cols="6">
                                <v-text-field
                                  v-model="info.lastName"
                                  label="Apellidos"
                                  required
                                  :rules="[v => !!v || 'Campo requerido']"
                                ></v-text-field>
                              </v-col>
                              <!-- /last name -->
                              <v-col cols="12">
                                <v-row align="center" justify="center">
                                  <!-- birth date -->
                                  <v-col cols="12" md="4" sm="12">
                                    <div class="subheading">Fecha de nacimiento</div>
                                    <v-date-picker v-model="info.dateBirth" :show-current="false"></v-date-picker>
                                  </v-col>
                                  <!-- /birth date -->
                                  <v-col cols="12" md="6" sm="12">
                                    <!-- gender -->
                                    <v-select
                                      v-model="info.selectGender"
                                      :items="info.genders"
                                      :rules="[v => !!v || 'Campo requerido']"
                                      label="Elige el genero"
                                      required
                                    ></v-select>
                                    <!-- /gender -->
                                    <!-- age -->
                                    <v-text-field
                                      v-model="info.age"
                                      label="Edad"
                                      required
                                      type="number"
                                      :rules="[v => !!v || 'Campo requerido']"
                                    ></v-text-field>
                                    <!-- /age -->

                                    <!-- school -->
                                    <v-text-field
                                      v-model="info.school"
                                      label="Institución en la cual estudia"
                                    ></v-text-field>
                                    <!-- /school -->

                                    <!-- nivel de instruccion en la que require tutor -->
                                    <v-combobox
                                      v-model="info.selectLevelInstruction"
                                      :items="info.levelInstruction"
                                      label="Nivel de instruccion en la que requiere tutor"
                                      chips
                                      :rules="[v => !!v || 'Campo requerido']"
                                    ></v-combobox>
                                    <!-- /nivel de instruccion en la que require tutor -->
                                  </v-col>
                                </v-row>
                              </v-col>
                              <!-- Relacionado con el parto -->
                              <v-col cols="12">
                                <v-toolbar dark>
                                  <v-toolbar-title>Relacionado con el parto</v-toolbar-title>
                                </v-toolbar>
                                <v-simple-table dense>
                                  <thead>
                                    <tr>
                                      <th></th>
                                      <th
                                        class="text-left headline"
                                        v-for="item in relacionadoParto.row"
                                        :key="item"
                                      >{{ item }}</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr v-for="question in relacionadoParto.col" :key="question">
                                      <td>{{question}}</td>
                                      <td v-for="item in relacionadoParto.row" :key="item">
                                        <v-checkbox
                                          @change="getCuestParto(question,item)"
                                          :value="item"
                                        ></v-checkbox>
                                      </td>
                                    </tr>
                                  </tbody>
                                </v-simple-table>
                              </v-col>
                              <!-- /Relacionado con el parto -->
                              <!-- mother age -->
                              <v-col cols="6">
                                <v-text-field
                                  v-model="mother.motherAge"
                                  label="Edad de la madre"
                                  required
                                  type="number"
                                  :rules="[v => !!v || 'Campo requerido']"
                                ></v-text-field>
                              </v-col>
                              <!-- /mother age -->
                              <!-- mother's disease -->
                              <v-col cols="6">
                                <v-text-field
                                  v-model="mother.motherDisease"
                                  label="Enfermedad de la madre durante el embarazo"
                                ></v-text-field>
                              </v-col>
                              <!-- /mother's disease -->
                              <!-- Riesgo durante el embarazo-->
                              <v-col cols="6">
                                <v-text-field
                                  v-model="mother.riskPregnancy"
                                  label="Riesgo durante el embarazo"
                                ></v-text-field>
                              </v-col>
                              <!-- /Riesgo durante el embarazo-->
                              <!-- Accidentes o traumas durante el embarazo-->
                              <v-col cols="6">
                                <v-text-field
                                  v-model="mother.accidentPregnancy"
                                  label="Accidentes o traumas durante el embarazo"
                                ></v-text-field>
                              </v-col>
                              <!-- /Accidentes o traumas durante el embarazo-->
                              <!-- llanto prolongado-->
                              <v-col cols="12">
                                <v-text-field v-model="mother.cryingPregnancy" label="Llanto prolongado"></v-text-field>
                              </v-col>
                              <!-- /llanto prolongado-->
                              <!-- Después del nacimiento, como fue el sueno -->
                              <v-col cols="12">
                                <v-textarea
                                  v-model="mother.dreamPregnancy"
                                  filled
                                  label="Después del nacimiento, como fue el sueno??pesadillas??"
                                  rows="4"
                                  solo
                                ></v-textarea>
                              </v-col>
                              <!-- /Después del nacimiento, como fue el sueno -->
                            </template>
                            <template v-else-if="n == 2">
                              <!-- Cuestionario referente al paciente-->
                              <v-col cols="12">
                                <v-toolbar dark>
                                  <v-toolbar-title>Cuestionario referente al paciente</v-toolbar-title>
                                </v-toolbar>
                                <v-simple-table dense>
                                  <thead>
                                    <tr>
                                      <th></th>
                                      <th
                                        class="text-left headline"
                                        v-for="item in relacionadoPaciente.row"
                                        :key="item"
                                      >{{ item }}</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr v-for="question in relacionadoPaciente.col" :key="question">
                                      <td>{{question}}</td>
                                      <td v-for="item in relacionadoPaciente.row" :key="item">
                                        <v-checkbox
                                          @change="getCuestPaciente(question,item)"
                                          :value="item"
                                        ></v-checkbox>
                                      </td>
                                    </tr>
                                  </tbody>
                                </v-simple-table>
                              </v-col>
                              <!-- /Cuestionario referente al paciente-->
                              <!-- Edad temprana -->
                              <v-col cols="12">
                                <v-toolbar dark>
                                  <v-toolbar-title>Edad temprana</v-toolbar-title>
                                </v-toolbar>
                                <v-simple-table dense>
                                  <thead>
                                    <tr>
                                      <th></th>
                                      <th
                                        class="text-left headline"
                                        v-for="item in earlyAge.row"
                                        :key="item"
                                      >{{ item }}</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr v-for="question in earlyAge.col" :key="question">
                                      <td>{{question}}</td>
                                      <td v-for="item in earlyAge.row" :key="item">
                                        <v-checkbox
                                          @change="getCuestEdad(question,item)"
                                          :value="item"
                                        ></v-checkbox>
                                      </td>
                                    </tr>
                                  </tbody>
                                </v-simple-table>
                              </v-col>
                              <!-- /Edad temprana -->
                              <!-- Habitos -->
                              <v-col cols="12">
                                <v-toolbar dark>
                                  <v-toolbar-title>Habitos</v-toolbar-title>
                                </v-toolbar>
                                <v-simple-table dense>
                                  <thead>
                                    <tr>
                                      <th></th>
                                      <th
                                        class="text-left headline"
                                        v-for="item in habitos.row"
                                        :key="item"
                                      >{{ item }}</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr v-for="question in habitos.col" :key="question">
                                      <td>{{question}}</td>
                                      <td v-for="item in habitos.row" :key="item">
                                        <v-checkbox
                                          @change="getCuestHabito(question,item)"
                                          :value="item"
                                        ></v-checkbox>
                                      </td>
                                    </tr>
                                  </tbody>
                                </v-simple-table>
                              </v-col>
                              <!-- /Habitos -->
                            </template>
                            <template v-else-if="n == 3">
                              <!-- Alimentación -->
                              <v-col cols="12">
                                <v-toolbar dark>
                                  <v-toolbar-title>Alimentación</v-toolbar-title>
                                </v-toolbar>
                                <v-simple-table dense>
                                  <thead>
                                    <tr>
                                      <th></th>
                                      <th
                                        class="text-left headline"
                                        v-for="item in alimentacion.row"
                                        :key="item"
                                      >{{ item }}</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr v-for="question in alimentacion.col" :key="question">
                                      <td>{{question}}</td>
                                      <td v-for="item in alimentacion.row" :key="item">
                                        <v-checkbox
                                          @change="getCuestAlimentacion(question,item)"
                                          :value="item"
                                        ></v-checkbox>
                                      </td>
                                    </tr>
                                  </tbody>
                                </v-simple-table>
                              </v-col>
                              <!-- /Alimentación -->
                              <!-- Algún aspecto que agregar en relación a alimentación -->
                              <v-col cols="6">
                                <v-text-field
                                  v-model="mother.aspectRelaciAlimen"
                                  label="Algún aspecto que agregar en relación a alimentación"
                                ></v-text-field>
                              </v-col>
                              <!-- /Algún aspecto que agregar en relación a alimentación -->
                              <!-- Alguna condicion medica en la familiar -->
                              <v-col cols="6">
                                <v-text-field
                                  v-model="mother.condMedicaFamiliar"
                                  label="Alguna condicion medica familia"
                                ></v-text-field>
                              </v-col>
                              <!-- /Alguna condicion medica en la familiar -->
                              <!-- Gastrointestinal -->
                              <v-col cols="12">
                                <v-toolbar dark>
                                  <v-toolbar-title>Gastrointestinal</v-toolbar-title>
                                </v-toolbar>
                                <v-simple-table dense>
                                  <thead>
                                    <tr>
                                      <th></th>
                                      <th
                                        class="text-left headline"
                                        v-for="item in gastrointestinal.row"
                                        :key="item"
                                      >{{ item }}</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr v-for="question in gastrointestinal.col" :key="question">
                                      <td>{{question}}</td>
                                      <td v-for="item in gastrointestinal.row" :key="item">
                                        <v-checkbox
                                          @change="getCuestGastrointestinal(question,item)"
                                          :value="item"
                                        ></v-checkbox>
                                      </td>
                                    </tr>
                                  </tbody>
                                </v-simple-table>
                              </v-col>
                              <!-- /Gastrointestinal -->
                            </template>
                            <template v-else>
                              <!-- Test conductual -->
                              <v-col cols="12">
                                <v-toolbar dark>
                                  <v-toolbar-title>Test conductual</v-toolbar-title>
                                </v-toolbar>
                                <v-simple-table dense>
                                  <thead>
                                    <tr>
                                      <th></th>
                                      <th
                                        class="text-left headline"
                                        v-for="item in testConductual.row"
                                        :key="item"
                                      >{{ item }}</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr v-for="question in testConductual.col" :key="question">
                                      <td>{{question}}</td>
                                      <td v-for="item in testConductual.row" :key="item">
                                        <v-checkbox
                                          @change="getCuestConductual(question,item)"
                                          :value="item"
                                        ></v-checkbox>
                                      </td>
                                    </tr>
                                  </tbody>
                                </v-simple-table>
                              </v-col>
                              <!-- /Test conductual -->
                              <!-- Escolaridad -->
                              <v-col cols="12">
                                <v-toolbar dark>
                                  <v-toolbar-title>Escolaridad</v-toolbar-title>
                                </v-toolbar>
                                <v-simple-table dense>
                                  <thead>
                                    <tr>
                                      <th></th>
                                      <th
                                        class="text-left headline"
                                        v-for="item in escolaridad.row"
                                        :key="item"
                                      >{{ item }}</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr v-for="question in escolaridad.col" :key="question">
                                      <td>{{question}}</td>
                                      <td v-for="item in escolaridad.row" :key="item">
                                        <v-checkbox
                                          @change="getCuestEscolaridad(question,item)"
                                          :value="item"
                                        ></v-checkbox>
                                      </td>
                                    </tr>
                                  </tbody>
                                </v-simple-table>
                              </v-col>
                              <!-- /Escolaridad -->
                              <!-- comentario importante -->
                              <v-col cols="12">
                                <v-textarea
                                  filled
                                  label="Comentario importante"
                                  rows="4"
                                  v-model="importantComment"
                                  solo
                                ></v-textarea>
                              </v-col>
                              <!-- /comentario importante -->
                            </template>
                            <v-col cols="12">
                              <v-spacer></v-spacer>
                              <v-btn class="mr-4" color="primary" @click="onCreate">Registrar1</v-btn>
                              <v-btn
                                class="mr-4"
                                color="primary"
                                v-if="countStep < 4"
                                @click="nextStep(n)"
                              >Siguiente</v-btn>
                              
                              <v-btn class="mr-4" color="primary" @click="onCreate" v-else>Registrar</v-btn>
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
import { log } from "util";
export default {
  name: "CreatePatient",
  data() {
    return {
      patient: null,

      // Relacionado con el parto
      relacionadoParto: {
        row: [
          "40 Semanas",
          "Menos de 37 semanas",
          "Parto normal",
          "Cesárea",
          "Inducido con pitocin",
          "Columna 6"
        ],
        col: ["gestacion", "parto"],
        result: {}
      },

      // Relacionado con el paciente
      relacionadoPaciente: {
        row: [
          "1 a 3 meses",
          "5 a 6 meses",
          "6 a 7 meses",
          "7 a 8 meses",
          "1 año",
          "2 años",
          "3 años",
          "Despues de los 4 años",
          "Aun no controla"
        ],
        col: ["sentarse", "gatear", "caminar", "hablar", "controlEfinter"],
        result: {}
      },

      // edad temprana
      earlyAge: {
        row: [
          "0 a 3 meses",
          "3 a 6 meses",
          "6 a 9 meses",
          "12 a 18 meses",
          "24 a 28 meses",
          "28 a 36 meses"
        ],
        col: [
          "Succiona de forma natural al acercarle el pecho, biberón o chupete. Extiende la lengua más allá de los labios",
          "Sujeta el biberón con las manos; Cierra los labios para sellar la boca; Puede tomar semi-solidos de una cuchara; Mueve la lengua dentro y fuera sin problemas; Realiza movimientos verticales de masticación.",
          "Retira la comida de la cuchara con los labios; Se limpia el labio inferior con los dientes; Bebe de un vaso sin atragantarse; Mastica alimentos.",
          "Mastica alimentos sólidos; Se lleva alimentos a la boca; Bebe de una taza o vaso con ayuda; Controla el babeo.",
          "Come solo con la cuchara; Bebe de un vaso sin ayuda.",
          "Mastica con movimientos rotatorios; Bebe de una taza solo sin derramar el contenido; Come la comida solo utilizando una cuchara derramando algo.",
          "Pincha la comida con el tenedor; Termina de pelar, desenvolver o destapar alimentos",
          "Utiliza los útiles adecuadamente para comer; Ayuda en las tareas de preparación de comida y mesa."
        ],
        result: {}
      },

      // Habitos
      habitos: {
        row: ["Si lo hace", "No aun no", "Con dificultad logra hacerlo"],
        col: [
          "Vestirse",
          "lavarse las manos",
          "Banarse",
          "Ir solo al bano",
          "controlEfinter",
          "chuparse el dedo",
          "apego con algun juguete"
        ],
        result: {}
      },

      // Alimentacion
      alimentacion: {
        row: ["siempre", "nunca", "a veces"],
        col: [
          "Guarda comida en la boca",
          "Selectivo con los alimentos",
          "Come cosas del piso (borras, papel, etc)",
          "Pasión por las gaseosas",
          "Tendencia a tomar la comida o muy caliente o fría",
          "Sensible a los cambios de textura de la comida",
          "Come de todo, jamas deja de comer",
          "No se alimenta es muy selectivo con la comida"
        ],
        result: {}
      },
      // Gastrointestinal
      gastrointestinal: {
        row: ["Columna 1"],
        col: [
          "Vomitos frecuentes",
          "Es dificil que ingiera alimento",
          "Diarreas intermitentes",
          "Hiper actividad al consumir algun alimento en especifico"
        ],
        result: {}
      },

      // test conductual
      testConductual: {
        row: ["acuerdo total", "acuerdo parcial", "desacuerdo total"],
        col: [
          "Disfruta su hijo el balanceo",
          "Muestra su hijo interés en socializar con sus pares",
          "Le gusta a su hijo subirse en escaleras , muros etc",
          "Señala con el dedo indice para pedir cosas",
          "Juega de forma apropiada con sus juguetes",
          "Parece insensible a los sonidos",
          "Responde a su nombre",
          "Fija la mirada cuando se le habla",
          "Sigue instrucciones",
          "Diambúla mientras sus compañeros juegan",
          "Repite sin razón palabras , frases",
          "Le gusta hacer las cosas siempre de la misma manera",
          "Cuando trata de imaginarse algo, le resulta muy fácil hacerse una imagen en su mente",
          "Con frecuencia queda tan absorto/a en una actividad que parece no darse cuenta de las cosas que suceden a su alrededor",
          "A menudo le llaman la atención sonidos tenues que otras personas no suelen notar",
          "La gente suele decirle (o me dicen a mí) que ha hecho o dicho algo descortés, aunque mi hijo/a no sea consciente de ello",
          "Cuando lee un cuento, le resulta fácil imaginarse cómo son los personajes",
          "Le fascinan las fechas",
          "Se desenvuelve con facilidad en distintas situaciones sociales.",
          "Le cuesta hacer nuevos amigos",
          "Siempre está encontrando patrones o regularidades en las cosas",
          "La gente dice que él/ella siempre habla del mismo tema",
          "Le gusta ir al cine o al museo",
          "No le cuesta “leer entre líneas” cuando otras personas le dicen algo",
          "Le resulta fácil alternar entre distintas actividades",
          "Cuando habla por teléfono no sabe cuando es su turno para hablar",
          "Le gusta juntar información sobre categorías de cosas (autos, trenes, aviones, plantas, animales, etc)",
          "Las situaciones nuevas le generan ansiedad"
        ],
        result: {}
      },

      // Escolaridad
      escolaridad: {
        row: ["Consolidado", "En proceso", "No Consolidado", "Columna 4"],
        col: [
          "Identica la noción de cantidad",
          "Identica arriba abajo",
          "Se entiende lo que escribe",
          "Puede realizar dibujos de cuentos",
          "Permanece sentado durante la clase",
          "Atiende al llamado de atención de la docente",
          "Dene palabras familiares",
          "Identica su derecha e izquierda",
          "Trabaja en equipo, ofreciendo sus aportes",
          "Emplea con lógica presente , pasado y futuro",
          "Es capaz de redactar un párrafo corto, con perfecta lógica",
          "Mantiene conversación fluida",
          "Participa en teatro gesticulando todo su cuerpo",
          "Canta una canción completa",
          "Resuelve absurdos verbales",
          "Repite trabalenguas",
          "Dice con frecuencia malas palabras",
          "Expresa verbalmente sus miedos, ideas etc"
        ],
        result: {}
      },

      importantComment: null,

      // mother
      mother: {
        motherAge: null,
        motherDisease: null,
        riskPregnancy: null,
        accidentPregnancy: null,
        dreamPregnancy: null,
        cryingPregnancy: null,

        aspectRelaciAlimen: null,
        condMedicaFamiliar: null
      },

      // info basica del paciente
      info: {
        name: null,
        lastName: null,
        age: null,
        school: null,
        dateBirth: new Date().toISOString().substr(0, 10),
        genders: ["Masculino", "Femenino"],
        selectGender: null,
        levelInstruction: ["Primaria", "Bachillerato", "Universitario"],
        selectLevelInstruction: null
      },

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
    getCuestParto(question, item) {
      let num = 0;
      const paramItem = item;
      //validar que el item no este repetido si lo esta, borrarlo
      if (this.relacionadoParto.result[question].includes(paramItem)) {
        num = this.relacionadoParto.result[question].findIndex(
          (item, index) => {
            return item === paramItem;
          }
        );
        this.relacionadoParto.result[question].splice(num, 1);
      } else {
        this.relacionadoParto.result[question].push(paramItem);
      }
      console.log(this.relacionadoParto.result);
    },
    getCuestPaciente(question, item) {
      let num = 0;
      const paramItem = item;
      //validar que el item no este repetido si lo esta, borrarlo
      if (this.relacionadoPaciente.result[question].includes(paramItem)) {
        num = this.relacionadoPaciente.result[question].findIndex(
          (item, index) => {
            return item === paramItem;
          }
        );
        this.relacionadoPaciente.result[question].splice(num, 1);
      } else {
        this.relacionadoPaciente.result[question].push(paramItem);
      }
      console.log(this.relacionadoPaciente.result);
    },
    getCuestEdad(question, item) {
      let num = 0;
      const paramQuestion = question.slice(0, 4);
      const paramItem = item;

      //validar que el item no este repetido si lo esta, borrarlo
      if (this.earlyAge.result[paramQuestion].includes(paramItem)) {
        num = this.earlyAge.result[paramQuestion].findIndex((item, index) => {
          return item === paramItem;
        });
        this.earlyAge.result[paramQuestion].splice(num, 1);
      } else {
        this.earlyAge.result[paramQuestion].push(paramItem);
      }
      console.log(this.earlyAge.result);
    },
    getCuestHabito(question, item) {
      let num = 0;
      const paramQuestion = question.slice(0, 4);
      const paramItem = item;

      //validar que el item no este repetido si lo esta, borrarlo
      if (this.habitos.result[paramQuestion].includes(paramItem)) {
        num = this.habitos.result[paramQuestion].findIndex((item, index) => {
          return item === paramItem;
        });
        this.habitos.result[paramQuestion].splice(num, 1);
      } else {
        this.habitos.result[paramQuestion].push(paramItem);
      }
      console.log(this.habitos.result);
    },
    getCuestAlimentacion(question, item) {
      let num = 0;
      const paramQuestion = question.slice(0, 4);
      const paramItem = item;

      //validar que el item no este repetido si lo esta, borrarlo
      if (this.alimentacion.result[paramQuestion].includes(paramItem)) {
        num = this.alimentacion.result[paramQuestion].findIndex(
          (item, index) => {
            return item === paramItem;
          }
        );
        this.alimentacion.result[paramQuestion].splice(num, 1);
      } else {
        this.alimentacion.result[paramQuestion].push(paramItem);
      }
      console.log(this.alimentacion.result);
    },
    getCuestGastrointestinal(question, item) {
      let num = 0;
      const paramQuestion = question.slice(0, 4);
      const paramItem = item;

      //validar que el item no este repetido si lo esta, borrarlo
      if (this.gastrointestinal.result[paramQuestion].includes(paramItem)) {
        num = this.gastrointestinal.result[paramQuestion].findIndex(
          (item, index) => {
            return item === paramItem;
          }
        );
        this.gastrointestinal.result[paramQuestion].splice(num, 1);
      } else {
        this.gastrointestinal.result[paramQuestion].push(paramItem);
      }
      console.log(this.gastrointestinal.result);
    },
    getCuestConductual(question, item) {
      let num = 0;
      const paramQuestion = question.slice(0, 4);
      const paramItem = item;

      //validar que el item no este repetido si lo esta, borrarlo
      if (this.testConductual.result[paramQuestion].includes(paramItem)) {
        num = this.testConductual.result[paramQuestion].findIndex(
          (item, index) => {
            return item === paramItem;
          }
        );
        this.testConductual.result[paramQuestion].splice(num, 1);
      } else {
        this.testConductual.result[paramQuestion].push(paramItem);
      }
      console.log(this.testConductual.result);
    },
    getCuestEscolaridad(question, item) {
      let num = 0;
      const paramQuestion = question.slice(0, 4);
      const paramItem = item;

      console.log(paramItem);

      //validar que el item no este repetido si lo esta, borrarlo
      if (this.escolaridad.result[paramQuestion].includes(paramItem)) {
        num = this.escolaridad.result[paramQuestion].findIndex(
          (item, index) => {
            return item === paramItem;
          }
        );
        this.escolaridad.result[paramQuestion].splice(num, 1);
      } else {
        this.escolaridad.result[paramQuestion].push(paramItem);
      }
      console.log(this.escolaridad.result);
    },
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
    },
    onCreate() {
      console.log('el peo esta aqui');
      
      this.patient = {
          ...this.relacionadoParto,
          ...this.relacionadoPaciente,
          ...this.earlyAge,
          ...this.habitos,
          ...this.alimentacion,
          ...this.gastrointestinal,
          ...this.testConductual,
          ...this.escolaridad,
          ...this.importantComment,
          ...this.mother,
          ...this.info
        }
      console.log(this.patient);
    }
  },
  watch: {
    steps(val) {
      if (this.e1 > val) {
        this.e1 = val;
      }
    }
  },
  created() {
    let pitbote = "";
    // llenamos el array con keys referentes a las questions
    this.relacionadoPaciente.col.forEach(element => {
      this.relacionadoPaciente.result[element] = [];
    });
    this.relacionadoParto.col.forEach(element => {
      this.relacionadoParto.result[element] = [];
    });
    this.earlyAge.col.forEach(element => {
      pitbote = element.slice(0, 4);
      this.earlyAge.result[pitbote] = [];
    });
    this.habitos.col.forEach(element => {
      pitbote = element.slice(0, 4);
      this.habitos.result[pitbote] = [];
    });
    this.alimentacion.col.forEach(element => {
      pitbote = element.slice(0, 4);
      this.alimentacion.result[pitbote] = [];
    });
    this.gastrointestinal.col.forEach(element => {
      pitbote = element.slice(0, 4);
      this.gastrointestinal.result[pitbote] = [];
    });
    this.testConductual.col.forEach(element => {
      pitbote = element.slice(0, 4);
      this.testConductual.result[pitbote] = [];
    });
    this.escolaridad.col.forEach(element => {
      pitbote = element.slice(0, 4);
      this.escolaridad.result[pitbote] = [];
    });
  }
};
</script>
