<template>
  <section class="benefits">
    <div class="container benefits__container">
      <Title>some benefits</Title>
      <p class="title__description benefits__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div class="benefits__main">
        <Benefit></Benefit>
        <Benefit></Benefit>
        <Benefit></Benefit>
        <Benefit></Benefit>
        <Benefit></Benefit>
        <Benefit></Benefit>
      </div>
    </div>
  </section>
</template>

<script>
import Title from "../Title.vue";
import Benefit from './Benefit.vue';

export default {
  name: "Benefits",
  components: {
    Title,
    Benefit,
  },
};
</script>

<style lang="scss">
.benefits {
  &__container {
    @include flex(space-between, center, column);
    padding: 150px 24px 15px;
  }
  &__title {
    @include text($H30, 700, $base-color);
  }
  &__description {
      max-width: 717px;
  }
  &__main {
    @include flex(space-between, center, row);
  }
}
</style>