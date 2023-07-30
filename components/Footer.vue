<template>
  <footer class="footer">
    <div class="footer__container container">
      <ul class="footer__nav-list">
        <li class="footer__nav-item">
          <NuxtLink class="footer__nav-link" :to="localePath('/')">{{
            $t("navigation-home")
          }}</NuxtLink>
        </li>
        <li class="footer__nav-item">
          <NuxtLink class="footer__nav-link" :to="localePath('/about')">{{
            $t("navigation-about")
          }}</NuxtLink>
        </li>
        <li class="footer__nav-item">
          <NuxtLink class="footer__nav-link" :to="localePath('/works')">{{
            $t("navigation-works")
          }}</NuxtLink>
        </li>
        <li class="footer__nav-item">
          <NuxtLink class="footer__nav-link" :to="localePath('/contacts')">{{
            $t("navigation-contacts")
          }}</NuxtLink>
        </li>
      </ul>
      <div class="footer__info">Maks Burov</div>
      <div class="footer__contacts">
        <ul class="footer__social-list">
          <li class="footer__social-item">
            <a
              href="https://vk.com/maksburov22"
              class="footer__social-link"
              target="_blank"
            >
              <Icon
                name="Vk"
                class="footer__social-icon footer__social-icon--vk"
              />
            </a>
          </li>
          <li class="footer__social-item">
            <a
              href="https://github.com/MaksBurov"
              class="footer__social-link"
              target="_blank"
            >
              <Icon name="GitHub" size="36" class="footer__social-icon" />
            </a>
          </li>
          <li class="footer__social-item">
            <a
              href="https://t.me/MaksBurov"
              class="footer__social-link"
              target="_blank"
            >
              <Icon
                name="Telegram"
                size="36"
                class="footer__social-icon footer__social-icon--tg"
              />
            </a>
          </li>
          <li class="footer__social-item">
            <a
              href="https://api.whatsapp.com/send/?phone=79611167509"
              class="footer__social-link"
              target="_blank"
            >
              <Icon
                name="WhatsApp"
                size="36"
                class="footer__social-icon footer__social-icon--whatsapp"
              />
            </a>
          </li>
        </ul>
        <a href="mailto:maksim-popov-1996@mail.ru" class="footer__link"
          >maksim-popov-1996@mail.ru</a
        >
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style lang="scss">
.footer {
  position: relative;
  z-index: var(--z-index-header);
  margin-top: 3em;
  padding: 1.5em 0 2em;
  background-color: var(--color-bg-footer);
  font-size: 1.1rem;
}

.footer__container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.footer__nav-item:not(:last-child) {
    margin-bottom: 0.25em;
}

.footer__nav-link {
    display: inline-block;
    padding: 0.25em;
    transition: color 0.3s;

    &:hover {
        color: var(--color-hover)
    }
}

.footer__info {
    align-self: center;
}

.footer__social-list {
  display: flex;
  align-items: center;
  gap: 15px;
}

.footer__social-link {
  display: inline-block;
  width: 2em;
  height: 2em;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.25);
  }
}

.footer__social-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
  fill: var(--color-text-primary);
  transition: fill 0.1s;

  &--vk {
    .footer__social-link:hover & {
      fill: #0077ff;
    }
  }
  &--tg {
    .footer__social-link:hover & {
      fill: #3390ec;
    }
  }
  &--whatsapp {
    .footer__social-link:hover & {
      fill: #00e676;
    }
  }
}

.footer__link {
    display: inline-block;
    padding: 0.25em;
    transition: color 0.3s;

    &:hover {
        color: var(--color-hover)
    } 
}
</style>
