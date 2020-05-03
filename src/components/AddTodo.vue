<template>
  <div class="pb-3">
      <div class="container">
        <div class="row addtodo">
          <button class="Btn btn-success" v-on:click="openForm" v-show="!isCreating">
              <i class="fa fa-plus"></i>
          </button>
        </div>
        <div class="row addtodo" v-show="isCreating">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <div class="form-group text-center">
                <label for="exampleInputEmail1">Title</label>
                <input type="text" class="form-control" aria-describedby="emailHelp" v-model="title" placeholder="title">
              </div>
              <div class="form-group text-center">
                <label for="exampleInputPassword1">Description</label>
                <input type="text" class="form-control" v-model="description" placeholder="description">
              </div>
              <div class="btn-group btn-block" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-success" v-on:click="addTodo">Create</button>
                <button type="button" class="btn btn-danger" v-on:click="closeForm">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import { uuid } from "vue-uuid";
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
      description: "",
      isCreating: false
    };
  },
  methods: {
    openForm() {
      this.isCreating = true;
    },
    closeForm() {
      this.isCreating = false;
    },
    addTodo(e) {
      e.preventDefault();
      const newTodoObj = {
        id: uuid.v4(),
        title: this.title,
        description : this.description,
        completed: false
      };
      // this.$emit("add-todo", newTodoObj);
      this.$store.dispatch('todoStore/addTodo', newTodoObj);
      this.title = "";
      this.description = "";
      this.isCreating = false;
    }
  }
};
</script>
<style scoped>
.addtodo{
    display: flex;
    justify-content: center;
}
</style>
