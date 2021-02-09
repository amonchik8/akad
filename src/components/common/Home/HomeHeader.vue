<template>
  <header class="home-header">
    <div class="home-header__container">
      <MenuPanel class="home-header__panel"></MenuPanel>
      <div class="home-header__title-wrapper">
        <h1 class="home-header__title">creative agency</h1>
        <p class="home-header__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="content-box">
        <div class="content-box__image-wrapper">
          <img
            class="content-box__image"
            src="@/assets/images/Home/imageHome.png"
            alt="image"
          />
        </div>
        <TextBlock class="content-box__body">
          <template #title>
            HISTORY OF AGENCY
          </template>
          <template #content>
            <p class="content-box__content">
              Porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              modi tempora incidunt ut labore.
            </p>
            <Button class="content-box__button">read more</Button>
          </template>
        </TextBlock>
      </div>
    </div>
  </header>
</template>

<script>
import MenuPanel from "../MenuPanel.vue";
import Button from "../Button.vue";
import TextBlock from "../TextBlock.vue";

export default {
  name: "Header",
  components: {
    Button,
    MenuPanel,
    TextBlock,
  },
};
</script>

<style lang="scss">
.home-header {
  background-image: url("../../../assets/images/Home/bgHome.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  &__container {
    max-width: 1188px;
    width: 100%;
    margin: 0 auto;
    padding: 45px 24px 75px;
  }
  &__panel {
    margin-bottom: 210px;
  }
  &__title {
    @include text($H48, 700, $base-color);
    border: 10px solid $base-color;
    text-transform: uppercase;
    max-width: max-content;
    margin: 0 auto;
    padding: 12.5px 39.5px;
    margin-bottom: 30px;
    position: relative;
    &:after {
      padding: 6px 20px;
      position: absolute;
      content: "we’re";
      @include text($H18, 700, $base-color);
      line-height: 1;
      background-color: $G90;
      left: 42%;
      top: -40px;
    }
  }
  &__description {
    @include text($H16, 400, $base-color);
    text-align: center;
    line-height: 1.5;
    margin: 0 auto;
    max-width: 540px;
    margin-bottom: 125px;
    font-family: $secondary-font;
  }
}
.content-box {
  @include flex(space-between, center, row);
  &__body {
    @include flex(flex-start, flex-start, column);
    position: relative;
  }
  &__image-wrapper {
    width: 50%;
    padding-bottom: 35.2%;
    position: relative;
  }
  &__image {
    position: absolute;
    z-index: 2;
    width: 100%;
    max-width: 458px;
    height: 100%;
    max-height: 400px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
  }
  &__content {
    max-width: 522px;
    margin-bottom: 30px;
  }
  &__button {
    position: absolute;
    right: 0;
  }
}
</style>