<template>
  <v-container fluid>
    <v-row v-if="error">
      <v-col cols="12">
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="5">
        <v-card>
          <v-card-title>
            <span class="headline">Registro</span>
          </v-card-title>
          <v-card-text>
            <form @submit.prevent="onSignup">
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="email"
                      id="email"
                      name="email"
                      label="Mail"
                      type="email"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="password"
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-layout row>
                    <v-flex xs12>
                      <!--<v-text-field 
                    name="confirmPassword"
                    label="Confirm password"
                    id="confirmPassword"
                    v-model="confirmPassword"
                    type="password"
                    :rules="[comparePasswords]" >
                      </v-text-field>-->
                    </v-flex>
                  </v-layout>
                  <v-col cols="12">
                    <v-btn :disabled="loading" :loading="loading" type="submit">
                      Registrarse
                      <span slot="loader" class="custom-loader">
                        <v-icon light>mdi-cached</v-icon>
                      </span>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      email: null,
      password: null,
      confirmPassword: null,
      displayName: null,
      dialog: true
    };
  },
  computed: {
    comparePasswords() {
      return this.password !== this.confirmPassword
        ? "password do not match"
        : true;
    },
    user() {
      return this.$store.getters.user;
    },
    error() {
      return this.$store.getters.error;
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    }
  },
  methods: {
    onSignup() {
      this.$store.dispatch("signUserUp", {
        email: this.email,
        password: this.password,
        password: this.password,
        displayName: this.displayName,
        photoURL: "https://img.icons8.com/clouds/2x/user.png"
      });
    },
    onDismissed() {
      this.$store.dispatch("clearError");
    }
  }
};
</script>

<style>
</style>
