<script setup>
import { useRoute } from "vue-router";
import projectData from "../data/project";
const route = useRoute();
const project = projectData.find(
  (project) => project.name === route.params.name
);
console.info(project);
</script>

<template>
  <h1>{{ project.name }}</h1>
  <p>{{ project.description }}</p>
  <img :src="`/images/${project.image}`" alt="" />
  <p>{{ project.technologies }}</p>
  <div class="link-zone">
    <a :href="`${project.github}`" target="_blank">
      <img
        v-if="project.github"
        src="/GitHub.png"
        alt="Liens vers le repository github"
      />
    </a>
    <a :href="`${project.website}`" target="_blank">
      <img
        v-if="project.website"
        src="/website.png"
        alt="Liens vers le site internet"
      />
    </a>
  </div>
</template>

<style scoped>
img {
  width: 88%;
}
</style>
