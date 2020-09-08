<template>
  <div class="login">
    <form @submit.prevent>
      <h2>Welcome Back</h2>
      <div>
        <label for="email1">Email</label>
        <input  type="text" placeholder="you@email.com" id="email1" v-model.trim="loginForm.email"/>
      </div>
      <div>
        <label for="password1">Password</label>
        <input type="password" placeholder="******" id="password1" v-model.trim="loginForm.password"/>
      </div>
      <div v-if="error" class="error text-center">
        {{ errorMessage }}
      </div>
      <div class="text-center">
        <button @click="login()" class="button">Log In</button>
      </div>
     
      <div class="extras text-center">
        <a @click="toggleForm()">Create an Account</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginSignIn',
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      error: false,
      errorMessage: null
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
    toggleForm() {
      this.$emit('toggleForm')
    }
  }
}  
</script>

<style lang="scss" scoped>

</style>