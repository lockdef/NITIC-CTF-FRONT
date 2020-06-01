<template>
  <div class="signup">
    <v-btn
      class="d-inline-block"
      color="white text--primary"
      text
      depressed
      v-if="isUser"
      v-text="displayName"
    ></v-btn>
    <v-btn
      class="d-inline-block"
      v-if="isUser"
      color="white text--primary"
      text
      depressed
      @click="signout()"
    >Logout</v-btn>
    <v-btn v-else color="white text--primary" text depressed @click="googleLogin()">Login</v-btn>
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
      isUser: false
    }
  },
  methods: {
    googleLogin () {
      const provider = new firebase.auth.GoogleAuthProvider()

      firebase.auth().signInWithPopup(provider).then(result => {
        this.isLogined()
      }).catch(error => {
        console.log(error)
        this.errorMessage = error.message
        this.showError = true
      })
    },
    isLogined () {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          this.isUser = true
          this.displayName = user.displayName
        } else {
          this.isUser = false
          this.displayName = null
        }
      }.bind(this))
    },
    signout () {
      firebase.auth().signOut()
      this.isLogined()
    }
  },
  created () {
    this.isLogined()
  }
}
</script>
