<template>
  <div class="mainBackground">
    
    
    <div class="col-1">
      <div class="col-1-item">
       <a href="#" v-on:dblclick="aClick()"><img src="https://i.ibb.co/Wk5hrys/rec-bin.jpg" alt="recyle bin" border="0"></a> 
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App, why'
      }
    },
    methods: {
        aClick(){
           window.open("https://www.google.com/");
        }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mainBackground {
    background-image: url("https://i.ibb.co/vZ9w0yc/andre-a-xavier-1131410-unsplash.jpg");
     min-height: 100%;
     min-width: 1024px;
	
  /* Set up proportionate scaling */
  width: 100%;
  height: auto;
	
  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
  }

  .col-1 {
    display: flex;
    flex-direction: column;
    max-width: 100px;
    top: 5px;
    padding-left: 2px;
    border-radius: 50%;
    
  

  }

  .col-1-item {
    
    align-content:flex-start;
    

  }

  a{
    cursor: default;
  }
</style>