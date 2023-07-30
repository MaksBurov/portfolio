<template>
  <form action="" method="post" class="write">
    <div class="write__field write__field--body">
      <input id="name" type="text" class="write__input" :placeholder='$t("entry-your-name")' />
      <label for="name" class="write__label">{{ $t("name") }}</label>
    </div>
    <div class="write__field">
      <input id="email" type="text" class="write__input" :placeholder='$t("entry-your-email")' />
      <label for="email" class="write__label">E-mail</label>
    </div>
    <div class="write__field">
      <input id="telephone" type="text" class="write__input" :placeholder='$t("entry-your-phone")' />
      <label for="telephone" class="write__label">{{ $t("phone") }}</label>
    </div>
    <div class="write__field write__field--body">
      <textarea name="body" id="body" cols="30" rows="10" class="write__input write__input--text"
        :placeholder='$t("entry-messege")'></textarea>
      <label for="body" class="write__label">{{ $t("message") }}</label>
    </div>

    <div class="write__btns">
      <button class="write__btn">{{ $t("send") }}</button>
    </div>
  </form>
</template>

<style lang="scss">
.write {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
}

.write__field {
  position: relative;
  flex: 1 1 48%;
  padding-top: 1em;
  font-size: 1.2rem;

  &--body {
    flex-basis: 100%;
  }
}

.write__input {
  width: 100%;
  outline: none;
  border-bottom: 2px solid var(--color-bg-secondary);
  transition: border-color 0.3s;

  &::placeholder {
    opacity: 0;
  }

  &:focus {
    border-bottom: 2px solid var(--purple);

    &::placeholder {
      opacity: 1;
      transition: opacity 0.3s 0.1s;
    }
  }

  &--text {
    min-height: 3em;
    height: 5em;
    max-height: 15em;
    resize: vertical;
  }
}

.write__label {
  position: absolute;
  top: 0;

  display: block;
  padding: 0 2px;

  font-size: 0.8em;
  cursor: text;

  transition: font-size 0.3s, transform 0.3s;

  .write__input:placeholder-shown~& {
    font-size: 1em;
    transform: translateY(1em);
  }

  .write__input:focus~& {
    font-size: 0.8em;
    transform: translateY(0);
    cursor: default;
  }
}

.write__btns {
  display: flex;
  justify-content: center;
  width: 100%;
}

.write__btn {
  padding: 0.5em 1em;
  border-radius: 5px;
  background-color: var(--purple);
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  &:focus {
    box-shadow: 0 0 0px 2px var(--color-bg-primary), 0 0 0px 4px var(--purple);
  }
}
</style>
