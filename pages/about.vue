<template>
  <section class="about">
    <div class="about__container container">
      <h1 class="about__title">Обо мне</h1>
      <div class="about__info-block">
        <div class="about__image">
          <div class="about__hexagon">
            
          </div>
          <Icon name="СornerRounding" size="36"  />
          <nuxt-img src="/avatar.png"  size="36" class="about__img" />
        </div>
        <div class="about__info">
          <h2 class="about__subtitle">Информация</h2>
          <div class="about__card">
            <div class="about__info-row">
              <div class="about__row-label">Имя:</div>
              <div class="about__row-desc">Буров Максим Иванович</div>
            </div>
            <div class="about__info-row">
              <div class="about__row-label">Дата рождения:</div>
              <div class="about__row-desc">14.08.1996 г.</div>
            </div>
            <div class="about__info-row">
              <div class="about__row-label">E-mail:</div>
              <div class="about__row-desc">
                <a href="mailto:maksim-popov-1996@mail.ru" class="about__link"
                  >maksim-popov-1996@mail.ru</a
                >
              </div>
            </div>

            <div class="about__info-row about__info-row--btns">
              <button class="about__btn about__btn--contained">Написать</button>
              <button class="about__btn about__btn--outlined">Резюме</button>
            </div>
            <!-- <div class="about__info-row">
              <div class="about__row-label"></div>
              <div class="about__row-desc"></div>
            </div> -->

            <div class="about__social">
              <h3 class="about__third-title">Социальные сети</h3>

              <ul class="about__social-list">
                <li class="about__social-item">
                  <a
                    href="https://vk.com/maksburov22"
                    class="about__social-link"
                    target="_blank"
                  >
                    <Icon
                      name="Vk"
                      class="about__social-icon about__social-icon--vk"
                    />
                  </a>
                </li>
                <li class="about__social-item">
                  <a
                    href="https://github.com/MaksBurov"
                    class="about__social-link"
                    target="_blank"
                  >
                    <Icon name="GitHub" size="36" class="about__social-icon" />
                  </a>
                </li>
                <li class="about__social-item">
                  <a
                    href="https://t.me/MaksBurov"
                    class="about__social-link"
                    target="_blank"
                  >
                    <Icon
                      name="Telegram"
                      size="36"
                      class="about__social-icon about__social-icon--tg"
                    />
                  </a>
                </li>
                <li class="about__social-item">
                  <a
                    href="https://api.whatsapp.com/send/?phone=79611167509"
                    class="about__social-link"
                    target="_blank"
                  >
                    <Icon
                      name="WhatsApp"
                      size="36"
                      class="about__social-icon about__social-icon--whatsapp"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

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

.about__subtitle {
  font-size: var(--subtitle-size);
}

.about__info-block {
  display: flex;
}

.about__image {
  position: relative;
  display: flex;  
  width: 50%;
  /* margin-right: 5%; */
}

.about__hexagon {
  position: absolute;
  /* top: -20%; */
  right: -6%;
  bottom: 0;
  width: 135%;
  display: inline-block;
  /* color: orange; */
  color: var(--purple);
  filter: url("#СornerRounding");

  &::before {
    content: "";
    display: block;
    background: currentColor;
    /* padding-top: 115%; */
    padding-top: 80%;
    /* clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); */
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  }
}

.about__img {
  position: relative;
  z-index: 5;
  width: 80%;
}

.about__info {
  position: relative;
  z-index: 1;
  width: 45%;
  margin-left: 5%;
}

.about__card {
  width: 100%;
  padding: 0.75em 1em;
  border-radius: 10px;
  background-color: var(--color-bg-secondary);
}

.about__info-row {
  display: flex;

  &--btns {
    margin: 1em 0;
  }
}

.about__row-label {
  font-weight: bold;
  width: 50%;
}

.about__link {
  display: inline-block;
  transition: color 0.3s;

  &:hover {
    color: var(--color-hover);
  }
}

.about__btn {
  padding: 0.5em 1em;
  margin-right: 1em;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;

  &--contained {
    background-color: var(--purple);

    &:hover {
      background-color: var(--color-hover);
    }
    &:focus {
      box-shadow: 0 0 0px 2px var(--color-bg-primary), 0 0 0px 4px var(--purple);
    }
  }

  &--outlined {
    border: 2px solid var(--purple);

    &:hover,
    &:focus {
      background-color: var(--purple);
    }
    &:focus {
      box-shadow: 0 0 0px 2px var(--color-bg-primary), 0 0 0px 4px var(--purple);
    }
  }
}

.about__third-title {
  font-size: var(--third-title-size);
}

.about__social-list {
  display: flex;
  align-items: center;
  gap: 15px;
}

.about__social-link {
  display: inline-block;
  width: 2em;
  height: 2em;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.25);
  }
}

.about__social-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
  fill: var(--color-text-primary);
  transition: fill 0.1s;

  &--vk {
    .about__social-link:hover & {
      fill: #0077ff;
    }
  }
  &--tg {
    .about__social-link:hover & {
      fill: #3390ec;
    }
  }
  &--whatsapp {
    .about__social-link:hover & {
      fill: #00e676;
    }
  }
}
</style>
