<template>
  <div id="app" class="container">   
    <img src="./assets/todoimage.jpg" class="logo">
       <Header />
       <AddTodo v-on:add-todo="addTodo" />
       <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import firebase from './firebase';


export default {
  name: 'app',
  components: {
    Header,
     Todos,
     AddTodo,
  },
  data(){
    return {
      todos: [
        {
          id: 1,
          title: "Todo One",
          completed: false
        },
        {
          id: 2,
          title: "Todo Two",
          completed: true
        },
        {
          id: 3,
          title: "Todo Three",
          completed: false
        },
      ]
    }
  },
  methods: {
    // once X is clicked removes todo from page...filter(loops through array & filters back what we want)
    deleteTodo(id){
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(newTodo){
      this.todos = [...this.todos, newTodo];
    }
  }
}
</script>

<style>

#app {
  font-family: 'Oxygen', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size :20px;
}

.container{
 /* max-width: 650px; */
  margin: auto;
}

.logo{
  max-width: 300px;
  padding-bottom: 15px;
  border-radius: 20%;
}

</style>

