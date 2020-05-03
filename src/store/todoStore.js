export const todoStore = {
    namespaced: true,
    state: {
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
    },
    mutations: {
        addTodo(state, newTodoObj) {
            state.todos = [...state.todos, newTodoObj];
        },
        deleteTodo(state, todo){
            const todoIndex = state.todos.indexOf(todo);
            state.todos.splice(todoIndex, 1);
        },
        completeTodo(state, todo){
            const todoIndex = state.todos.indexOf(todo);
            state.todos[todoIndex].completed = true;
        }
    },
    actions: {
        addTodo({ commit }, newTodoObj) {
            commit('addTodo', newTodoObj)
        },
        deleteTodo({ commit }, todo) {
            commit('deleteTodo', todo)
        },
        completeTodo({ commit }, todo) {
            commit('completeTodo', todo)
        }
    },
    modules: {},
    getters: {
        showTodo: state => {
            return state.todos
        },
    }
};