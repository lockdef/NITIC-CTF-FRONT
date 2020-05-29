<template>
  <div class="signup">
    <v-btn color="white text--primary" text depressed @click="googleLogin()">Login</v-btn>
    <p v-show="showError">Signup</p>
  </div>
</template>

<script>
import firebase from 'firebase'
import router from '../router'

export default {
  name: 'Signup',
  data () {
    return {
      errorMessage: null,
      showError: null
    }
  },
  methods: {
    googleLogin () {
      const provider = new firebase.auth.GoogleAuthProvider()

      firebase.auth().signInWithPopup(provider).then(result => {
        console.log('good')
        router.push('/home')
      }).catch(error => {
        console.log(error)
        this.errorMessage = error.message
        this.showError = true
      })
    }
  }
}
</script>
