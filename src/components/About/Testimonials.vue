<template>
  <section class="testimonials">
    <div class="testimonials__container">
      <div class="testimonials__main box" v-scroll="handleScroll">
        <Slider class="testimonials__slider" />
        <div class="testimonials-grid">
          <div
            class="testimonials-grid__image-wrapper"
            v-for="logo in logo"
            :key="logo.id"
          >
            <img
              class="testimonials-grid__image"
              :src="logo.image"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Slider from "./Slider.vue";
export default {
  components: { Slider },
  name: "Testimonials",
  data() {
    return {
      logo: [
        {
          id: 1,
          image: require("@/assets/images/About/testimonials1.png"),
        },
        {
          id: 2,
          image: require("@/assets/images/About/testimonials2.png"),
        },
        {
          id: 3,
          image: require("@/assets/images/About/testimonials3.png"),
        },
        {
          id: 4,
          image: require("@/assets/images/About/testimonials4.png"),
        },
        {
          id: 5,
          image: require("@/assets/images/About/testimonials5.png"),
        },
        {
          id: 6,
          image: require("@/assets/images/About/testimonials6.png"),
        },
      ],
    };
  },
  methods: {
    handleScroll: function (evt, el) {
      if (window.scrollY > 2100) {
        el.setAttribute("style", "opacity: 1;");
      }
      return window.scrollY > 2399;
    },
  },
};
</script>

<style lang="scss">
.testimonials {
  &__container {
    @include flex(center, center, row);
    padding: 30px 0;
    @include media {
      padding: 150px 0;
    }
  }
  &__main {
    opacity: 0;
    width: 100%;
    @include flex(space-between, center, column);
    @include media {
      @include flex(space-between, center, row);
      flex-grow: 1;
    }
  }
  &__slider {
    margin: 0 20px 50px;
    @include media {
      margin: 0 20px 40px;
    }
  }
}
.testimonials-grid {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  flex-grow: 1;
  align-items: center;
  grid-template-areas:
    "image-1 image-2 image-3"
    "image-4 image-5 image-6";
  @include media {
    grid-gap: 30px;
  }
  &__image {
    object-fit: cover;
    max-width: 100%;
    height: auto;
  }
  &__image-wrapper {
    @include flex(center, center);
    border: 1px solid $input-color;
    padding: 5px 0;
    max-width: 165px;
    width: 100%;
    height: 100px;
    &:nth-child(1) {
      grid-area: image-1;
    }
    &:nth-child(2) {
      grid-area: image-2;
    }
    &:nth-child(3) {
      grid-area: image-3;
    }
    &:nth-child(4) {
      grid-area: image-4;
    }
    &:nth-child(5) {
      grid-area: image-5;
    }
    &:nth-child(6) {
      grid-area: image-6;
    }
    @include hover {
      cursor: pointer;
      -webkit-transform: rotateZ(7deg);
      -ms-transform: rotateZ(7deg);
      transform: rotateZ(7deg);
      transition: transform .3s ease;
    }
  }
}
</style>