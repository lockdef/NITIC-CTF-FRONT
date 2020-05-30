<template>
  <div class="contest">
    <v-container class="mx-8">
      <h1 class="mt-4 display-3">Web</h1>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-hover v-slot:default="{ hover }">
            <a class="d-block">
              <v-card
                :elevation="hover ? 12 : 2"
                color="light-green darken-3"
                class="mt-5"
                outlined
              >
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="white--text headline text-center">Nihao</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </a>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Contest',
  data () {
    return {
      all_problems: [{
        type: 'Web',
        problems: [{
          title: 'SampleTitle',
          text: 'SampleText',
          difficult: 100,
          point: 100,
          flag: 'SampleFlag'
        }]
      }]
    }
  },
  components: {
  }
}
</script>
