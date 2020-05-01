<template>
  <div id="app">
    <Todos v-bind:todos="todos" v-on:delete-todo="deleteTodo" />
    <AddTodo v-on:add-todo="addTodo" />
  </div>
</template>
<script>
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

export default {
  name: "app",
  components: {
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Todo A",
          description : "project A",
          completed: false
        },
        {
          id: 2,
          title: "Todo B",
          description : "project B",
          completed: false
        },
        {
          id: 3,
          title: "Todo C",
          description : "project C",
          completed: false
        }
      ]
    };
  },
  methods: {
    addTodo(newTodoObj) {
      this.todos = [...this.todos, newTodoObj];
    },
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    }
  }
};
</script>
<style>
/* #app{
  display: flex;
  justify-content: center;
  width: 50%;
} */
</style>
