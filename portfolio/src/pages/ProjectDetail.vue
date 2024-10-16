<script setup>
import { useRoute } from "vue-router";
import projectData from "../data/project";
const route = useRoute();
const project = projectData.find(
  (project) => project.name === route.params.name
);
</script>

<template>
  <h1>Coucou de {{ project.name }}</h1>
</template>
