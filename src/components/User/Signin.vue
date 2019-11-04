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
            <span class="headline">Iniciar sesión</span>
          </v-card-title>
          <v-card-text>
            <form @submit.prevent="onSignin">
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
                      name="password"
                      label="Password"
                      id="password"
                      type="password"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-btn :disabled="loading" :loading="loading" type="submit">
                      Entrar
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
  name: "Signin",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
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
    onSignin() {
      this.$store.dispatch("signUserIn", {
        email: this.email,
        password: this.password
      });
    },
    onDismissed() {
      this.$store.dispatch("clearError");
    }
  }
};
</script>
