<template>
  <section class="footer">
    <div class="container footer__container">
      <div>
        <div class="footer__menu">
          <nav></nav>
        </div>
        <div class="footer__author">
          Created by akhouad 2016. All Rights Reserved
        </div>
      </div>
      <Social></Social>
    </div>
  </section>
</template>

<script>
import Social from '../Social.vue';

export default {
  components: { Social },
  name: "Footer",
};
</script>

<style lang="scss">
</style>