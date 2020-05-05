<template>
  <div id="app">
    <div class="text-center mt-5">
      <p>Completed Tasks: <span style="color:#ff0000">{{ todos.filter(todo => { return todo.completed === 1 }).length }}</span></p>
      <p>Pending Tasks: <span style="color:#0000ff">{{ todos.filter(todo => { return todo.completed === 0 }).length }}</span></p>  
    </div>
    <AddTodo />
    <Todos v-bind:todos="todos" />
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
  created(){
    this.$store.dispatch('todoStore/initTodo');
  },
  computed: {
    todos(){
      
      return this.$store.getters['todoStore/showTodo']
    }
    
  }
};
</script>
<style></style>
