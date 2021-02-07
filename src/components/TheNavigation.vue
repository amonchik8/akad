<template>
  <div class="nav">
    <router-link class="nav__link" to="/">Home</router-link>
    <router-link class="nav__link" to="/about">About us</router-link>
    <router-link class="nav__link" to="/services">Services</router-link>
    <a class="nav__link" href="#portfolio">portfolio</a>
    <router-link class="nav__link" to="/blog">Blog</router-link>
    <router-link class="nav__link" to="/contact">Contact us</router-link>
  </div>
</template>

<script>
export default {
  name: "TheNavigation",
};
</script>

<style lang="scss">
.nav {
  @include flex(flex-start, center, row);
  text-transform: uppercase;
  &__link {
    text-decoration: none;
    @include text($H14, 400, $author-color);
    &:not(:last-child) {
      margin-right: 40px;
      position: relative;
      &:before {
        content: "-";
        position: absolute;
        right: -23px;
        bottom: 1px;
      }
    }
  }
}
</style>