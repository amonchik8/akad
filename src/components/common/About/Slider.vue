<template>
  <div class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li class="glide__slide" v-for="user in testimonials" :key="user.name">
          <div class="glide__image-wrapper">
            <img class="glide__image" :src="user.avatar" alt="avatar" />
          </div>
          <Content class="glide__slide-content">
            {{ user.testimonial }}</Content
          >
          <div class="glide__slide-name">{{ user.name }}</div>
        </li>
      </ul>
      <div class="glide__bullets" data-glide-el="controls[nav]">
        <button class="glide__bullet" data-glide-dir="=0"></button>
        <button class="glide__bullet" data-glide-dir="=1"></button>
        <button class="glide__bullet" data-glide-dir="=2"></button>
        <button class="glide__bullet" data-glide-dir="=3"></button>
      </div>
    </div>
  </div>
</template>

<script>
import Glide from "@glidejs/glide";
import Content from "../Content.vue";

export default {
  components: { Content },
  name: "Slider",
  data() {
    return {
      testimonials: [
        {
          name: "Stormtrooper",
          avatar: require("@/assets/images/slideAvatarStormtrooper.png"),
          testimonial: `Let me see your identification. We don’t need to see his identification. These aren’t the droids we’re looking for. `,
        },
        {
          name: "Darth Maul",
          avatar: require("@/assets/images/slideAvatarDarthMaul.png"),
          testimonial: `At last we will reveal ourselves to the Jedi. At last we will have revenge.`,
        },
        {
          name: "Boba Fet",
          avatar: require("@/assets/images/slideAvatarBobaFett.png"),
          testimonial: `Put Captain Solo in the cargo hold.`,
        },
        {
          name: "Chewbacca",
          avatar: require("@/assets/images/slideAvatarChewbacca.png"),
          testimonial: `WWWRRRRRRGWWWRRRR. AARARRRGWWWH. RAWRGWAWGGR!`,
        },
      ],
    };
  },
  mounted() {
    new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      gap: 30,
    }).mount();
  },
};
</script>

<style lang="scss">
.glide * {
  box-sizing: inherit;
}
.glide {
  margin-bottom: 40px;
  position: relative;
  max-width: 512px;
  box-sizing: border-box;
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
  &__bullets {
    -webkit-touch-callout: none;
    user-select: none;
  }
  &--rtl {
    direction: rtl;
  }
  &__bullets {
    position: absolute;
    z-index: 2;
    bottom: -30px;
    left: 50%;
    display: inline-flex;
    list-style: none;
    transform: translateX(-50%);
  }
  &__bullet {
    background-color: $base-color;
    width: 16px;
    height: 5px;
    transition: all 0.2s ease;
    cursor: pointer;
    &:not(:last-child) {
      margin-right: 5px;
    }
  }
  &__bullet:focus {
    outline: none;
  }
  &__bullet:hover,
  &__bullet:focus {
    background-color: $G90;
  }
  &__bullet--active {
    background-color: $G90;
    width: 30px;
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
  &__slide-content {
    text-align: center;
    margin-bottom: 20px;
  }
  &__slide-name {
    @include text($H14, 700, $N0);
    text-transform: uppercase;
    background-color: $G90;
    padding: 7px;
  }
  &__image-wrapper {
    margin-bottom: 25px;
    z-index: 1;
  }
  &__image {
    @include size(84px);
  }
}
</style>