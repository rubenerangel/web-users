<template>
  <header>
    <section>
      <div class="col1">
        <router-link to="/">
          <h3>Web Users</h3>
        </router-link>
        <ul class="inline">
          <li>
            <router-link to="/login">SignIn</router-link>
          </li>
        </ul>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  name: 'TheHeading',
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>