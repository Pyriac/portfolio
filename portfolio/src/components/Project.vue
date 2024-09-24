<script setup>
defineProps({
  project: Object,
});

const toUpperCase = (str) => {
  return str ? str.toUpperCase() : "";
};
</script>

<template>
  <div v-if="project">
    <h1>{{ toUpperCase(project.name) }}</h1>
    <img :src="`public/images/${project.image}`" alt="" />
    <p>{{ project.description }}</p>
    <p>{{ project.technologies }}</p>
  </div>
  <div v-else>
    <p>Chargement...</p>
  </div>
</template>
