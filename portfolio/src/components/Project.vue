<script setup>
defineProps({
  project: Object,
});

const toUpperCase = (str) => {
  return str ? str.toUpperCase() : "";
};
</script>

<template>
  <h1>{{ toUpperCase(project.name) }}</h1>
</template>
