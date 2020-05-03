<template>
  <div id="app">
    <div class="text-center mt-5">
      <p>Completed Tasks: <span style="color:#ff0000">{{ todos.filter(todo => { return todo.completed === true }).length }}</span></p>
      <p>Pending Tasks: <span style="color:#0000ff">{{ todos.filter(todo => { return todo.completed === false }).length }}</span></p>  
    </div>
    <AddTodo />
    <Todos v-bind:todos="todos" v-on:delete-todo="deleteTodo" />
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
  //     todos: [
  //           {
  //             id: 1,
  //             title: "Todo A",
  //             description : "project A",
  //             completed: false
  //           },
  //           {
  //             id: 2,
  //             title: "Todo B",
  //             description : "project B",
  //             completed: false
  //           },
  //           {
  //             id: 3,
  //             title: "Todo C",
  //             description : "project C",
  //             completed: false
  //           }
  //       ]
    };
  },
  methods: {
    // addTodo(newTodoObj) {
    //   this.todos = [...this.todos, newTodoObj];
    // },
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    }
  },
  computed: {
    todos(){
      return this.$store.getters['todoStore/showTodo']
    }
  }
};
</script>
<style></style>
