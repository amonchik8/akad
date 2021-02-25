<template>
  <header class="home-header">
    <MenuPanel class="home-header__panel" />
    <div class="home-header__container">
      <div class="home-header__title-wrapper">
        <div class="home-header__decor">we`re</div>
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
        <div class="history__info">
          <Title
            class="history__title title-decoration title-decoration--history"
            title="HISTORY OF AGENCY"
          />
          <Content
            >"Porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
            enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi modi tempora
            incidunt ut labore."</Content
          >
          <Button class="history__button">read more</Button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import MenuPanel from "../common/MenuPanel.vue";
import Button from "../common/Button.vue";
import Title from "../common/Title.vue";
import Content from "../common/Content.vue";

export default {
  name: "HomeHeader",
  components: {
    Button,
    MenuPanel,
    Title,
    Content,
  },
};
</script>

<style lang="scss">
.home-header {
  background-image: url("../../assets/images/Home/bgHome.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  &__container {
    max-width: 1188px;
    width: 100%;
    margin: 0 auto;
    padding: 20px 12px 30px;
    @include media {
      padding: 45px 24px 75px;
    }
  }
  &__panel {
    background-color: $N0;
    width: 100%;
    z-index: 2000;
    position: fixed;
    padding: 20px 12px;
    @include media {
      padding: 30px 24px;
    }
  }
  &__title-wrapper {
    margin-top: 100px;
    @include media {
      padding: 40px 24px 0;
      margin-top: 190px;
    }
  }
  &__title {
    @include text($H48, 700, $base-color);
    border: 10px solid $base-color;
    text-transform: uppercase;
    max-width: max-content;
    text-align: center;
    margin: 0 auto;
    padding: 12.5px 0;
    @include media(506px) {
      padding: 12.5px 39.5px;
    }
    margin-bottom: 30px;
  }
  &__decor {
    @include flex(center, center, column);
    width: 100px;
    height: 30px;
    margin: 0 auto;
    text-transform: uppercase;
    @include text($H18, 700, $base-color);
    line-height: 1;
    background-color: $G90;
  }
  &__description {
    @include text($H16, 400, $base-color);
    text-align: center;
    line-height: 1.5;
    margin: 0 auto;
    max-width: 540px;
    margin-bottom: 25px;
    font-family: $secondary-font;
    @include media {
      margin-bottom: 125px;
    }
  }
}
.history {
  @include flex(center, center, row, wrap);
  @include media {
    @include flex(space-between, center, row);
  }
  &__title {
    @include media {
      margin-right: auto;
    }
  }
  &__image-wrapper {
    width: 100%;
    max-width: 450px;
    position: relative;
    margin-bottom: 10px;
    @include media {
      width: 40.3%;
      padding-bottom: 35.2%;
      margin-bottom: 0;
    }
  }
  &__image {
    z-index: 2;
    width: 100%;
    @include media {
      position: absolute;
    }
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
  }
  &__info {
    @include flex(center, center, column);
    max-width: 700px;
    @include media {
      @include flex(flex-end, flex-end, column);
      max-width: 450px;
    }
  }
}
</style>