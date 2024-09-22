<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <img
      class="header"
      src="./assets/Header.jpg"
      alt="Illustration d'un bureau avec une tasse de café, un ordinateur et une fenêtre qui donne sur des montagnes"
    />
  </div>
  <HelloWorld msg="Bienvenue" />
</template>

<style scoped>
img {
  display: block;
  margin-top: 10vh;
  margin-left: auto;
  margin-right: auto;
  filter: drop-shadow(0px 8px 50px rgba(231, 111, 81, 0.4));
}
</style>
