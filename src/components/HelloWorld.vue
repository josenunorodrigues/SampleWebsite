<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <h3>Página de testes</h3>

    <label>Email</label>
    <input v-model="email" type="email" >
    <button @click="sendEmail">Send Email</button>
  </div>
</template>
<style src="./HelloWorld.css" lang="css"></style>
<script src="./HelloWorld.js" lang="js"></script>