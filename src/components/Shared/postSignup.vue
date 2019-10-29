<template>
  <v-container>
    <!-- Aqui empieza la segunda parte del registro -->
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="800px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Completar registro</span>
          </v-card-title>
          <v-card-text>
            <small>*Por favor ingrese los siguientes datos para culminar el registro</small>
            <v-container>
              <v-row>
                <!-- name -->
                <v-col cols="6" sm="12" md="6">
                  <v-text-field
                    v-model="name"
                    label="Nombres"
                    required
                    :rules="[v => !!v || 'Campo requerido']"
                  ></v-text-field>
                </v-col>
                <!-- /name -->
                <!-- last name -->
                <v-col cols="6" sm="12" md="6">
                  <v-text-field
                    v-model="lastName"
                    label="Apellidos"
                    required
                    :rules="[v => !!v || 'Campo requerido']"
                  ></v-text-field>
                </v-col>
                <!-- /last name -->
                <!-- ci -->
                <v-col cols="4" sm="12" md="4">
                  <v-text-field
                    v-model="ci"
                    label="Cedula de identidad"
                    required
                    type="number"
                    :rules="[v => !!v || 'Campo requerido']"
                  ></v-text-field>
                </v-col>
                <!-- /ci -->
                <!-- address -->
                <v-col cols="4" sm="12" md="4">
                  <v-text-field
                    v-model="address"
                    label="Dirrección de habitación"
                    required
                    :rules="[v => !!v || 'Campo requerido']"
                  ></v-text-field>
                </v-col>
                <!-- /address -->
                 <!-- address work -->
                <v-col cols="4" sm="12" md="4">
                  <v-text-field
                    v-model="addressWork"
                    label="Dirrección de laboral"
                  ></v-text-field>
                </v-col>
                <!-- /address work -->
                 <!-- phone1 -->
                <v-col cols="12" sm="12" md="6">
                  <v-text-field
                    v-model="phone1"
                    label="Telefono principal"
                    required
                    type="number"
                    :rules="[v => !!v || 'Campo requerido']"
                  ></v-text-field>
                </v-col>
                <!-- /phone1 -->
                <!-- phone2 -->
                <v-col cols="12" sm="12" md="6">
                  <v-text-field
                    v-model="phone2"
                    label="Telefono secundario"
                    type="number"
                  ></v-text-field>
                </v-col>
                <!-- /phone2 -->
                <!-- refer -->
                <v-col cols="12" sm="12">
                  <v-text-field
                    v-model="refer"
                    label="Quien los refirio"
                    required
                    :rules="[v => !!v || 'Campo requerido']"
                  ></v-text-field>
                </v-col>
                <!-- /refer -->
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="primary" @click="dialog = false">Completar registro</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "postSignup",
  data() {
    return {
      dialog: true
    };
  }
};
</script>

<style>
</style>
