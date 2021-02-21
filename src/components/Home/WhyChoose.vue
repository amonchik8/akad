<template>
  <section class="why-choose">
    <div class="why-choose__container">
      <Title
        class="title-decoration box why-choose__title"
        title="why choose"
        v-scroll="handleScroll"
      />
      <p
        class="title__description why-choose__description box"
        v-scroll="handleScroll"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <WhyChooseBody />
    </div>
  </section>
</template>

<script>
import Title from "../common/Title";
import WhyChooseBody from './WhyChooseBody.vue';

export default {
  name: "WhyChoose",
  components: {
    Title,
    WhyChooseBody,
  },
  methods: {
    handleScroll: function (evt, el) {
      if (window.scrollY > 300) {
        el.setAttribute("style", "opacity: 1;");
      }
      return window.scrollY > 599;
    },
  },
};
</script>

<style lang="scss">
.why-choose {
  &__container {
    @include flex(center, center, column);
    @include media {
      padding: 75px 0;
    }
    padding: 30px 0;
  }
  &__title {
    opacity: 0;
  }
  &__icon {
    @include text($H36, 400, $base-color);
    margin-bottom: 10px;
  }
  &__description {
    opacity: 0;
    max-width: 717px;
  }
}
</style>