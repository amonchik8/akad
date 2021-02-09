<template>
  <section class="plans__container">
    <Title class="title-decoration">pricing plans</Title>
    <p class="title__description plans__description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <div class="plans__main">
        <Subscription></Subscription>
        <Subscription></Subscription>
        <Subscription></Subscription>
    </div>
  </section>
</template>

<script>
import Title from "../Title.vue";
import Subscription from './Subscription.vue';

export default {
  name: "Plans",
  components: {
    Title,
    Subscription,
  },
};
</script>

<style lang="scss">
.plans {
  &__container {
    @include flex(center, center, column);
    padding: 75px 0 150px;
  }
  &__description {
      max-width: 719px;
  }
  &__main {
      @include flex(space-between, center, row);
      width: 100%;
  }
}
</style>