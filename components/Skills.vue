<template>
  <div class="skills container">
    <h2 class="skills__title">Навыки</h2>
    <ul class="skills__list">
      <li class="skills__item">
        <img
          src="~/assets/images/skills-icons/html-5.svg"
          alt=""
          class="skills__icon"
        />
      </li>
      <li class="skills__item">
        <img
          src="~/assets/images/skills-icons/css-3.svg"
          alt=""
          class="skills__icon"
        />
      </li>
      <li class="skills__item">
        <img
          src="~/assets/images/skills-icons/js.svg"
          alt=""
          class="skills__icon"
        />
      </li>
      <li class="skills__item">
        <img
          src="~/assets/images/skills-icons/sass.svg"
          alt=""
          class="skills__icon"
        />
      </li>
      <li class="skills__item">
        <img
          src="~/assets/images/skills-icons/pug.svg"
          alt=""
          class="skills__icon"
        />
      </li>
      <li class="skills__item">
        <img
          src="~/assets/images/skills-icons/gulp.svg"
          alt=""
          class="skills__icon"
        />
      </li>
      <li class="skills__item">
        <img
          src="~/assets/images/skills-icons/webpack.svg"
          alt=""
          class="skills__icon"
        />
      </li>
      <li class="skills__item">
        <img
          src="~/assets/images/skills-icons/jquery.svg"
          alt=""
          class="skills__icon"
        />
      </li>
      <li class="skills__item">
        <img
          src="~/assets/images/skills-icons/vue.svg"
          alt=""
          class="skills__icon"
        />
      </li>
      <li class="skills__item">
        <img
          src="~/assets/images/skills-icons/react.svg"
          alt=""
          class="skills__icon"
        />
      </li>
      <li class="skills__item">
        <img
          src="~/assets/images/skills-icons/nuxt.svg"
          alt=""
          class="skills__icon"
        />
      </li>
      <li class="skills__item">
        <img
          src="~/assets/images/skills-icons/git.svg"
          alt=""
          class="skills__icon"
        />
      </li>
      <li class="skills__item">
        <img
          src="~/assets/images/skills-icons/redux.svg"
          alt=""
          class="skills__icon"
        />
      </li>
      <li class="skills__item">
        <img
          src="~/assets/images/skills-icons/redux-saga.svg"
          alt=""
          class="skills__icon"
        />
      </li>
      <li class="skills__item">
        <img
          src="~/assets/images/skills-icons/mobx.svg"
          alt=""
          class="skills__icon"
        />
      </li>
      <li class="skills__item">
        <img
          src="~/assets/images/skills-icons/typescript.svg"
          alt=""
          class="skills__icon"
        />
      </li>
      <li class="skills__item">
        <img
          src="~/assets/images/skills-icons/bv.svg"
          alt=""
          class="skills__icon"
        />
      </li>
      <li class="skills__item">
        <img
          src="~/assets/images/skills-icons/ant.svg"
          alt=""
          class="skills__icon"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.skills__title {
  font-size: var(--subtitle-size);
}
.skills__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 15px;
}

.skills__item {
  position: relative;
  padding-top: 100%;
  filter: grayscale(1);
  transition: filter 0.3s, transform 0.2s;

  &:hover {
    filter: grayscale(0);
    transform: scale(1.1);
  }
}

.skills__icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
