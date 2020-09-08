<template>
  <div class="wrapper-dashboard">
    <div class="sidebar">
      <h2>System</h2> 
      <ul>
        <li>
          <router-link to="/dashboard"><i class="fas fa-user-friends"></i>Users</router-link>
        </li>
        <li>
          <a @click="logout()"> <i class="fas fa-sign-out-alt fa-rotate-180"></i>Logout</a>
        </li>
      </ul>
    </div>

    <div class="main-dashboard">
      <nav class="dashboard-navbar">
        <div>
          <i class="fas fa-bars"></i> Dashboard
        </div>
        <div>
          <ul>
            <li> <span><i class="fas fa-user"></i></span> </li>
            <li>{{userProfile.name}}</li>
          </ul>
        </div>
      </nav>
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
              <!-- {{users  }} -->
              <tr 
                v-for="(user, index) in users" 
                :key="index"
              >
                <td>{{ user.id }}</td>
                <td>{{ user.name | firstName }}</td>
                <td>{{ user.name | lastName }}</td>
                <td>{{ user.email | toLowerCase }}</td>
                <td class="justify">{{ user.address | formatAddress }}</td>
                <td>{{ user.company.name }}</td>
                <td class="text-center"><a title="view todos" @click="viewTodos(user)"><i class="fas fa-search"></i></a></td>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- TODOS Modal -->
    <transition name="fade">
      <div v-if="showTodosModal" class="p-modal">
        <div class="p-container">
          <a @click="closePostModal()" class="close">close</a>
          <div class="post">
            <h5>{{ user.name  }}</h5>
          </div>
          <div v-show="todos.length" class="comments">
            <div v-for="todo in todos" :key="todo.id" class="comment">
              <p>{{ todo.title }}</p>
              
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Dashboard',
  mounted() {
    this.$store.dispatch('getUsersPlaceHolder')
  },
  data() {
    return {
      showTodosModal: false,
      user: {}
    }
  },
  created () {
    this.getAllUsers()
  },
  computed: {
    ...mapState(['users', 'todos', 'userProfile']),
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
    viewTodos(user) {
      this.user = user
      this.$store.dispatch('getUserTodo', user.id)
      this.showTodosModal = true
    },
    closePostModal() {
      // this.postComments = []; todo vaciar el arreglo del store al cerrar el modal
      this.user = {};
      this.showTodosModal = false;
    },
    getAllUsers() {
      this.$store.state.services.jsonPlace
        .getUsers()
        .then(resp => {
          console.log(resp);
        })
        .catch(error => {
          console.log(error);
        })
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
}
</script>

<style lang="scss" scoped>
  .wrapper-dashboard {
    display:flex;
    background: #F5F6FA;;

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
              color: #0054FE;
              margin-right: 1rem;
            }
          }
        }
      }
    }

    .main-dashboard {
      flex: 4;
      margin: 0.7rem 1rem;
      padding: 1rem;

      .dashboard-navbar {
        width: 90%;
        background: #fff;
        height: 1rem;
        min-height: 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 15px;

        ul {
          list-style: none;

          li {
            display: inline;
            margin: 10px
          }
        }

        span {
          height: 50px;
          width: 50px;
          padding: 10px;
          border: 0.1rem #000 solid;
          border-radius: 50%;
        }
      }

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

      .table {
        th {
          color: #9B9EAC;
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
          background-color: #F5F6FA;
        }
      }
    }
  }
</style>