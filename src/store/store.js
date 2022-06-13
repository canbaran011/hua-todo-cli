import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
let headers = {
    'Content-Type': 'application/json;charset=utf-8'
}

export default new Vuex.Store({
    state: {
        todos: [
            {
                "id": 1,
                "done": true,
                "name": "do your best"
            },
            {
                "id": 2,
                "done": false,
                "name": "on your job"
            },
            {
                "id": 3,
                "done": false,
                "name": "some your job"
            },
            {
                "id": 4,
                "done": false,
                "name": "other your job"
            },
            {
                "id": 5,
                "done": false,
                "name": "base your job"
            }
        ],
        newTodo: ''
    },
    mutations: {
        addTodoList(state, todo) {
            state.todos.push(todo);
        },
        deleteTodo(state, todo) {
            state.todos.filter()
        }
        // ,
        // completeTodo(state, todo) {

        // }

    },
    actions: {

        initApp({ commit }) {
            Vue.http.get("http://localhost:3000/todos")
                .then(response => {
                    let data = response.body;
                    for (let key in data) {
                        data[key].key = key;
                        commit("addTodoList", data[key]);
                    }
                })
        },
        addTodo({ dispatch, commit, state }, todo) {
            Vue.http.post("http://localhost:3000/todos", todo,{headers})
                .then((response) => {
                    /*********** Ürün listesinin güncellenmesi *********/
                    todo.key = response.body.name;
                    commit("addTodoList", todo);

                }).catch((err) => {
                    console.log(err);
                })
        },
        // deleteTodo({}){},
        completeTodo({ dispatch, commit, state }, todo) {

            Vue.http.put("http://localhost:3000/todos/" + todo.id, todo,{headers})
                .then((response) => {
                    /*********** Ürün listesinin güncellenmesi *********/
                    todo.key = response.body.name;
                    commit("completeTodo", todo);

                }).catch((err) => {
                    console.log(err);
                })
        }
    },
    getters: {},

});