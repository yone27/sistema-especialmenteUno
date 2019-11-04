<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="8">
        <v-card class="mx-auto">
          <v-list-item>
            <!-- <v-list-item-avatar color="grey"></v-list-item-avatar> -->
            <v-list-item-content>
              <v-list-item-title class="headline">Nombre del paciente</v-list-item-title>
              <v-list-item-subtitle>10-10-19</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <!-- <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"></v-img> -->

          <v-card-text>
            <v-row>
              <v-col cols="4">
                <p>Nombres</p>
              </v-col>
              <v-col cols="4">
                <p>Apellidos</p>
              </v-col>
              <v-col cols="4">
                <p>Genero</p>
              </v-col>
              <v-col cols="4">
                <p>Edad</p>
              </v-col>
              <v-col cols="4">
                <p>Institución</p>
              </v-col>
              <v-col cols="4">
                <p>Nivel de instruccion en la que requiere tutor</p>
              </v-col>
              <v-col cols="12">
                <v-simple-table dark>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">Name</th>
                        <th class="text-left">Calories</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in desserts" :key="item.name">
                        <td>{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-btn color="primary" @click="generatePDF()">
              Imprimir planilla
              <v-icon dark>mdi-arrow-down-bold</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import jsPDF from "jspdf";
// eslint-disable-next-line
import autoTable from "jspdf-autotable";
export default {
  name: "Profile",
  data() {
    return {
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159
        },
        {
          name: "Ice cream sandwich",
          calories: 237
        },
        {
          name: "Eclair",
          calories: 262
        },
      ],
      todos: [
        { title: "Title 1", description: "description 1" },
        { title: "Title 2", description: "description 2" },
        { title: "Title 3", description: "description 3" }
      ]
    };
  },
  methods: {
    generatePDF() {
      let columns = [
        { title: "name", dataKey: "name" },
        { title: "calories", dataKey: "calories" }
      ];
      let doc = new jsPDF();
      doc.text("Hello world!", 10, 10);
      doc.autoTable(columns, this.desserts);
      doc.save("export.pdf");
    }
  }
};
</script>

<style>
</style>
