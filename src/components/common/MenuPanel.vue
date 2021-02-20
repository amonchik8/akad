<template>
  <nav class="navigation">
    <a class="logo" href="https://akad.vercel.app/">akad.</a>
    <img
      class="navigation__image"
      src="@/assets/images/Home/menuNavigation.png"
      alt="menu"
    />
  </nav>
</template>

<script>
export default {
  name: "MenuPanel",
};
</script>

<style lang="scss">
.navigation {
  @include flex(space-between, center);
  &__image {
    cursor: pointer;
  }
}
.logo {
  text-transform: uppercase;
  @include text($H18, 700, $base-color);
}
</style>