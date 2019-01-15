<template>
    <div>
        <form>
            <input type = "text" name="title" placeholder="Add Todo...">
            
            <button type="button" id="inputBtn" class="btn btn-outline-secondary">Submit</button>
        </form>
    </div>
</template>


<script>
export default {
    name: "AddTodo"
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
