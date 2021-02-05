<template>
  <label class="radio">
    <input
      class="radio__input"
      type="radio"
      :value="value"
      :checked="checked"
      @change="$emit('change', value)"
    />
    <span class="radio__name"><slot /></span>
  </label>
</template>

<script>
export default {
  name: "AppFilter",
  props: {
    value: String,
    checked: Boolean,
  },
};
</script>

<style lang="scss">
.radio {
  &__input {
    display: none;
  }
  &__input:checked + .radio__name {
    background-color: $G90;
  }
  &__name {
  }
}
</style>