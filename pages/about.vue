<template>
  <section class="about">
    <div class="about__container container">
      <h1 class="about__title">Обо мне</h1>
      <AboutInfo />

      <Experiens />
      <Skills />
    </div>
  </section>
</template>

<style lang="scss">
.about__title {
  position: relative;
  z-index: 5;
  font-size: var(--title-size);
  text-align: center;
}
</style>
