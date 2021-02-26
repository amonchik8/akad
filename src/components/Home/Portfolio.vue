<template>
  <section id="portfolio" class="portfolio">
    <div class="portfolio__container">
      <Title
        class="title-decoration portfolio__title box"
        v-scroll="handleScroll"
        title="our portfolio"
      />
      <p
        class="title__description portfolio__description box"
        v-scroll="handleScroll"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <PortfolioBody />
    </div>
  </section>
</template>

<script>
import Title from "../common/Title";
import PortfolioBody from "./PortfolioBody.vue";

export default {
  name: "Portfolio",
  components: {
    Title,
    PortfolioBody,
  },
  methods: {
    handleScroll: function (evt, el) {
      if (window.scrollY > 900) {
        el.setAttribute("style", "opacity: 1;");
      }
      return window.scrollY > 1399;
    },
  },
};
</script>

<style lang="scss">
.portfolio {
  &__container {
    @include flex(center, stretch, column);
    @include media {
      padding: 75px 0 150px;
    }
    padding: 30px 0 50px;
  }
  &__anchor {
    display: flex;
  }
  &__description {
    opacity: 0;
    max-width: 765px;
  }
  &__title {
    opacity: 0;
    margin: 0 auto;
    margin-bottom: 10px;
    @include media {
      margin-bottom: 25px;
    }
  }
}
</style>