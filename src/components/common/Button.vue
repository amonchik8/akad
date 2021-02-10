<template>
  <button @click="(e) => $emit('click', e)" class="button" :disabled="disabled">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    disabled: Boolean,
  },
};
</script>

<style lang="scss">
.button {
  cursor: pointer;
  padding: 17px 32.5px;
  background-color: $G90;
  text-transform: uppercase;
  @include text($H14, 700, $N0);
  transition-property: box-shadow, background-color;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  @include hover {
    box-shadow: 2px 2px 2px $N00;
  }
  &:active {
    background-color: darken($G90, $amount: 10%);
  }
}
.button:disabled {
  cursor: not-allowed;
  background-color: $button-disable;
  @include hover {
    box-shadow: none;
  }
}
</style>