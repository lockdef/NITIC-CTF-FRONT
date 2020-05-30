<template>
  <v-app>
    <v-app-bar app color="light-blue darken-1" dark>
      <v-list-item-title>
        <h3>NITIC CTF</h3>
      </v-list-item-title>
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

<style>
.align-center {
  text-align: center;
}
</style>
