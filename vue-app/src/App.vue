<template>
  <div>
    <div class="content">
      <Navbar />
      <RouterView />
      <Background />
    </div>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  import Background from './components/Background.vue';
  import { RouterView } from 'vue-router';

  export default {
    components: {
      Navbar,
      Background,
    }
  }
</script>

<style>
/* body {
  margin: 0; 
  height: 100vh; 
  overflow: hidden; 
}

body::before {
  content: ""; 
  position: fixed; 
  top: 0; 
  left: 0; 
  width: 100%; 
  height: 100%; 
  background-image: url('../public/img/1332219.jpeg'); 
  background-size: cover; 
  background-position: bottom center; 
  filter: blur(8px); 
  z-index: -1; 
}

.content {
  position: relative; 
  z-index: 1; 
  color: white; 
  font-family: Arial, sans-serif; 
  padding: 20px; 
  background-color: rgba(0, 0, 0, 0.5); 
} */
</style>


