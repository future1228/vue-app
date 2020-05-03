<template>
  <div>
    <Todo
      v-bind:key="index" 
      v-for="(todo, index) in todos"
      v-bind:todo="todo"
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
  props: ["todos"]
};
</script>
<style scoped>
</style>
