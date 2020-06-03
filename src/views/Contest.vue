<template>
  <div class="contest">
    <v-container>
      <h1 class="mt-4 display-3">Web</h1>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-dialog v-model="dialog">
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" color="light-green darken-3" width="100%">
                <span class="white--text headline">Nihao</span>
              </v-btn>
            </template>
            <v-card>
              <v-list-item-content class="mx-6">
                <v-list-item-title>
                  <h1 class="mt-2 mb-4">NIHAO</h1>
                </v-list-item-title>
                <p>あああああああああああああああああああああああ</p>
                <v-card-actions>
                  <v-btn @click="dialog = false">Close</v-btn>
                </v-card-actions>
              </v-list-item-content>
            </v-card>
          </v-dialog>
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
      dialog: false,
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
