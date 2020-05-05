<template>
  <div class="todo">
    <!--Create Todo-->
    <div class="card mb-3" style="width: 18rem;" v-show="!isEditing">
        <div class="card-body p-0">
            <h5 class="card-title mt-2 text-center">{{ todo.title }}</h5>
            <p class="card-text text-center">{{ todo.description }}</p>
            <p class="text-right pr-4">
            <span class="mr-3" v-on:click="deleteTodo(todo)">
                <i class="fa fa-trash fa-lg"></i>
            </span>
            <span v-on:click="showForm()">
                <i class="fa fa-edit fa-lg"></i>
            </span>
            </p>
            <button class="btn btn-outline-danger btn-block" v-show="!todo.completed" v-on:click="completeTodo(todo)">pending</Button>
            <button class="btn btn-outline-success btn-block" v-show="todo.completed" disabled>completed</Button>
        </div>
    </div>
    <!--Edit Todo-->
    <div class="card mb-3" style="width: 18rem;" v-show="isEditing">
      <div class="card-body">
        <div class="form-group text-center">
            <label>Title</label>
            <input type="text" class="form-control" v-model="todo.title" placeholder="title">
        </div>
        <div class="form-group text-center">
            <label>Description</label>
            <input type="text" class="form-control" v-model="todo.description" placeholder="description">
            <input type="hidden" v-model="todo.completed">
            <input type="hidden" v-model="todo.id">
        </div>
        <div class="btn-group btn-block" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary" v-on:click="updateTodo">Save</button>
            <button type="button" class="btn btn-danger" v-on:click="hideForm">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Todo",
  props: ["todo"],
  data() {
    return {
      isEditing: false
    };
  },
  methods: {
    showForm() {
        this.isEditing = true;
    },
    hideForm() {
      this.isEditing = false;
    },
    deleteTodo(todo){
      this.$store.dispatch('todoStore/deleteTodo', todo);
    },
    completeTodo(todo){
      this.$store.dispatch('todoStore/completeTodo', todo);
    },
    updateTodo(){
      const editTodo = {
        id : this.todo.id,
        title : this.todo.title,
        description : this.todo.description,
        completed : this.todo.completed
      }
      this.$store.dispatch('todoStore/updateTodo', editTodo);

      this.isEditing = false;
    }
  }
};
</script>
<style scoped>
.todo{
    display: flex;
    justify-content: center;
}
.card{
    background-color: #e7fff4;
}
button[disabled] {
  cursor: not-allowed;
}
i{
  cursor: grab;
}
</style>
