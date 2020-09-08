<template>
  <transition name="fade">
    <div v-if="showTodosModal" class="p-modal">
      <div class="p-container">
        <a @click="closePostModal()" class="close">close</a>
        <div class="post">
          <h5>{{ user.name }}</h5>
        </div>
        <div>
          <input type="text" name="" id="" v-model.trim="newTodo.title" >
          <button class="button" @click="addTodo">Add New Todo</button>
        </div>
        <div v-show="todos.length" class="comments">
          
          <div v-for="todo in todos" :key="todo.id" class="comment">
            <p>{{ todo.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'TableUsersModal',
  props: {
    showTodosModal: {
      type: Boolean
    },
    user: {
      type: Object
    },
    todos: {
      type: Array
    }
  },
  data() {
    return{
      newTodo : {
        title: null
      }
    }
  },
  methods: {
    closePostModal() {
      this.$emit('closePostModal')
    },
    viewTodos(user) {
      this.user = user
      this.$store.dispatch('getUserTodo', user.id)
      this.showTodosModal = true
    },
    addTodo() {
      this.$store.dispatch('addTodo', this.newTodo)
      this.newTodo = {}
    }
  },
};
</script>

<style lang="scss" scoped>
</style>