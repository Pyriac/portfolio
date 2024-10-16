<script setup>
import { RouterLink } from "vue-router";
defineProps({
  project: Object,
});

const toUpperCase = (str) => {
  return str ? str.toUpperCase() : "";
};
</script>

<template>
  <div class="border" v-if="project">
    <RouterLink :to="{ path: `/project/${project.name}` }">
      <h2>{{ toUpperCase(project.name) }}</h2>
      <img :src="`images/${project.image}`" alt="" />
      <p>{{ project.description }}</p>
      <p class="technologies">{{ project.technologies }}</p>
    </RouterLink>
    <div class="link-zone">
      <a :href="`${project.github}`" target="_blank">
        <img
          class="link"
          v-if="project.github"
          src="/GitHub.png"
          alt="Liens vers le repository github"
        />
      </a>
      <a :href="`${project.website}`" target="_blank">
        <img
          class="link"
          v-if="project.website"
          src="/website.png"
          alt="Liens vers le site internet"
        />
      </a>
    </div>
  </div>
  <div v-else>
    <p>Chargement...</p>
  </div>
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
