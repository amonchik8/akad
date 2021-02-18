<template>
  <p class="content"><slot /></p>
</template>

<script>
export default {
  name: "Content",
};
</script>

<style lang="scss">
.content {
  @include text($H14, 400, $base-color);
  font-family: $secondary-font;
  line-height: 2.1;
  text-align: justify;
  @include media {
    text-align: left;
  }
}
</style>