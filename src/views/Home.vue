<template>
  <div id="home">
    <div class="py-12 px-auto blue lighten-5">
      <h1 class="align-center">NITIC CTFにようこそ</h1>
      <p class="align-center">不定期にCTFコンテストを開催します</p>
      <h1></h1>
    </div>
    <div class="mt-4">
      <h1 class="align-center">コンテスト一覧</h1>
      <v-list v-for="contest in contests" :key="contest">
        <v-hover v-slot:default="{ hover }">
          <v-card
            :elevation="hover ? 12 : 2"
            :to="contest.url"
            class="mx-auto pa-4 mt-2 light-green darken-3"
            max-width="400"
            outlined
          >
            <v-list-item-title class="align-center white--text" v-text="contest.title"></v-list-item-title>
          </v-card>
        </v-hover>
      </v-list>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      contests: [{ title: 'NITIC CTF CONTEST 001', url: 'contest' },
        { title: 'NITIC CTF CONTEST 002', url: 'contest' }]
    }
  }
}
</script>
