import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        todos:[],
        newTodo:{}
    },
    mutations:{
        updatetodoList(state,todo){
            state.todos.push(todo);
        }
    },
    actions:{
        initApp({commit}){
            Vue.http.get("http://localhost:3000/todos")
            .then(response => {
              let data = response.body;
              for (let key in data) {
                data[key].key = key;
                commit("updatetodoList", data[key]);
              }
            })
        },
        addTodo({dispatch, commit ,state},todo){
            Vue.http.post("http://localhost:3000/todos", todo)
            .then((response) => {
              /*********** Ürün listesinin güncellenmesi *********/
              todo.key = response.body.name;
              commit("updatetodoList", todo);

            }).catch((err)=>{
                console.log(err);
            })
        },
        deleteTodo({}){},
        completeTodo({}){}
    },
    getters:{},

})