<template>
  <v-container>
    <h1>問題投稿フォーム</h1>
    <h3>タイトル</h3>
    <v-text-field placeholder="Title" v-model="problemData.problemTitle" />
    <h3>問題文（Markdown記法）</h3>
    <v-textarea placeholder="ProblemText" v-model="problemData.problemText" />
    <h3>難易度</h3>
    <v-text-field placeholder="Difficulty" v-model="problemData.difficulty" />
    <h3>点数</h3>
    <v-text-field placeholder="Score" v-model="problemData.score" />
    <h3>Type</h3>
    <v-select :items="problemTypes" v-model="problemData.type" />
    <h3>Flag（ フォーマット：nitic_ctf{flag} ）</h3>
    <v-text-field placeholder="Flag" v-model="problemData.flag" />
    <v-btn color="primary" @click="submit">Submit</v-btn>
  </v-container>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      problemData: {
        contestName: this.$route.params.id,
        problemTitle: null,
        problemText: null,
        difficulty: null,
        score: null,
        type: 'Web',
        writer: null,
        flag: 'nitic_ctf{}'
      }
    }
  },
  computed: {
    problemTypes () {
      return [
        'Web',
        'Rev',
        'Misc'
      ]
    }
  },
  mounted () {
    this.isLogined()
  },
  methods: {
    submit () {
      this.axios.post('https://ctf.waku-waku-club.com/api/problem/add', this.problemData)
        .then(response => {
          alert('投稿完了しました')
          this.$router.push('/')
        })
        .catch(response => {
          console.log(response)
        })
    },
    isLogined () {
      firebase.auth().onAuthStateChanged(
        function (user) {
          if (user) {
            this.problemData.writer = user.uid
          }
        }.bind(this)
      )
    }
  }
}
</script>
