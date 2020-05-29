<template>
  <v-app>
    <v-app-bar app color="light-blue darken-1" dark>
      <v-spacer></v-spacer>
      <v-toolbar-title class="d-block ma-auto align-center center">
        <h3>NITIC CTF</h3>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <Signup></Signup>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Signup from '@/components/Signup'

export default {
  name: 'App',

  components: {
    Signup
  },

  data: () => ({
    //
  })
}
</script>
