<template>
  <div class="todo">
    <div class="card mb-3" style="width: 18rem;">
        <div class="card-body p-0">
            <h5 class="card-title mt-2 text-center">{{ todo.title }}</h5>
            <p class="card-text text-center">{{ todo.description }}</p>
            <p class="text-right pr-4">
            <span class="mr-3" @click="$emit('delete-todo', todo)">
                <i class="fa fa-trash fa-lg"></i>
            </span>
            <span>
                <i class="fa fa-edit fa-lg"></i>
            </span>
            </p>
            <button class="btn btn-outline-danger btn-block" v-show="!todo.completed" @click="$emit('complete-todo', todo)">pending</Button>
            <button class="btn btn-outline-success btn-block" v-show="todo.completed" disabled>completed</Button>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Todo",
  props: ["todo"]
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
  cursor: pointer;
}
</style>
