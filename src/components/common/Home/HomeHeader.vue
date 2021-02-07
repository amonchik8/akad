<template>
  <header class="home-header">
    <div class="container home-header__container">
      <MenuPanel class="home-header__panel"></MenuPanel>
      <div class="home-header__title-wrapper">
        <h1 class="home-header__title">creative agency</h1>
        <p class="home-header__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="content-box">
        <div class="content-box__image-wrapper">
          <img
            class="content-box__image"
            src="@/assets/images/imageHome.png"
            alt="image"
          />
        </div>
        <div class="content-box__article">
          <div class="content-box__title-wrapper">
            <h2 class="content-box__title">history of agency</h2>
          </div>
          <Content>
              <p class="home-header__content">
                Porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi modi tempora incidunt ut labore.
              </p>
          </Content>
          <Button>read more</Button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import MenuPanel from "../MenuPanel.vue";
import Button from "../Button.vue";
import Content from "../Content.vue";

export default {
  name: "Header",
  components: {
    Button,
    MenuPanel,
    Content,
  },
};
</script>

<style lang="scss">
.home-header {
  background-image: url("../../../assets/images/bgHome.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  &__container {
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
  &__subtitle {
    @include text($H16, 400, $base-color);
    text-align: center;
    line-height: 1.5;
    margin: 0 auto;
    max-width: 540px;
    margin-bottom: 125px;
    font-family: $secondary-font;
  }
  &__content {
    max-width: 522px;
  }
}
.content-box {
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
  &__article {
    @include flex(center, flex-end, column);
  }
  &__title-wrapper {
    width: 100%;
  }
  &__title {
    @include text($H30, 700, $base-color);
    text-transform: uppercase;
    margin-bottom: 25px;
    text-align: left;
  }
}
</style>