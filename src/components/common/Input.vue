<template>
  <input class="input" type="text" placeholder="your email" />
</template>

<script>
export default {
  name: "Input",
};
</script>

<style lang="scss">
.input {
  @include text($H14, 400, $base-color);
  width: 100%;
  padding: 12px 20px;
  border: 1px solid $input-color;
  outline: none;
  @include placeholder {
    @include text($H11, 700, $input-color);
    text-transform: uppercase;
  }
}
</style>