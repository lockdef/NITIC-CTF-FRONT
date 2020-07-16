<template>
  <div id="home">
    <div class="py-12 px-auto blue lighten-5">
      <h1 class="align-center">NITIC CTFにようこそ</h1>
      <p class="align-center">不定期にCTFコンテストを開催します</p>
      <h3 class="align-center">！注意！</h3>
      <p class="align-center">
        このコンテストは試験的かつほとんどの問題が初心者向けです。<br />
        サイト自体のバグ、問題の欠陥などがあった場合、discordの質問チャンネルにお願いします！<br />
        問題が気に食わない、解けない、自分が一位ではない、などについてはTwitterで書いてください！<br />
        このコンテストはNITICとついていますが、茨城高専の公式のコンテストではなく、学生有志でやっているものです。<br />
      </p>
    </div>
    <div class="mt-4">
      <h1 class="align-center">コンテスト一覧</h1>
      <v-list v-for="(contest_name, index) in contests" :key="index">
        <v-hover v-slot:default="{ hover }">
          <router-link :to="`/contest/${contest_name}`">
            <v-card
              :elevation="hover ? 12 : 2"
              class="mx-auto pa-4 mt-2 light-green darken-3"
              max-width="400"
              outlined
            >
              <v-list-item-title class="align-center white--text"
                >{{ contest_name }}</v-list-item-title
              >
            </v-card>
          </router-link>
        </v-hover>
      </v-list>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase'

export default {
  name: 'Home',
  data () {
    return {
      contests: []
    }
  },
  mounted () {
    this.axios.get('https://api.waku-waku-club.com/api/contests')
      .then(response => {
        this.contests = response.data
      })
  },
  created () {
    firebase
      .firestore()
      .collection('contests')
      .get()
      .then(query => {
        const buff = []
        query.forEach(doc => {
          buff.push({ title: doc.data().title })
        })
        this.contests = buff
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
