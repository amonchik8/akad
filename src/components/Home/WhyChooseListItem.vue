<template>
  <div class="why-choose-list__item">
    <div class="why-choose-list__card">
      <slot name="icon" />
      <h3 class="why-choose-list__item-title">{{ title }}</h3>
      <p class="why-choose-list__item-body">
        {{ body }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhyChooseListItem",
  props: {
    title: String,
    body: String,
  },
};
</script>

<style lang="scss">
.why-choose-list {
  &__item {
      margin-right: 10px;
    @include media(1123) {
      margin-right: 30px;
    }
  }
  &__card {
    width: 240px;
  }
  &__item-title {
    @include text($H18, 700, $base-color);
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  &__item-body {
    @include text($H14, 400, $secondary-color);
    text-transform: uppercase;
    display: block;
    line-height: 2.14;
    max-width: 204px;
  }
}
</style>