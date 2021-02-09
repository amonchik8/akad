<template>
  <section class="why-choose">
    <div class="why-choose__container">
      <Title class="title-decoration">why choose us</Title>
      <p class="title__description why-choose__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div class="block">
        <ul class="why-choose-list">
          <div class="why-choose-list__row">
            <li class="why-choose-list__item why-choose-list--col">
              <ion-icon
                class="why-choose__icon"
                name="infinite-outline"
              ></ion-icon>
              <h3 class="why-choose-list__item-title">unlimited options</h3>
              <span class="why-choose-list__item-body">Branding</span>
              <span class="why-choose-list__item-body"
                >Design & Copywriting</span
              >
              <span class="why-choose-list__item-body"
                >Concept development</span
              >
              <span class="why-choose-list__item-body">User Experience</span>
            </li>
            <li class="why-choose-list__item">
              <ion-icon
                class="why-choose__icon"
                name="shuffle-outline"
              ></ion-icon>
              <h3 class="why-choose-list__item-title">DESIGN & DEVELOPMENT</h3>
              <span class="why-choose-list__item-body"
                >Information architecture</span
              >
              <span class="why-choose-list__item-body">Interface design</span>
              <span class="why-choose-list__item-body">Product Design</span>
              <span class="why-choose-list__item-body"
                >Integrated ad Companies</span
              >
            </li>
          </div>
          <div class="why-choose-list__row">
            <li class="why-choose-list__item why-choose-list--col">
              <ion-icon class="why-choose__icon" name="cart-outline"></ion-icon>
              <h3 class="why-choose-list__item-title">e-commerce</h3>
              <span class="why-choose-list__item-body">Prototyping</span>
              <span class="why-choose-list__item-body"
                >Technical Consulting</span
              >
              <span class="why-choose-list__item-body">Web applications</span>
              <span class="why-choose-list__item-body">Quality testing</span>
            </li>
            <li class="why-choose-list__item">
              <ion-icon
                class="why-choose__icon"
                name="options-outline"
              ></ion-icon>
              <h3 class="why-choose-list__item-title">CUSTOMIZABLE DESIGN</h3>
              <span class="why-choose-list__item-body"
                >Information architecture</span
              >
              <span class="why-choose-list__item-body">Interface design</span>
              <span class="why-choose-list__item-body">Product Design</span>
              <span class="why-choose-list__item-body"
                >Integrated ad Companies</span
              >
            </li>
          </div>
        </ul>
        <div class="block__image-wrapper">
          <img
            class="block__image"
            src="@/assets/images/imageWhyChoose.png"
            alt="image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from "../Title";

export default {
  name: "WhyChoose",
  components: {
    Title,
  },
};
</script>

<style lang="scss">
.why-choose {
  &__container {
    @include flex(center, center, column);
    padding: 75px 0;
  }
  @include flex(center, center, column);
  &__icon {
    @include text($H36, 400, $base-color);
    margin-bottom: 10px;
  }
  &__description {
    max-width: 717px;
  }
}
.why-choose-list {
  @include flex(space-between, center, row, wrap);
  &--col {
    margin-right: 135px;
  }
  &__row {
    @include flex(flex-start, center, row);
    &:not(:last-of-type) {
      margin-bottom: 60px;
    }
  }
  &__item-title {
    @include text($H18, 700, $base-color);
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  &__item-body {
    @include text($H14, 400, #999);
    text-transform: uppercase;
    display: block;
    line-height: 2.14;
  }
}
.block {
  @include flex(space-between, center, row);
  &__image-wrapper {
    width: 63%;
    padding-bottom: 36.5%;
    position: relative;
  }
  &__image {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    max-height: 414px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
  }
}
</style>