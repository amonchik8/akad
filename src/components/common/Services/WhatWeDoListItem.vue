<template>
  <li class="what-we-do__item">
    <ion-icon class="what-we-do__icon" name="checkbox"></ion-icon>
    {{ value }}
  </li>
</template>

<script>
export default {
  name: "WhatWeDoListItem",
  props: {
    value: String,
  },
};
</script>

<style lang="scss">
.what-we-do {
  &__item {
    @include flex(center, center, row);
    @include text($H14, 400, $base-color);
    font-family: $secondary-font;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
  &__icon {
    @include text($H14, 400, $G90);
    margin-right: 10px;
  }
}
</style>