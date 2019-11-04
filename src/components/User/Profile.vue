<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="8">
        <v-card>
          <v-card-title>
            <span class="headline">Perfil de usuario</span>
          </v-card-title>
          <v-card-text>
              <v-container>
                <v-row>
                  <!-- <v-col cols="2">
                    <v-card>
                      <v-row align="end" class="fill-height">
                        <v-col align-self="start" class="pa-0" cols="12">
                          <v-avatar class="profile" color="grey" size="164" tile>
                            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                          </v-avatar>
                        </v-col>
                        <v-col class="py-0">
                          <v-list-item color="rgba(0, 0, 0, .4)" dark>
                            <v-list-item-content>
                              <v-list-item-title class="title">Marcus Obrien</v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-col> -->
                  <v-col cols="10">
                    <v-row>
                      <!-- ci -->
                      <v-col cols="6">
                        <v-text-field v-model="user.ci" label="Cedula de identidad" disabled required></v-text-field>
                      </v-col>
                      <!-- /ci -->
                      <!-- address -->
                      <v-col cols="6">
                        <v-text-field v-model="user.address" label="Dirrección de habitación" disabled required></v-text-field>
                      </v-col>
                      <!-- /address -->
                      <!-- address work -->
                      <v-col cols="12">
                        <v-text-field v-model="user.addressWork" label="Dirrección de laboral" disabled></v-text-field>
                      </v-col>
                      <!-- /address work -->
                    </v-row>
                  </v-col>

                  <!-- phone1 -->
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field v-model="user.phone1" label="Telefono principal" disabled required></v-text-field>
                  </v-col>
                  <!-- /phone1 -->
                  <!-- phone2 -->
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field v-model="user.phone2" label="Telefono secundario" disabled></v-text-field>
                  </v-col>
                  <!-- /phone2 -->
                  <!-- refer -->
                  <v-col cols="12" sm="12">
                    <v-text-field v-model="user.refer" label="Referido por" disabled></v-text-field>
                  </v-col>
                  <!-- /refer -->
                </v-row>
              </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from 'firebase/app';

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
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  }
};
</script>

<style>
</style>
