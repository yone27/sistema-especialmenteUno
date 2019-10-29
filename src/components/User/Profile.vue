<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="10">
        <v-card>
          <v-card-title>
            <span class="headline">Perfil de usuario</span>
          </v-card-title>
          <v-card-text>
            <form>
              <v-container>
                <v-row>
                  <!-- name -->
                  <v-col cols="6" sm="12" md="6">
                    <v-text-field v-model="name" label="Nombres" disabled></v-text-field>
                  </v-col>
                  <!-- /name -->
                  <!-- last name -->
                  <v-col cols="6" sm="12" md="6">
                    <v-text-field v-model="lastName" label="Apellidos" disabled></v-text-field>
                  </v-col>
                  <!-- /last name -->
                  <!-- ci -->
                  <v-col cols="4" sm="12" md="4">
                    <v-text-field v-model="ci" label="Cedula de identidad" disabled></v-text-field>
                  </v-col>
                  <!-- /ci -->
                  <!-- address -->
                  <v-col cols="4" sm="12" md="4">
                    <v-text-field v-model="address" label="Dirrección de habitación" disabled></v-text-field>
                  </v-col>
                  <!-- /address -->
                  <!-- address work -->
                  <v-col cols="4" sm="12" md="4">
                    <v-text-field v-model="addressWork" label="Dirrección de laboral" disabled></v-text-field>
                  </v-col>
                  <!-- /address work -->
                  <!-- phone1 -->
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field v-model="phone1" label="Telefono principal" disabled></v-text-field>
                  </v-col>
                  <!-- /phone1 -->
                  <!-- phone2 -->
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field v-model="phone2" label="Telefono secundario" disabled></v-text-field>
                  </v-col>
                  <!-- /phone2 -->
                  <!-- refer -->
                  <v-col cols="12" sm="12">
                    <v-text-field v-model="refer" label="Quien los refirio" disabled></v-text-field>
                  </v-col>
                  <!-- /refer -->
                </v-row>
              </v-container>
            </form>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="primary" @click="dialog = false">Completar registro</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      name: null,
      lastName: null,
      address: null,
      addressWork: null,
      ci: null,
      phone1: null,
      phone2: null,
      refer: null
    };
  }
};
</script>

<style>
</style>
