<template>
  <div class="signup">
    <v-btn
      class="d-inline-block"
      color="white text--primary"
      text
      depressed
      v-if="isUser"
      v-text="displayName"
      @click="changeDisplayName()"
    ></v-btn>
    <v-btn
      class="d-inline-block"
      v-if="isUser"
      color="white text--primary"
      text
      depressed
      @click="signout()"
      >Logout</v-btn>
    <v-btn
      color="white text--primary"
      text
      depressed
      v-if="isUser == false"
      @click="googleLogin()"
      >Login</v-btn
    >
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signup',
  data () {
    return {
      errorMessage: null,
      showError: null,
      displayName: null,
      isUser: null,
      uid: null,
      changeName: null
    }
  },
  methods: {
    googleLogin () {
      const provider = new firebase.auth.GoogleAuthProvider()

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          this.axios.post('https://api.waku-waku-club.com/api/user/add',
            {
              uid: result.user.uid,
              username: result.user.displayName
            })
          this.isLogined()
          location.reload()
        })
        .catch(error => {
          console.log(error)
          this.errorMessage = error.message
          this.showError = true
        })
    },
    isLogined () {
      firebase.auth().onAuthStateChanged(
        function (user) {
          if (user) {
            this.isUser = true
            this.uid = user.uid
            this.getUsername()
          } else {
            this.isUser = false
            this.displayName = null
          }
        }.bind(this)
      )
    },
    signout () {
      firebase.auth().signOut()
      this.isLogined()
      location.reload()
    },
    changeDisplayName () {
      this.changeName = prompt('変更したいユーザー名を入力してください。', this.displayName)
      this.axios.post('https://api.waku-waku-club.com/api/user/change',
        {
          uid: this.uid,
          username: this.changeName
        })
        .then(response => {
          alert('変更完了')
          this.getUsername()
        })
        .catch(response => {
          alert('変更失敗')
        })
      location.reload()
    },
    getUsername () {
      this.axios.get('https://api.waku-waku-club.com/api/user/' + this.uid)
        .then(response => {
          this.displayName = response.data.username
        })
    }
  },
  created () {
    this.isLogined()
  }
}
</script>
