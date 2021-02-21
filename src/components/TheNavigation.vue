<template>
  <div>
    <div class="nav">
      <div class="nav__item">
        <div class="nav__decoration"></div>
        <router-link class="nav__link" to="/">Home</router-link>
      </div>
      <div class="nav__item">
        <div class="nav__decoration"></div>
        <router-link class="nav__link" to="/about">About us</router-link>
      </div>
      <div class="nav__item">
        <div class="nav__decoration"></div>
        <router-link class="nav__link" to="/services">Services</router-link>
      </div>
      <div class="nav__item">
        <div class="nav__decoration"></div>
        <router-link class="nav__link" to="/#portfolio">Portfolio</router-link>
      </div>
      <div class="nav__item">
        <div class="nav__decoration"></div>
        <router-link class="nav__link" to="/blog">Blog</router-link>
      </div>
      <div class="nav__item">
        <div class="nav__decoration"></div>
        <router-link class="nav__link" to="/contact">Contact us</router-link>
      </div>
    </div>
    <div class="mob-nav">
      <Burger />
    </div>
  </div>
</template>

<script>
import Burger from './common/Burger.vue';
export default {
  components: { Burger },
  name: "TheNavigation",
};
</script>

<style lang="scss">
.nav {
  display: none;
  @include media {
    @include flex(flex-start, center, row);
  }
  text-transform: uppercase;
  &__link {
    text-decoration: none;
    @include text($H14, 400, $author-color);
    transition-property: color, border-top;
    transition-duration: 0.4s;
    transition-timing-function: ease;
    border-top: 3px solid transparent;
    @include hover {
      color: $G90;
    }
  }
  &__item {
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
    @include hover {
      .nav__decoration {
        transition-property: width, border-top;
        transition-duration: 0.4s;
        transition-timing-function: ease;
        width: 100%;
        border-top: 2px $G90 solid;
      }
    }
  }
  &__decoration {
    width: 1px;
    border-top: 2px transparent solid;
  }
}
.mob-nav {
  @include flex(flex-start, center, row);
  @include media {
    display: none;
  }
}
</style>