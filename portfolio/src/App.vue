<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import Project from "./components/Project.vue";
import projectData from "./data/project";
</script>

<template>
  <header>
    <img
      class="header-img"
      src="./assets/Header.jpg"
      alt="Illustration d'un bureau avec une tasse de café, un ordinateur et une fenêtre qui donne sur des montagnes"
    />
    <HelloWorld class="Hello" />
  </header>
  <div class="separator"></div>
  <h2>MES PROJETS</h2>
  <section>
    <article v-for="project in projectData" :key="project.name">
      <Project :project="project" />
    </article>
  </section>
</template>

<style scoped>
.header-img {
  width: 96vw;
  margin-top: 15vh;
  border-radius: 100px;
}

img {
  display: block;
  margin-top: 10vh;
  margin-left: auto;
  margin-right: auto;
  filter: drop-shadow(0px 8px 50px rgba(231, 111, 81, 0.4));
}
article {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.separator {
  height: 2px;
  background: rgb(38, 70, 83);
  background: linear-gradient(
    90deg,
    rgba(38, 70, 83, 1) 20%,
    rgba(244, 162, 97, 0.7) 50%,
    rgba(38, 70, 83, 1) 80%
  );
}

@media (min-width: 998px) {
  h2 {
    padding-top: 5vh;
    font-size: 2rem;
  }
  header {
    display: flex;
    flex-direction: row-reverse;
    margin-top: 25vh;
    align-items: center;
    width: 80%;
    margin-left: 10%;
    margin-bottom: 15vh;
    justify-content: center;
  }

  .header-img {
    width: 40%;
    margin: 0;
  }

  .Hello {
    width: 50%;
  }
  section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  article {
    width: 33%;
  }
  .separator {
    height: 2px;
    background: rgb(38, 70, 83);
    background: linear-gradient(
      90deg,
      rgba(38, 70, 83, 1) 25%,
      rgba(244, 162, 97, 0.7) 50%,
      rgba(38, 70, 83, 1) 75%
    );
  }
}
</style>
