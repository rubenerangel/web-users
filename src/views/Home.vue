<template>
  <div class="home text-center">
    <h1>Welcome to Web Users Admin</h1>
    <router-link to="/login" class="button">SignIn</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
  .home {
    height: 100vh;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;

    .button {
      margin-top: 1rem;
    }
  }

  @media (max-width: 575px) {
    .home {
      height: 50vh;
      justify-content: center;
      align-items: center;
      display: flex;

      h1 {
        width: 80%;
      }
    }
  }
</style>
