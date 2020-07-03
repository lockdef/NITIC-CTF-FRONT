<template>
  <div class="contest">
    <v-container>
      <h1 class="mt-4 display-3">Web</h1>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="problem in problemsList.Web"
          :key="problem.id"
        >
          <v-btn
            @click="showModal(problem)"
            color="light-green darken-3"
            width="100%"
          >
            <span class="white--text headline">
              {{ problem.problemTitle }}
            </span>
          </v-btn>
        </v-col>
      </v-row>
      <v-dialog v-model="dialog">
        <v-card v-if="dialog">
          <v-list-item-content class="mx-6">
            <v-list-item-title>
              <h1 class="mt-2 mb-4">{{ currentProblem.problemTitle }}</h1>
            </v-list-item-title>
            <p>{{ currentProblem.problemText }}</p>
            <v-card-actions>
              <v-btn @click="dialog = false">Close</v-btn>
            </v-card-actions>
          </v-list-item-content>
        </v-card>
      </v-dialog>
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
      currentProblem: null,
      problemsList: null
    }
  },
  mounted () {
    this.axios
      .get('http://127.0.0.1:5000/problem/list/contest_1')
      .then(response => {
        this.problemsList = response.data
      })
      .catch(response => console.log(response))
  },
  methods: {
    showModal (problem) {
      this.currentProblem = problem
      this.dialog = true
    }
  }
}
</script>
