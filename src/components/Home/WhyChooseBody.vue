<template>
  <div class="why-choose-body" v-scroll="handleScroll">
    <div class="why-choose-list">
      <why-choose-list-item
        title="unlimited options"
        body="Branding
Design & Copywriting
Concept development
User Experience"
      >
        <template #icon>
          <ion-icon
            class="why-choose-list__icon"
            name="infinite-outline"
          ></ion-icon>
        </template>
      </why-choose-list-item>
      <why-choose-list-item
        title="DESIGN & DEVELOPMENT"
        body="Information architecture
Interface design
Product Design
Integrated ad Companies"
      >
        <template #icon>
          <ion-icon
            class="why-choose-list__icon"
            name="shuffle-outline"
          ></ion-icon>
        </template>
      </why-choose-list-item>
      <why-choose-list-item
        title="e-commerce"
        body="Prototyping
Technical Consulting
Web applications
Quality testing"
      >
        <template #icon>
          <ion-icon
            class="why-choose-list__icon"
            name="cart-outline"
          ></ion-icon>
        </template>
      </why-choose-list-item>
      <why-choose-list-item
        title="CUSTOMIZABLE DESIGN"
        body="Information architecture
Interface design
Product Design
Integrated ad Companies"
      >
        <template #icon>
          <ion-icon
            class="why-choose-list__icon"
            name="options-outline"
          ></ion-icon>
        </template>
      </why-choose-list-item>
    </div>
    <TextSlider class="why-choose-body__slider" />
    <div class="why-choose-body__image-wrapper">
      <img
        class="why-choose-body__image"
        src="@/assets/images/Home/imageWhyChoose.png"
        alt="image"
      />
    </div>
  </div>
</template>

<script>
import TextSlider from "./TextSlider.vue";
import WhyChooseListItem from "./WhyChooseListItem.vue";
export default {
  components: { WhyChooseListItem, TextSlider },
  name: "WhyChooseBody",
  methods: {
    handleScroll: function (evt, el) {
      if (window.scrollY > 400) {
        el.setAttribute("style", "opacity: 1;");
      }
      return window.scrollY > 599;
    },
  },
};
</script>

<style lang="scss">
.why-choose-list {
  display: none;
  margin-bottom: 20px;
  @include media(730px) {
    margin-right: 30px;
  }
  @include media {
    @include flex(space-between, center, row, wrap);
    margin-bottom: 0;
    display: flex;
    margin-right: 5px;
  }
  @include media(1123px) {
    @include flex(space-between, center, row, wrap);
    margin-right: 65px;
  }
  &__icon {
    @include text($H36, 400, $base-color);
    margin-bottom: 10px;
  }
}
.why-choose-body {
  width: 100%;
  opacity: 0;
  @include flex(center, center, column);
  @include media {
    @include flex(space-between, center, row);
  }
  &__slider {
    display: block;
    margin-bottom: 10px;
    @include media {
      display: none;
    }
  }
  &__image-wrapper {
    width: 100%;
    max-width: 460px;
    position: relative;
    @include media {
      max-width: 453px;
      padding-bottom: 36.1%;
      margin-bottom: 0;
    }
  }
  &__image {
    z-index: 2;
    width: 100%;
    max-height: 412px;
    @include media {
      position: absolute;
    }
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
  }
}
</style>