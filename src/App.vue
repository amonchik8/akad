<template>
  <div id="app">
    <transition-group name="fade" mode="out-in">
      <router-view key="id" />
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
.box {
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>