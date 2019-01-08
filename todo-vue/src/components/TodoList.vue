<template>
  <div id="mainWrap">
    <h1>{{msg}}</h1>
    <input type="text" class="todo-input" placeholder="What needs to get done" v-model="newTodo" @keyup.enter="addTodo">
    <div v-for='(todo,index) in todosFiltered' :key='todo.id' class="todo-item">
      <div class="todo-item-left">
        <div v-if="!todo.editing" @dblclick="editTodo(todo)" class="todo-item-label" :class="{completed : todo.completed}">
           <h4 id ="inputText">{{todo.title}}  
          <input type="checkbox" v-model="todo.completed"> </h4>
        </div>
        <input v-else class="todoo-item-edit" type="text" v-model="todo.title" v-focus @blur="doneEdit(todo)"
          @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)">
      </div>
      <div class="remove-item" @click="removeTodo(index)">
         &times; 
      </div>
    </div>
    <div class="extra-container">
      <div><label><input type="checkbox" :checked="!anyRemaining" @change="checkAllTodos">Check All</label></div>
      <div>{{ remaining }} items left</div>
    </div>
    <div class="extra-container">
      <div>
        <button :class="{active: filter == 'all'}" @click="filter = 'all'">All</button>
        <button :class="{active: filter == 'active'}" @click="filter = 'active'">Active</button>
        <button :class="{active: filter == 'completed'}" @click="filter = 'completed'">Completed</button>
      </div>

      <div>
        <button v-if="showClearCompletedButton" @click="clearCompleted">Clear Completed</button>
        
      </div>

    </div>
  </div>

</template>

<script>
  export default {
    name: 'todo-list',
    data() {
      return {
        msg: 'Todo List goes here',
        newTodo: '',
        idForTodo: 3,
        beforeEditCache: '',
        filter: 'all',
        todos: [{
            'id': 1,
            'title': 'Finish watering the cats',
            'completed': false,
            'editing': false
          },
          {
            'id': 2,
            'title': 'work out',
            'completed': false,
            'editing': false
          },
        ],
        userBlank: false
      }
    },
    directives: {
      focus: {
        // directive definition
        inserted: function (el) {
          el.focus()
        }
      }
    },
    computed: {
      remaining() {
        return this.todos.filter(todo => !todo.completed).length
      },
      anyRemaining() {
        return this.remaining != 0
      },
      todosFiltered() {
        if (this.filter == 'all') {
          return this.todos
        } else if (this.filter == 'active') {
          return this.todos.filter(todo => !todo.completed)
        } else if (this.filter == 'completed') {
          return this.todos.filter(todo => todo.completed)
        }
        return this.todos
      },
      showClearCompletedButton(){
        return this.todos.filter(todo => todo.completed).length > 0
      }
    },

    methods: {
      addTodo() {
        if (this.newTodo.trim().length == 0) {
          return
        }

        this.todos.push({
          id: this.idForTodo,
          title: this.newTodo,
          completed: false,
        })
        this.newTodo = ''
        this.idForTodo++
      },
      editTodo(todo) {
        this.beforeEditCache = todo.title
        todo.editing = true
      },
      doneEdit(todo) {
        if (todo.title.trim() == '') {
          todo.title = this.beforeEditCache
        }
        todo.editing = false
      },
      cancelEdit(todo) {
        todo.title = this.beforeEditCache
        todo.editing = false
      },

      removeTodo(index) {
        this.todos.splice(index, 1)
      },
      checkAllTodos() {
        this.todos.forEach((todo) => todo.completed = event.target.checked)

      },
      clearCompleted(){
        this.todos = this.todos.filter(todo => !todo.completed)
      },
      showClearCompleteButton(){
        this.todos = this.todos.filter(todo => !todo.completed)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 
 @import url('https://fonts.googleapis.com/css?family=Jaldi');

 #mainWrap{
    font-family: 'Jaldi', sans-serif;
 }
  
  .todo-input {
    width: 100%;
    padding: 10px 15px;
    margin-bottom: 10px;
  }

  .todo-item {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .remove-item {
    cursor: pointer;
    margin-left: 14px;

    &:hover {
      color: black;
    }
  }

  .todo-item-edit {
    margin-left: 10px;
    width: 100%;
    padding: 10px;
    border: 1px solid #00d177;
  }

  #inputText{
     text-transform: uppercase;
     padding-top: 8px;
  }

  
</style>