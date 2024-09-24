<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import Project from "./components/Project.vue";
import projectData from "./data/project";
</script>

<template>
  <header>
    <div>
      <img
        class="header"
        src="./assets/Header.jpg"
        alt="Illustration d'un bureau avec une tasse de café, un ordinateur et une fenêtre qui donne sur des montagnes"
      />
    </div>
    <HelloWorld />
  </header>
  <section>
    <article v-for="project in projectData" :key="project.name">
      <Project :project="project" />
    </article>
  </section>
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
