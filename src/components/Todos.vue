<template>
  <div class="mt-5">
    <div class="text-center">
      <p>Completed Tasks: <span style="color:#ff0000">{{ todos.filter(todo => { return todo.completed === true }).length }}</span></p>
      <p>Pending Tasks: <span style="color:#0000ff">{{ todos.filter(todo => { return todo.completed === false }).length }}</span></p>
    </div>
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
