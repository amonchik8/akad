<template>
  <h2 class="icon-title"><slot /></h2>
</template>

<script>
export default {
  name: "IconTitle",
};
</script>

<style lang="scss">
.icon-title {
  @include text($H48, 700, $base-color);
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 0;
  @include media {
    margin-bottom: 25px;
  }
}
</style>