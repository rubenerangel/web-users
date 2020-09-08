<template>
  <div class="login">
    <login-sign-in v-if="showLoginForm" @toggleForm="toggleForm"/>

    <login-create-account v-else @toggleForm="toggleForm"/>
    
  </div>
</template>

<script>
import LoginSignIn from '../components/LoginSignIn'
import LoginCreateAccount from '../components/LoginCreateAcount'

export default {
  name: 'Login',
  components: {
    LoginSignIn,
    LoginCreateAccount
  },
  data() {
    return {
      showLoginForm: true,
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.loginForm.email,
        password: this.loginForm.password
      })
      .then(resp => {
        console.log(resp)
      })
      .catch(error => {
        this.error = true
        this.errorMessage = error.message

        setTimeout(() => {
          this.error = false
          this.errorMessage = null
        }, 2000)
      })
    },
    signup() {
      this.$store.dispatch('signup', {
        email: this.signupForm.email,
        password: this.signupForm.password,
        name: this.signupForm.name,
        title: this.signupForm.title
      })
    },  
    toggleForm() {
      this.showLoginForm = ! this.showLoginForm
    },
  }
  
}
</script>

<style lang="scss" scoped>
  
</style>