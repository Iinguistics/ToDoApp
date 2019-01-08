<template>
  <div id="app" class="container">
    <img src="./assets/logo.png" class="logo">
    <todo-list></todo-list>
    <router-view/>
  </div>
</template>

<script>
import TodoList from './components/TodoList'


export default {
  name: 'App',
  components: {
    TodoList
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
  max-width: 650px;
  margin: auto;
}
</style>
