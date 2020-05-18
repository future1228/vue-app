import Axios from "axios";

export const todoStore = {
    namespaced: true,
    state: {
        todos: []
    },
    mutations: {
        addTodo(state, newTodoObj) {
            state.todos = [...state.todos, newTodoObj];
            console.log(state.todos);
        },
        deleteTodo(state, todo){
            const todoIndex = state.todos.findIndex(item=>item.id == todo.id)
            state.todos.splice(todoIndex, 1);
        },
        completeTodo(state, todo){
            const todoIndex = state.todos.findIndex(item=>item.id == todo.id)
            state.todos.splice(todoIndex, 1, {
                title : todo.title,
                description : todo.description,
                completed : todo.completed
            })
        },
        updateTodo(state, todo){
            state.todo = todo;
        },
        initTodo(state, todos){
            state.todos = todos;
        }
    },
    actions: {
        initTodo({ commit }){
            Axios.get('/todo')
            .then(response => {
                commit('initTodo', response.data)
            })
            .catch(error => {
                console.log(error);
            })
        },
        addTodo({ commit }, newTodoObj) {
            Axios.post('/todo',{
                title : newTodoObj.title,
                description : newTodoObj.description,
                completed : false
            })
            .then(response => {
                commit('addTodo', response.data)//mutations function name
            })
            .catch(error => {
                console.log(error);
            })
        },
        deleteTodo({ commit }, todo) {
            Axios.delete('/todo/'+todo.id)
            .then(response => {
                commit('deleteTodo', response.data)//mutations function name
            })
            .catch(error => {
                console.log(error);
            })
        },
        completeTodo({ commit }, todo) {
            Axios.patch('/todo/'+todo.id, {
                title : todo.title,
                description : todo.description,
                completed : true
            })
            .then(response => {
                commit('completeTodo', response.data)//mutations function name
            })
            .catch(error => {
                console.log(error);
            })
        },
        updateTodo({ commit }, todo) {
            Axios.patch('/todo/'+todo.id, {
                title : todo.title,
                description : todo.description,
                completed : todo.completed
            })
            .then(response => {
                commit('updateTodo', response.data)//mutations function name
            })
            .catch(error => {
                console.log(error);
            })
        }
    },
    modules: {},
    getters: {
        showTodo: state => {
            return state.todos
        },
    }
};