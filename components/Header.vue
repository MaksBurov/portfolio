<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__logo"></div>
      <nav class="header__nav nav">
        <ul class="nav__list">
          <li class="nav__item">
            <NuxtLink class="nav__link" :to="localePath('/')">{{
              $t("navigation-home")
            }}</NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink class="nav__link" :to="localePath('/about')">{{
              $t("navigation-about")
            }}</NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink class="nav__link" :to="localePath('/works')">{{
              $t("navigation-works")
            }}</NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink class="nav__link" :to="localePath('/contacts')">{{
              $t("navigation-contacts")
            }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="header__btns">
        <select v-model="$colorMode.preference">
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>

        <nuxt-link v-if="$i18n.locale !== 'ru'" :to="switchLocalePath('ru')">
          Ru
        </nuxt-link>
        <nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')">
          En
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<script setup>
const options = ref([
  { value: null, text: "Please select an option" },
  { value: "a", text: "This is First option" },
  { value: "b", text: "Selected Option" },
  { value: { C: "3PO" }, text: "This is an option with object value" },
  { value: "d", text: "This one is disabled", disabled: true },
]);
</script>

<style lang="scss">
/* body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
.dark-mode body {
  background-color: var(--color-bg-primary);
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
} */

.header {
  position: sticky;
  top: 0;
  z-index: var(--z-index-header);
  background-color: var(--color-bg-secondary);
}

.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2em;
}

.header__btns {
  display: flex;
  gap: 15px;
}

.nav__list {
  display: flex;
  align-items: center;
  gap: 1em;
}

.nav__link {
  padding: 0.25em 0.5em;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--light-purple);
  }
  &.router-link-active {
    background-color: var(--purple);
  }
}
</style>
