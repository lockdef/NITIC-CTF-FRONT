import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.config.productionTip = false

// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_DB,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

Vue.use(VueAxios, axios)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
