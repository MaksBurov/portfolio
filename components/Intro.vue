<template>
    <div class="intro">
        <div class="intro__info">
            <hgroup class="intro__title-group">
                <h1 class="intro__title">I Frontend Developer</h1>
                <h2 class="intro__subtitle">Hi, my name is Maks Burov</h2>
            </hgroup>
            <p class="intro__description">I've worked on web development for more than 2+ years, maybe I'm the web developer you're looking for, because I treat my work with special trepidation</p>
        </div>
        <div class="intro__image">
            <nuxt-img src="/intro.svg"  class="intro__img" />
        </div>
    </div>
</template>

<style lang="scss">
.intro {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5em;

    margin-top: 5%;
}

.intro__info {
    flex: 1 1 50%;
    margin-top: 5em;
}

.intro__title-group {
    display: flex;
    flex-direction: column-reverse;
}

.intro__title {
    margin: 0;
    font-size: 3.3rem;
    color: var(--color-hover)
}

.intro__subtitle {
    margin: 0;
    font-size: 2.5rem;
}

.intro__description {
    color: var(--color-text-secondary);
}

.intro__image {
    flex: 1 1 50%;
}
</style>