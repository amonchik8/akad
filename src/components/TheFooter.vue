<template>
  <section class="footer">
    <div class="footer__container">
      <div class="footer__main">
        <Navigation class="footer__navigation" />
        <div class="footer__author">
          Created by jedi 2021. All Rights Reserved
        </div>
      </div>
      <Social></Social>
    </div>
  </section>
</template>

<script>
import Navigation from "./common/Navigation.vue";
import Social from "./common/Social.vue";

export default {
  components: { Social, Navigation },
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
    @include media {
      padding: 50px 24px;
    }
    padding: 20px 12px;
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
      border-top: 5px solid transparent;
      max-width: 100%;
    }
  }
  &__navigation {
    display: none;
    @include media {
      display: flex;
    }
  }
}
</style>