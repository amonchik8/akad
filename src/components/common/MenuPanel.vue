<template>
  <nav class="navigation">
    <a class="logo" href="https://akad.vercel.app/">akad.</a>
    <Burger />
  </nav>
</template>

<script>
import Burger from './Burger.vue';
export default {
  components: { Burger },
  name: "MenuPanel",
};
</script>

<style lang="scss">
.navigation {
  // position: fixed;
  // width: 70%;
  // background-color: white;
  z-index: 100;
  @include flex(space-between, center);
  // position: relative;
  &__image {
    cursor: pointer;
  }
}
.logo {
  text-transform: uppercase;
  @include text($H18, 700, $base-color);
}
</style>