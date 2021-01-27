<template #navigation>
  <nav class="navigation header__navigation">
    <a class="logo" href="http://">akad.</a>
    <img
      class="navigation__image"
      src="../assets/images/menuNavigation.png"
      alt="menu"
    />
  </nav>
</template>

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