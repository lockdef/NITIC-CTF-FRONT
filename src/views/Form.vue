<template>
  <!-- <v-container>
    <form>
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        label="Title"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="Problem Sentence"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-select
        v-model="select"
        :items="items"
        :error-messages="selectErrors"
        label="Type"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>

      <v-btn class="mr-4" @click="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </v-container>-->
  <v-container>
    <h2>問題投稿ページ</h2>
    <v-form class="mx-5">
      <v-text-field v-model="title" label="Title" required></v-text-field>
      <v-textarea v-model="problemText" label="Probelem Text" auto-grow required></v-textarea>
      <v-text-field v-model="title" label="Type" :items="items" required></v-text-field>
      <v-btn @click="submit">Submit</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    Title: { required },
    problemText: { required },
    select: { required }
  },

  data: () => ({
    title: '',
    problemText: '',
    select: null,
    items: ['Web', 'Crypto', 'Pwn', 'Misc']
  }),

  computed: {
    checkboxErrors () {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('You must agree to continue!')
      return errors
    },
    selectErrors () {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('Type is required')
      return errors
    },
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.required && errors.push('Title is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.required && errors.push('Problem Sentence is required')
      return errors
    }
  },

  methods: {
    submit () {
      this.$v.$touch()
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = false
    }
  }
}
</script>
