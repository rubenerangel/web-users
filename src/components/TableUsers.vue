<template>
  <div class="table">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Addres</th>
          <th>Company</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ user.id }}</td>
          <td>{{ user.name | firstName }}</td>
          <td>{{ user.name | lastName }}</td>
          <td>{{ user.email | toLowerCase }}</td>
          <td class="justify">{{ user.address | formatAddress }}</td>
          <td>{{ user.company.name }}</td>
          <td class="text-center">
            <a title="view todos" @click="viewTodos(user)">
              <i class="fas fa-search"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>

    <table-users-modal 
      :showTodosModal="showTodosModal" 
      v-if="users"
      :todos="todos"
      :user="user"
      @closePostModal="closePostModal"
    />
  </div>
</template>

<script>
import TableUsersModal from '../components/TableUsersModal'
import { mapState } from 'vuex'

export default {
  name: "TableUsers", 
  components: {
    TableUsersModal
  },
  mounted() {
    this.$store.dispatch('getUsersPlaceHolder')
  },
  data() {
    return {
      showTodosModal: false,
      user: {}
    }
  },
  computed: {
    ...mapState(['users', 'userProfile', 'todos']),
  },
  methods: {
    viewTodos(user) {
      this.user = user
      this.$store.dispatch('getUserTodo', user.id)
      this.showTodosModal = true
    },
    closePostModal() {
      this.showTodosModal = false
    }
  },
  filters: {
    firstName(name) {
      let theName = name.split(' ')
      if (theName.length > 2) {
        return `${theName[0]} ${theName[1]}`
      }

      return theName[0]
    },
    lastName(name) {
      let theLastName = name.split(' ')
      
      return theLastName.pop()
    },
    toLowerCase(email) {
      return email.toLowerCase()
    },
    formatAddress(address) {
      return `Street: ${address.street}, Suite: ${address.suite}, City: ${address.city}, ZipCode: ${address.zipcode}`
    }
  },
};
</script>

<style lang="scss" scoped>
.table {
  th {
    color: #9b9eac;
    text-align: center;
  }

  tbody {
    .justify {
      text-align: justify;
    }
    tr {
      td {
        min-height: 50px !important;
        max-height: 50px !important;
        height: 50px;
        font-size: 0.8rem;
        padding: 0 5px;
      }
    }
  }

  tr:nth-child(even) {
    background-color: #f5f6fa;
  }
}
</style>