<template>
  <div class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li class="glide__slide">
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
        </li>
        <li class="glide__slide">
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
        </li>
        <li class="glide__slide">
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
        </li>
        <li class="glide__slide">
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
        </li>
      </ul>
      <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
          prev
        </button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
          next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Glide from "@glidejs/glide";
import WhyChooseListItem from "./WhyChooseListItem.vue";

export default {
  name: "TextSlider",
  components: {
    WhyChooseListItem,
  },
  mounted() {
    new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      perView: 2,
      autoplay: 2000,
      breakpoints: {
        600: {
          perView: 1,
        },
      },
    }).mount();
  },
};
</script>

<style lang="scss">
.glide * {
  box-sizing: inherit;
}
.glide {
  position: relative;
  max-width: 512px;
  width: 100%;
  box-sizing: border-box;
  &__arrow {
    position: absolute;
    display: block;
    top: 10%;
    z-index: 20;
    color: $base-color;
    text-transform: uppercase;
    padding: 9px 12px;
    background-color: $G90;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 4px;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
    text-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transform: translateY(-50%);
    line-height: 1;
  }
  &__arrow:focus {
    outline: none;
  }
  &__arrow:hover {
    border-color: white;
  }
  &__arrow--left {
    right: 10px;
    top: 95px;
  }
  &__arrow--right {
    right: 10px;
  }
  &__track {
    overflow: hidden;
  }
  &__slides {
    position: relative;
    width: 100%;
    list-style: none;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    touch-action: pan-Y;
    overflow: hidden;
    padding: 0;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
    will-change: transform;
    z-index: 1;
  }
  &__slides--dragging {
    user-select: none;
  }
  &__slide {
    width: 100%;
    height: 100%;
    @include flex(center, center, column);
    flex-shrink: 0;
    white-space: normal;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
  }
  &__slide a {
    user-select: none;
    -webkit-user-drag: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
  &__arrows {
    -webkit-touch-callout: none;
    user-select: none;
  }
  &--rtl {
    direction: rtl;
  }
  &--swipeable {
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
  }
  &--dragging {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
  }
}
</style>