<template>
  <div>
    <div class="content">
      <Navbar />
      <RouterView />
      <Background />
      <!-- <Footer /> -->
    </div>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  import Background from './components/Background.vue';
  import { RouterView } from 'vue-router';
  import Footer from './components/Footer.vue';

  export default {
    components: {
      Navbar,
      Background,
      Footer
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

* {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
}

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


