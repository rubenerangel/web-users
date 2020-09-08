<template>
  <div class="wrapper-dashboard">
    <the-side-bar @logout="logout" />

    <div class="main-dashboard">
      <the-dashboard-nav 
        :userProfile="userProfile" 
        @logout="logout"
      />

      <button class="button"><i class="fas fa-plus"></i> &nbsp; Add New User</button>

      <div class="users-table">
        <div class="header">
          <div>
            Users
          </div>
          <div>
            <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>
        <table-users></table-users>
      </div>
    </div>
    <!-- TODOS Modal -->
    
  </div>
</template>

<script>
import TheSideBar from '../components/TheSideBar'
import TheDashboardNav from '../components/TheDashboardNav'
import TableUsers from '../components/TableUsers'
import { mapState } from 'vuex'

export default {
  name: 'Dashboard',
  components: {
    TheSideBar,
    TheDashboardNav,
    TableUsers
  },
  computed: {
    ...mapState(['userProfile']),
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  } 
}
</script>

<style lang="scss" scoped>
.wrapper-dashboard {
  display:flex;
  background: #F5F6FA;;

  .main-dashboard {
    flex: 4;
    margin: 0.7rem 1rem;
    padding: 1rem;

    .button {
      margin: 1rem 0px;
    }
  }

  .users-table {
    padding: 2rem;
    background: #fff;
    width: 90%;

    .header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
}  
}

@media (max-width: 575px) {
  .wrapper-dashboard {
    flex-direction: row;

    .main-dashboard {
      flex: 1;
      margin: 0.3rem 0.5rem;
      padding: 0px;
    }

    .users-table {
      width: 95%;
      padding: 0.2rem;
    }
  }
}
</style>