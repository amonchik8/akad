<template>
  <h2 class="title"><slot /></h2>
</template>

<script>
export default {
  name: "Title",
};
</script>

<style lang="scss">
.title {
  @include text($H30, 700, $base-color);
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
  &__subtitle {
    text-align: center;
    @include text($H14, 500, $base-color);
    font-family: $secondary-font;
    line-height: 1.7;
    margin: 0 auto 100px;
  }
}
</style>