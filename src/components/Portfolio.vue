<template>
  <section class="portfolio">
    <div class="container portfolio__container">
      <Title>our portfolio</Title>
      <p class="title__subtitle portfolio__subtitle">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div class="main">
        <div class="main__menu">
          <h2 class="title portfolio-list__title">choose category</h2>
          <ul class="portfolio-list">
            <li class="portfolio-list__item">all</li>
            <li class="portfolio-list__item">webdesign</li>
            <li class="portfolio-list__item">graphic design</li>
            <li class="portfolio-list__item">fashion</li>
            <li class="portfolio-list__item">logo design</li>
            <li class="portfolio-list__item">advertising</li>
          </ul>
        </div>
        <div class="portfolio-grid">
          <img
            class="portfolio-grid__item"
            src="../assets/images/imageGrid1.png"
            alt="image"
          />
          <img
            class="portfolio-grid__item"
            src="../assets/images/imageGrid2.png"
            alt="image"
          />
          <img
            class="portfolio-grid__item"
            src="../assets/images/imageGrid3.png"
            alt="image"
          />
          <img
            class="portfolio-grid__item"
            src="../assets/images/imageGrid4.png"
            alt="image"
          />
          <img
            class="portfolio-grid__item"
            src="../assets/images/imageGrid5.png"
            alt="image"
          />
          <img
            class="portfolio-grid__item"
            src="../assets/images/imageGrid6.png"
            alt="image"
          />
          <img
            class="portfolio-grid__item"
            src="../assets/images/imageGrid7.png"
            alt="image"
          />
          <img
            class="portfolio-grid__item"
            src="../assets/images/imageGrid8.png"
            alt="image"
          />
          <img
            class="portfolio-grid__item"
            src="../assets/images/imageGrid9.png"
            alt="image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from "./Title";

export default {
  name: "Portfolio",
  components: {
    Title,
  },
};
</script>

<style lang="scss">
.portfolio {
  &__container {
    padding: 75px 24px 150px;
  }
  &__subtitle {
    max-width: 765px;
  }
}
.main {
  @include flex(space-between, flex-start, row);
}
.portfolio-list {
  &__title {
    margin-bottom: 50px;
    text-align: left;
    max-width: 167px;
    line-height: 2;
  }
  &__item {
    cursor: pointer;
    @include text($H14, 700, $base-color);
    text-transform: uppercase;
    margin-bottom: 0;
    &:not(:last-child) {
      margin-bottom: 30px;
    }
    &:not(:first-child) {
      margin-left: 20px;
    }
  }
}
.portfolio-grid {
  display: grid;
  grid-template-rows: repeat(9, 0.5fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  align-items: stretch;
  grid-template-areas:
    "item-1 item-2 item-3"
    "item-1 item-2 item-3"
    "item-4 item-5 item-3"
    "item-4 item-5 item-3"
    "item-4 item-5 item-6"
    "item-7 item-5 item-6"
    "item-7 item-8 item-9"
    "item-7 item-8 item-9"
    "item-7 item-8 item-10";
  &__item {
    object-fit: cover;
    width: 100%;
    height: auto;
    &:nth-child(1) {
      grid-area: item-1;
    }
    &:nth-child(2) {
      grid-area: item-2;
    }
    &:nth-child(3) {
      grid-area: item-3;
    }
    &:nth-child(4) {
      grid-area: item-4;
    }
    &:nth-child(5) {
      grid-area: item-5;
    }
    &:nth-child(6) {
      grid-area: item-6;
    }
    &:nth-child(7) {
      grid-area: item-7;
    }
    &:nth-child(8) {
      grid-area: item-8;
    }
    &:nth-child(9) {
      grid-area: item-9;
    }
  }
}
</style>