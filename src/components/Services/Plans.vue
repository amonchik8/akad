<template>
  <section v-scroll="handleScroll" class="plans__container box">
    <Title class="title-decoration" title="pricing plans" />
    <p class="title__description plans__description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <div class="plans__main">
      <Subscription title="basic" price="$35.99 monthly">
        <what-we-do-list-item value="Lorem ipsum dolor sit amet" />
        <what-we-do-list-item value="Consectetuer adipiscing elit" />
        <what-we-do-list-item value="Sed diam nonummy" />
        <what-we-do-list-item value="Nibh euismod tincidunt" />
        <what-we-do-list-item value="Ut laoreet dolore" />
        <what-we-do-list-item value="Magna aliquam erat volutpat" />
      </Subscription>
      <Subscription title="advanced" price="$55.99 Monthly">
        <what-we-do-list-item value="Lorem ipsum dolor sit amet" />
        <what-we-do-list-item value="Consectetuer adipiscing elit" />
        <what-we-do-list-item value="Sed diam nonummy" />
        <what-we-do-list-item value="Nibh euismod tincidunt" />
        <what-we-do-list-item value="Ut laoreet dolore" />
        <what-we-do-list-item value="Magna aliquam erat volutpat" />
      </Subscription>
      <Subscription title="smart" price="$75.99 Monthly">
        <what-we-do-list-item value="Lorem ipsum dolor sit amet" />
        <what-we-do-list-item value="Consectetuer adipiscing elit" />
        <what-we-do-list-item value="Sed diam nonummy" />
        <what-we-do-list-item value="Nibh euismod tincidunt" />
        <what-we-do-list-item value="Ut laoreet dolore" />
        <what-we-do-list-item value="Magna aliquam erat volutpat" />
      </Subscription>
    </div>
  </section>
</template>

<script>
import Title from "../common/Title.vue";
import Subscription from "./Subscription.vue";
import WhatWeDoListItem from "./WhatWeDoListItem.vue";

export default {
  name: "Plans",
  components: {
    Title,
    Subscription,
    WhatWeDoListItem,
  },
  methods: {
    handleScroll: function (evt, el) {
      if (window.scrollY > 859) {
        el.setAttribute("style", "opacity: 1;");
      }
      return window.scrollY > 1099;
    },
  },
};
</script>

<style lang="scss">
.plans {
  &__container {
    opacity: 0;
    @include flex(center, center, column);
    padding-bottom: 20px;
    @include media {
      padding: 75px 0 150px;
    }
  }
  &__description {
    max-width: 719px;
  }
  &__main {
    @include flex(center, center, row, wrap);
    width: 100%;
  }
}
</style>