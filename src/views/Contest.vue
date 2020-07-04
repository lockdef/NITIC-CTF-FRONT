<template>
  <div class="contest">
    <v-container>
      <h1 class="mt-4 display-2">Web</h1>
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
      <h1 class="mt-4 display-2">Rev</h1>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="problem in problemsList.Rev"
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
      <h1 class="mt-4 display-2">Misc</h1>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="problem in problemsList.Misc"
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
      <v-card class="mt-5">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">ランク</th>
                <th class="text-left">名前</th>
                <th class="text-left">スコア</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in ranking" :key="user.rank">
                <td>{{ user.rank }}</td>
                <td>{{ user.username }}</td>
                <td>{{ user.score }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
      <v-dialog v-model="dialog">
        <v-card v-if="dialog">
          <v-list-item-content class="mx-6">
            <v-list-item-title>
              <h1 class="mt-2 mb-4">
                {{ currentProblem.problemTitle }}
                <span
                  v-if="result != null"
                  :class="result ? 'ac-color' : 'wa-color'"
                >
                  {{ result ? "AC" : "WA" }}
                </span>
              </h1>
            </v-list-item-title>
            <div v-html="mdIt.render(currentProblem.problemText)" />
            <v-text-field v-model="flag" placeholder="flag" />
            <v-btn color="primary" @click="problemSubmit(currentProblem.id)">
              Submit
            </v-btn>
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
import markdownIt from 'markdown-it'

export default {
  name: 'Contest',
  data () {
    return {
      dialog: false,
      flag: null,
      currentProblem: null,
      problemsList: null,
      result: null,
      ranking: null
    }
  },
  computed: {
    mdIt () {
      return new markdownIt({ // eslint-disable-line new-cap
        html: true,
        linkify: true,
        breaks: true,
        typographer: true
      })
    }
  },
  mounted () {
    this.axios
      .get('http://127.0.0.1:5000/problem/list/contest_1')
      .then(response => {
        this.problemsList = response.data
      })
      .catch(response => console.log(response))
    this.axios
      .get('http://127.0.0.1:5000/standings/contest_1')
      .then(response => {
        this.ranking = response.data
      })
      .catch(response => console.log(response))
  },
  methods: {
    showModal (problem) {
      this.currentProblem = problem
      this.dialog = true
      this.result = null
      this.flag = null
    },
    problemSubmit (problemId) {
      this.axios
        .post('http://127.0.0.1:5000/problem/submit', {
          problem_id: problemId,
          flag: this.flag
        })
        .then(response => {
          this.result = response.data.AC
        })
        .catch(response => console.log())
    }
  }
}
</script>

<style scoped>
.wa-color {
  color: #fff;
  background-color: #b71c1c;
  padding: 1px 5px;
}
.ac-color {
  color: #fff;
  background-color: #00c853;
  padding: 1px 5px;
}
</style>
