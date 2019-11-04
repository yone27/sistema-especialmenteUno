<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-img
        :aspect-ratio="16/9"
        src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
        gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        v-if="userIsAuthenticated"
      >
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <div class="subheading">{{user.name}} {{user.lastName}}</div>
            <div class="body-1">{{user.email}}</div>
          </v-col>
        </v-row>
      </v-img>
      <v-list dense>
        <v-list-item v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-item-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- <v-list-group prepend-icon="mdi-account-plus">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Actions</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="(crud, i) in cruds" :key="i" @click>
            <v-list-item-title v-text="crud[0]"></v-list-item-title>
            <v-list-item-action>
              <v-icon v-text="crud[1]"></v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list-group>-->
        <v-list-item v-if="userIsAuthenticated" @click="onLogout">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>Logout</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>SISTEMA ESPECIALMENTE UNO</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container v-if="userIsAuthenticated && !user.name">
        <!-- Aqui empieza la segunda parte del registro -->
        <v-row justify="center">
          <v-dialog v-model="dialog" persistent max-width="800px">
            <v-card>
              <v-card-title>
                <span class="headline">Completar registro</span>
              </v-card-title>
              <v-card-text>
                <small>*Por favor ingrese los siguientes datos para culminar el registro</small>
                <form @submit.prevent="onSignPost">
                  <v-container>
                    <v-row>
                      <!-- name -->
                      <v-col cols="6" sm="12" md="6">
                        <v-text-field
                          v-model="postUser.name"
                          label="Nombres"
                          required
                          :rules="[v => !!v || 'Campo requerido']"
                        ></v-text-field>
                      </v-col>
                      <!-- /name -->
                      <!-- last name -->
                      <v-col cols="6" sm="12" md="6">
                        <v-text-field
                          v-model="postUser.lastName"
                          label="Apellidos"
                          required
                          :rules="[v => !!v || 'Campo requerido']"
                        ></v-text-field>
                      </v-col>
                      <!-- /last name -->
                      <!-- ci -->
                      <v-col cols="4" sm="12" md="4">
                        <v-text-field
                          v-model="postUser.ci"
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
                          v-model="postUser.address"
                          label="Dirrección de habitación"
                          required
                          :rules="[v => !!v || 'Campo requerido']"
                        ></v-text-field>
                      </v-col>
                      <!-- /address -->
                      <!-- address work -->
                      <v-col cols="4" sm="12" md="4">
                        <v-text-field v-model="postUser.addressWork" label="Dirrección de laboral"></v-text-field>
                      </v-col>
                      <!-- /address work -->
                      <!-- phone1 -->
                      <v-col cols="12" sm="12" md="6">
                        <v-text-field
                          v-model="postUser.phone1"
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
                          v-model="postUser.phone2"
                          label="Telefono secundario"
                          type="number"
                        ></v-text-field>
                      </v-col>
                      <!-- /phone2 -->
                      <!-- refer -->
                      <v-col cols="12" sm="12">
                        <v-text-field
                          v-model="postUser.refer"
                          label="Quien los refirio"
                          required
                          :rules="[v => !!v || 'Campo requerido']"
                        ></v-text-field>
                      </v-col>
                      <!-- /refer -->
                    </v-row>
                  </v-container>
                </form>
              </v-card-text>

              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="primary" @click="onSignPost">Completar registro</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </v-container>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    cruds: [
      ["Create", "mdi-account-plus"],
      ["Read", "mdi-content-copy"],
      ["Update", "mdi-account-edit"],
      ["Delete", "mdi-delete"],
      ["Settings", "mdi-settings"]
    ],
    drawer: null,
    dialog: true,
    postUser: {
      name: null,
      lastName: null,
      phone1: null,
      phone2: null,
      addressWork: null,
      ci: null,
      address: null,
      refer: null
    }
  }),
  computed: {
    menuItems() {
      let menuItems = [
        { icon: "mdi-face", title: "Registrarse", link: "/signup" },
        { icon: "mdi-lock", title: "Iniciar sesion", link: "/signin" }
      ];
      if (this.userIsAuthenticated) {
        menuItems = [
          { icon: "mdi-account", title: "Perfil", link: "/profile" },
          {
            icon: "mdi-comment-account",
            title: "Registrar pacientes",
            link: "/patient"
          },
          {
            icon: "mdi-account-multiple",
            title: "Ver pacientes",
            link: "/patients"
          },
          {
            icon: "mdi-account-multiple",
            title: "Planilla",
            link: "/planilla"
          }
        ];
      }
      return menuItems;
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },
    user() {
      return this.$store.getters.user;
    }
  },
  created() {
    this.$vuetify.theme.dark = true;
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
    onSignPost() {
      this.$store.dispatch("signUserPost", this.postUser);
    }
  }
};
</script>


<style lang="stylus">
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}

@keyframes loader {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes loader {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes loader {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes loader {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
