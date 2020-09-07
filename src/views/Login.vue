<template>
  <div class="login">
    <form @submit.prevent v-if="showLoginForm">
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

    <form v-else @submit.prevent>
      <h1>Get Started</h1>
      <div>
        <label for="name">Name</label>
        <input v-model.trim="signupForm.name" type="text" placeholder="Name" id="name" />
      </div>
      <div>
        <label for="title">Title</label>
        <input v-model.trim="signupForm.title" type="text" placeholder="Company" id="title" />
      </div>
      <div>
        <label for="email2">Email</label>
        <input v-model.trim="signupForm.email" type="text" placeholder="you@email.com" id="email2" />
      </div>
      <div>
        <label for="password2">Password</label>
        <input v-model.trim="signupForm.password" type="password" placeholder="min 6 characters" id="password2" />
      </div>
      <div class="text-center">
        <button @click="signup()" class="button">Sign Up</button>
      </div>
      <div class="extras text-center">
        <a @click="toggleForm()">Back to Log In</a>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        loginForm: {
          email: '',
          password: ''
        },
        signupForm: {
          name: '',
          title: '',
          email: '',
          password: ''
        },
        showLoginForm: true,
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
      signup() {
        this.$store.dispatch('signup', {
          email: this.signupForm.email,
          password: this.signupForm.password,
          name: this.signupForm.name,
          title: this.signupForm.title
        })
      },  
      toggleForm() {
        this.showLoginForm = !this.showLoginForm
      },
    }
    
  }
</script>

<style lang="scss" scoped>
  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form {
      margin-top: 3rem;
      width: 30%;
    }

    .extras {
      margin-top: 1.5rem;
    }

    .extras > a {
      font-size: 0.8rem;
    }

    @media (max-width: 575px) {
      form {
        margin-top: 3rem;
        width: 90%;
      }
    }
  }
</style>