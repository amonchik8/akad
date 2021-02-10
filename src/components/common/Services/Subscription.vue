<template>
  <div class="subscription">
    <Title>{{ title }}</Title>
    <div class="subscription__price">{{ price }}</div>
    <ul class="subscription__list">
      <slot />
    </ul>
    <Button class="subscription__button">get started</Button>
  </div>
</template>

<script>
import Button from "../Button.vue";
import Title from "../Title.vue";
export default {
  components: { Title, Button },
  name: "Subscription",
  props: {
    price: String,
    title: String,
  },
};
</script>

<style lang="scss">
.subscription {
  @include flex(flex-start, flex-start, column);
  border: 4px solid $N0;
  border-top: 4px solid $G90;
  cursor: pointer;
  transition: all 0.3s ease;
  @include hover {
    border: 4px solid $G90;
    box-shadow: 10px 10px 10px $G90;
    &::after {
      transition: all 0.3s ease;
      opacity: 0;
    }
  }
  padding: 30px 30px 40px;
  max-width: 360px;
  width: 100%;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    border: 7px solid transparent;
    border-top: 7px solid $G90;
    border-right: 7px solid $G90;
    top: -3px;
    right: -3px;
    opacity: 1;
  }
  &__price {
    @include text($H14, 700, $N0);
    text-transform: uppercase;
    background-color: $G90;
    padding: 8px 25.2px;
    line-height: 1;
    margin-bottom: 50px;
  }
  &__list {
    @include flex(flex-start, flex-start, column);
    margin-bottom: 50px;
  }
  &__button {
    max-width: 135px;
    padding: 17px 18.6px;
  }
}
</style>