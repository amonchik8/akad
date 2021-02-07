<template>
  <section class="header">
    <div class="header__back">
      <div class="container header__container">
        <MenuPanel class="header__panel"></MenuPanel>
        <Title class="header__title">about us</Title>
        <Subtitle>home / about</Subtitle>
      </div>
    </div>
  </section>
</template>

<script>
import MenuPanel from "./MenuPanel.vue";
import Subtitle from "./Subtitle.vue";
import Title from "./Title.vue";

export default {
  name: "Header",
  components: {
    MenuPanel,
    Title,
    Subtitle,
  },
};
</script>

<style lang="scss">
.header {
  background-image: url("../../assets/images/headerBgImage.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &__back {
    background: rgba(255, 255, 255, 0.5);
  }
  &__container {
    padding: 40px 24px 165px;
  }
  &__panel {
    margin-bottom: 210px;
  }
  &__title {
    @include text($H36, 700, $base-color);
  }
}
</style>