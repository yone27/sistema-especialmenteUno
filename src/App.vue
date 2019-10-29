<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-item-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group prepend-icon="mdi-account-plus">
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
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        action: "local_activity",
        title: "Attractions",
        items: [{ title: "List Item" }]
      },
      {
        action: "restaurant",
        title: "Dining",
        items: [
          { title: "Breakfast & brunch" },
          { title: "New American" },
          { title: "Sushi" }
        ]
      },
      {
        action: "school",
        title: "Education"
      }
    ],
    admins: [["Settings", "mdi-settings"]],
    cruds: [
      ["Create", "mdi-account-plus"],
      ["Read", "mdi-content-copy"],
      ["Update", "mdi-account-edit"],
      ["Delete", "mdi-delete"],
      ["Settings", "mdi-settings"]
    ],
    drawer: null,
    primaryDrawer: {
      model: null,
      type: "default (no property)",
      clipped: false,
      floating: false,
      mini: false
    }
  }),
  computed: {
    menuItems() {
      let menuItems = [
        { icon: "mdi-face", title: "Registrarse", link: "/signup" },
        { icon: "mdi-lock", title: "Iniciar sesion", link: "/" },
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
        }
      ];
      return menuItems;
    }
  },
  created() {
    this.$vuetify.theme.dark = true;
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
