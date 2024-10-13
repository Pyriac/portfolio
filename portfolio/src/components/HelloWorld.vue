<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    this.timer = setTimeout(() => {
      this.isVisible = true;
    }, 0);
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
};
</script>

<template>
  <div :class="['welcome', { 'welcome-active': isVisible }]">
    <h1 :class="['bienvenue', { 'bienvenue-active': isVisible }]">BIENVENUE</h1>

    <div class="card">
      <p>
        Mon nom est Cyriac Pineau, développeur Full-Stack basé en Bretagne, à
        mi-distance entre Nantes et Rennes.
      </p>
      <p>
        Lancé sur des projets allant de quizz à des ERM pour auto-entrepreneur,
        je cherche en permanence à optimiser l’expérience utilisateur.
      </p>
    </div>
  </div>
</template>

<style scoped>
.bienvenue {
  margin-top: 3rem;
  font-size: 2.5rem;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--first-yellow);
  color: #264653;
  letter-spacing: 0.2rem;
  transition: color 6s ease-in;
}
.bienvenue-active {
  color: var(--first-yellow);
}
.welcome {
  display: flex;
  flex-direction: column;
}

p {
  width: 80%;
  font-weight: 500;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

@media (min-width: 998px) {
  .bienvenue {
    font-size: 3.5rem;
    margin-left: 4rem;
    text-align: left;
  }
  p {
    font-size: 1.2rem;
    margin: 0;
    width: 80%;
  }
  .card {
    align-items: flex-start;
  }
}
</style>
