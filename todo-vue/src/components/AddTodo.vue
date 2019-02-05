<template>
    <div>
        <form>
            <input type="text"  v-model="title" placeholder="Add Todo..." @keyup.enter="addTodo">
            
            <button type="button" @click="addTodo" class="btn btn-outline-secondary">Submit</button>
        </form>
    </div>
</template>


<script>
import uuid from 'uuid';



export default {
    name: "AddTodo",
    data(){
        return{
            title: '',
        }
    },
    created(){
         
    },
    methods: {
        addTodo(e){
            // prevent event default..since its a form, you dont want the form to try & submit to a file
            e.preventDefault();
            // create new todo variable, object with original ID, user input, & completed status
          var newTodo = {
            
            title: this.title,
            completed: false
           };
           const config = {
    apiKey: "AIzaSyBBVC8W8N8tI4bBDBZzW8kpXtX8L1fFJFc",
    authDomain: "todos-ab1a0.firebaseapp.com",
    databaseURL: "https://todos-ab1a0.firebaseio.com",
    projectId: "todos-ab1a0",
    storageBucket: "todos-ab1a0.appspot.com",
    messagingSenderId: "1025789127642"
  };

  firebase.initializeApp(config)

  // const firestore = firebaseApp.firestore()
 // firestore.settings({timestampsInSnapshots: true })

 // export default firestore

  console.log(firebase);
 
  var database = firebase.database();

  var ref = database.ref('scores');

  
  ref.push(newTodo);
            
            // Send up to parent
            this.$emit('add-todo', newTodo);
            this.title = '';
         }
        },
       
    }


</script>



<style scoped>

form{
    display: flex;
}

input[type="text"]{
    flex: 10;
    padding: 5px;
}



</style>
