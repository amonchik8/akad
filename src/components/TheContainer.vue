<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "TheContainer",
};
</script>

<style lang="scss">
.container {
  max-width: 1188px;
  width: 100%;
  margin: 0 auto;
  @include media {
      padding: 0 24px;
    }
  padding: 0 12px;
}
</style>