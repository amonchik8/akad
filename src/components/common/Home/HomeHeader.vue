<template>
  <header class="home-header">
    <div class="home-header__container">
      <MenuPanel class="home-header__panel" />
      <div class="home-header__title-wrapper">
        <h1 class="home-header__title">creative agency</h1>
        <p class="home-header__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="history">
        <div class="history__image-wrapper">
          <img
            class="history__image"
            src="@/assets/images/Home/imageHome.png"
            alt="image"
          />
        </div>
        <div class="history__text-block-wrapper">
          <TextBlock
            class="history__text-block"
            title="HISTORY OF AGENCY"
            content="Porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              modi tempora incidunt ut labore."
          />
          <Button class="history__button">read more</Button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import MenuPanel from "../MenuPanel.vue";
import Button from "../Button.vue";
import TextBlock from "../TextBlock.vue";

export default {
  name: "HomeHeader",
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
.history {
  @include flex(space-between, center, row);
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
  &__text-block-wrapper {
    @include flex(flex-end, flex-end, column);
    max-width: 450px;
  }
  &__text-block {
    margin-bottom: 20px;
  }
}
</style>