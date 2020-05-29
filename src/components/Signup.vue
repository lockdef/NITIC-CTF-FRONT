<template>
  <div class="signup">
    <h2>Sign up</h2>
    <v-btn color="primary" @click="googleLogin()">Google Login</v-btn>
    <p v-show="showError">{{errorMessage}}</p>
  </div>
</template>

<script>
import firebase from 'firebase'
import router from '../router'

export default {
  name: 'Signup',
  data () {
    return {
      username: '',
      password: '',
      errorMessage: null,
      showError: null
    }
  },
  methods: {
    emailLogin () {
      firebase.auth().createUserWithEmailAndPassword(this.username, this.password)
        .then(user => {
          router.push('/home')
        }).catch(error => {
          this.errorMessage = error.message
          this.showError = true
        })
    },
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
