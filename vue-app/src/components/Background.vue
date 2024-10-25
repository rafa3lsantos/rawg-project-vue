<template>
    <div class="background"></div>
  </template>
  
  <script>
  export default {
    name: "Background"
  }
  </script>
  
  <style scoped>
  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../public/img/1332219.jpeg');
    background-size: cover;
    background-position: bottom center;
    filter: blur(3px);
    z-index: -1;
  }
  </style>
  