<script setup>
defineProps({
  project: Object,
});

const toUpperCase = (str) => {
  return str ? str.toUpperCase() : "";
};
</script>

<template>
  <div class="border" v-if="project">
    <h1>{{ toUpperCase(project.name) }}</h1>
    <img :src="`public/images/${project.image}`" alt="" />
    <p>{{ project.description }}</p>
    <p class="technologies">{{ project.technologies }}</p>
    <div class="link-zone">
      <a :href="`${project.github}`" target="_blank">
        <img
          class="link"
          v-if="project.github"
          src="../../public/GitHub.png"
          alt="Liens vers le repository github"
        />
      </a>
      <a :href="`${project.website}`">
        <img
          class="link"
          v-if="project.website"
          src="../../public/website.png"
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
</style>
