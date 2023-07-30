<template>
  <section class="contacts container">
    <h1 class="contacts__title">Контакты</h1>

    <div class="contacts__communication">
      <div class="contacts__type-connection">
        <h2 class="contacts__subtitle">Контакты для связи</h2>

        <div class="contacts__connection-list">
          <div class="contacts__connection-block contacts__connection-block--communication">
            <div class="contacts__block-icon">
              <Icon name="ic:baseline-phone-android" size="36" />
            </div>
            <div class="contacts__block-info">
              <div class="contacts__label">Телефон:</div>
              <a href="tel:+79611167509" class="contacts__info-data">+7-(961)-116-75-09</a>
            </div>
            <button class="contacts__btn-copy" title="copy to clipboard" @click="copyToClipboard('+79611167509')">
              <Icon name="ic:baseline-copy-all" size="20" />
            </button>
          </div>
          <div class="contacts__connection-block contacts__connection-block--communication">
            <div class="contacts__block-icon">
              <Icon name="ic:baseline-mail" size="36" />
            </div>
            <div class="contacts__block-info">
              <div class="contacts__label">E-mail:</div>
              <a href="mailto:maksim-popov-1996@mail.ru" class="contacts__info-data">maksim-popov-1996@mail.ru</a>
            </div>
            <button class="contacts__btn-copy" title="copy to clipboard"
              @click="copyToClipboard('maksim-popov-1996@mail.ru')">
              <Icon name="ic:baseline-copy-all" size="20" />
            </button>
          </div>
        </div>
      </div>

      <div class="contacts__type-connection">
        <h2 class="contacts__subtitle">Социальные сети</h2>

        <ul class="contacts__connection-block contacts__connection-block--social">
          <li class="contacts__social-item">
            <a href="https://vk.com/maksburov22" class="contacts__social-link" target="_blank">
              <Icon name="Vk" class="contacts__social-icon contacts__social-icon--vk" />
            </a>
          </li>
          <li class="contacts__social-item">
            <a href="https://github.com/MaksBurov" class="contacts__social-link" target="_blank">
              <Icon name="GitHub" size="36" class="contacts__social-icon" />
            </a>
          </li>
          <li class="contacts__social-item">
            <a href="https://t.me/MaksBurov" class="contacts__social-link" target="_blank">
              <Icon name="Telegram" size="36" class="contacts__social-icon contacts__social-icon--tg" />
            </a>
          </li>
          <li class="contacts__social-item">
            <a href="https://api.whatsapp.com/send/?phone=79611167509" class="contacts__social-link" target="_blank">
              <Icon name="WhatsApp" size="36" class="contacts__social-icon contacts__social-icon--whatsapp" />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <section class="contacts__write">
      <h2 class="contacts__subtitle">{{ $t("write-a-letter") }}</h2>
      <Write />
    </section>
  </section>
</template>

<script setup>
function copyToClipboard(data) {
  navigator.clipboard
    .writeText(data)
    .then(() => {
      console.log("ok");
    })
    .catch(() => {
      console.log("no ok");
    });
}
</script>

<style lang="scss">
.contacts__communication {
  @media (min-width: 885px) {
    display: flex;
    justify-content: space-between;
    gap: 30px;
  }
}

.contacts__type-connection {
  flex: 1 1 50%;
}

.contacts__connection-block {
  padding: 0.75em 1em;
  height: 4em;
  border-radius: 10px;
  background-color: var(--color-bg-secondary);

  &--communication {
    position: relative;
    display: flex;
    align-items: center;
    width: 50%;
    min-width: 290px;

    @media (max-width: 649px) {
      margin-bottom: 15px;
    }
  }

  &--social {
    display: flex;
    align-content: center;
    gap: 25px;
    width: fit-content;
  }
}

.contacts__block-icon {
  grid-row: span 2;
  margin-right: 15px;
}

.contacts__label {
  margin-bottom: 0.25em;
}

.contacts__btn-copy {
  position: absolute;
  top: 0;
  right: 0;
  width: 32px;
  height: 32px;
  padding: 0;
  cursor: pointer;
}

.contacts__connection-list {
  @media (min-width: 650px) {
    display: flex;
    gap: 15px;
  }
}

.contacts__social-link {
  display: inline-block;
  width: 2em;
  height: 2em;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.25);
  }
}

.contacts__social-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
  fill: var(--color-text-primary);
  transition: fill 0.1s;

  &--vk {
    .contacts__social-link:hover & {
      fill: #0077ff;
    }
  }

  &--tg {
    .contacts__social-link:hover & {
      fill: #3390ec;
    }
  }

  &--whatsapp {
    .contacts__social-link:hover & {
      fill: #00e676;
    }
  }
}

/* .contacts__social-link:hover .contacts__social-icon {
fill: red
} */

.contacts__write {
  max-width: 800px;
  margin: 0 auto;
}
</style>
