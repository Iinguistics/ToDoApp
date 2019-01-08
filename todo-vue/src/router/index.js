import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TodoList from '@/components/TodoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todo-list',
      component: TodoList,
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
