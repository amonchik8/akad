<template>
  <section class="header">
    <div class="header__back">
      <MenuPanel class="home-header__panel header__panel"></MenuPanel>
      <div class="container header__container">
        
        <Title class="header__title" :title=title></Title>
        <Subtitle>{{ subtitle }}</Subtitle>
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
  props: {
    title: String,
    subtitle: String,
  }
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
    padding: 20px 12px 90px;
    @include media {
      padding: 40px 24px 165px;
    }
  }
  &__panel {
    background-color: #F1F0F1;
  }
  &__title {
    @include text($H36, 700, $base-color);
    margin-top: 150px;
    @include media {
      margin-top: 210px;
    }
  }
}
</style>