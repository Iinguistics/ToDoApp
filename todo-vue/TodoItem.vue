<template>
  <div class="todo-item">
    <div class="todo-item-left">
      <div v-if="!editing" @dblclick="editTodo" class="todo-item-label" :class="{completed : completed}">
        <h4 id="inputText">{{title}}
          <input type="checkbox" v-model="completed"> </h4>
      </div>
      <input v-else class="todoo-item-edit" type="text" v-model="title" v-focus @blur="doneEdit"
        @keyup.enter="doneEdit" @keyup.esc="cancelEdit">
    </div>
    <div class="remove-item" @click="removeTodo(index)">
      &times;
    </div>
  </div>
</template>

<script>
  export default {
    name: 'todo-item',
    props: {
        todo: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true,
        }
    },
    data(){
        return {
            'id': this.todo.id,
            'title': this.todo.title,
            'completed': this.todo.completed,
            'editing': this.todo.editing,
            'beforeEditCache': '',
        }
    },
    methods:{
        removeTodo(index){
            this.$emit('removedTodo', index)
        }
    }
  }
</script>