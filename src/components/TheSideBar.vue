<template>
  <div class="sidebar">
    <h2>System</h2>
    <ul>
      <li>
        <router-link to="/dashboard">
          <i class="fas fa-user-friends"></i>Users
        </router-link>
      </li>
      <li>
        <a @click="logout()">
          <i class="fas fa-sign-out-alt fa-rotate-180"></i>Logout
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheSideBar",
  methods: {
    logout() {
      this.$emit('logout')
    }
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  flex: 1;
  height: 100vh;
  background: #fff;
  padding: 2rem;

  ul {
    padding: 0px;
    list-style: none;

    li {
      height: 25px;
      padding: 5px 5px;
      a {
        color: #000;
        font-weight: 500;

        svg {
          color: #0054fe;
          margin-right: 1rem;
        }
      }
    }
  }
}

@media (max-width: 575px) {
  .sidebar {
    display: none;
  }
}
</style>