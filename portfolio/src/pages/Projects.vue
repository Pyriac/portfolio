<script setup>
import projectData from "../data/project";
import Project from "../components/Project.vue";
defineProps({
  project: Object,
});
</script>

<template>
  <section>
    <article v-for="project in projectData" :key="project.name">
      <Project :project="project" />
    </article>
  </section>
</template>

<style scoped>
.border {
  width: 88%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0.5rem;
  border: solid 1px #2a9d8f;
  border-radius: 1rem;
  box-shadow: 4px 4px 10px rgba(42, 157, 143, 0.25);
  transition: box-shadow 0.5s ease;
}

.border:hover {
  box-shadow: 4px 4px 20px rgba(42, 157, 143, 0.5);
}

img {
  width: 88%;
}
p {
  width: 88%;
}

.technologies {
  font-style: italic;
}

.link {
  width: 1.5rem;
  margin-bottom: 1rem;
  margin-left: 6%;
}

.link-zone {
  display: flex;
  width: 100%;
}

a {
  margin-left: 6%;
}
@media (min-width: 998px) {
  p {
    font-size: 1.2rem;
  }
  .link {
    width: 2.5rem;
  }
}
</style>
