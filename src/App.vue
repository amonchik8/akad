<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style lang="scss">
.box {
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
}
</style>