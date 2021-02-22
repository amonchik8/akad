<template>
  <div>
    <div class="nav-mobile">
      <a class="logo" href="https://akad.vercel.app/">akad.</a>
      <Burger />
    </div>
  </div>
</template>

<script>
import Burger from "./Burger/Burger.vue";

export default {
  components: { Burger },
  name: "MenuPanel",
};
</script>

<style lang="scss">
.nav-mobile {
  @include flex(space-between, center);
  &__image {
    cursor: pointer;
  }
}
.logo {
  @include flex(space-between, center);
  text-transform: uppercase;
  @include text($H18, 700, $base-color);
}
</style>