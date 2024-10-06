<template>
  <div class="welcome">
    <h1>BIENVENUE</h1>

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
h1 {
  margin-top: 3rem;
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
  h1 {
    font-size: 3rem;
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
