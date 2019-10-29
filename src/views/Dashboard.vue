<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="5">
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Dashboard"
};
</script>
