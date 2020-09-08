<template>
  <transition name="fade">
    <div v-if="showTodosModal" class="p-modal">
      <div class="p-container">
        <a @click="closePostModal()" class="close">close</a>
        <div class="post">
          <h5>{{ user.name }}</h5>
        </div>
        <div>
          <input type="text" name="" id="" v-model.trim="newTodo.title" @keypress="clearError">
          <button class="button" @click="addTodo">Add New Todo</button>
        </div>
        <span v-if="error" class="error">Please add <b>TODO</b></span>
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
      },
      error: false
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
      if(this.newTodo.title == null) {
        this.error = true
        return false
      }

      this.$store.dispatch('addTodo', this.newTodo)
      this.newTodo = {}
    },
    clearError() {
      this.error = false
    }
  },
};
</script>

<style lang="scss" scoped>
</style>