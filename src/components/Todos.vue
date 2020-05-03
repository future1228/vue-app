<template>
  <div>
    <Todo
      v-bind:key="index" 
      v-for="(todo, index) in todos"
      v-bind:todo="todo"
      v-on:delete-todo="$emit('delete-todo', todo)"
      v-on:complete-todo="completeTodo"
    />
  </div>
</template>

<script>
import Todo from "./Todo";
export default {
  name: "Todos",
  components: {
    Todo
  },
  props: ["todos"],
  methods:{
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].completed = true;
    }
  }
};
</script>
<style scoped>
</style>
