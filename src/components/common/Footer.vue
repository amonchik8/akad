<template>
  <section class="footer">
    <div class="container footer__container">
      <div class="footer__main">
        <TheNavigation></TheNavigation>
        <div class="footer__author">
          Created by akhouad 2016. All Rights Reserved
        </div>
      </div>
      <Social></Social>
    </div>
  </section>
</template>

<script>
import TheNavigation from "../TheNavigation.vue";
import Social from "./Social.vue";

export default {
  components: { Social, TheNavigation },
  name: "Footer",
};
</script>

<style lang="scss">
.footer {
  font-family: $secondary-font;
  &__container {
    padding: 50px 24px;
  }
  &__main {
    @include flex(space-between, center, row);
    margin-bottom: 30px;
  }
  &__author {
    @include text($H14, 400, $author-color);
    text-transform: uppercase;
  }
}
</style>