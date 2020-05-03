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
            // state.todos.push({
            //     title: newTodoobj.title,
            //     description: newTodoobj.description,
            //     completed: newTodoobj.completed
            // });
            state.todos = [...this.todos, newTodoObj];
        }
    },
    actions: {
        addTodo({ commit }, newTodoObj) {
            commit('addTodo', newTodoObj)
        }
    },
    modules: {},
    getters: {
        showTodo: state => {
            return state.todos
        },
    }
};