<template>
  <section class="footer">
    <div class="footer__container">
      <div class="footer__main">
        <TheNavigation></TheNavigation>
        <div class="footer__author">
          Created by jedi 2021. All Rights Reserved
        </div>
      </div>
      <Social></Social>
    </div>
  </section>
</template>

<script>
import TheNavigation from "./TheNavigation.vue";
import Social from "./common/Social.vue";

export default {
  components: { Social, TheNavigation },
  name: "TheFooter",
};
</script>

<style lang="scss">
.footer {
  font-family: $secondary-font;
  &__container {
    max-width: 1188px;
    width: 100%;
    margin: 0 auto;
    padding: 50px 24px;
  }
  &__main {
    @include flex(space-between, center, row);
    margin-bottom: 30px;
  }
  &__author {
    @include text($H14, 400, $author-color);
    text-transform: uppercase;
    max-width: 180px;
    @include media {
      max-width: 100%;
    }
  }
}
</style>