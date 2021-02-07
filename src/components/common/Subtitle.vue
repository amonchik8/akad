<template>
  <h3 class="subtitle"><slot /></h3>
</template>

<script>
export default {
  name: "Subtitle",
};
</script>

<style lang="scss">
.subtitle {
  text-align: center;
  @include text($H14, 700, $base-color);
  text-transform: uppercase;
}
</style>