<template>
  <section class="benefits">
    <div class="benefits__container">
      <Title class="title-decoration benefits__title box" title="some benefits" v-scroll="handleScroll" />
      <p class="title__description benefits__description box" v-scroll="handleScroll">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div class="benefits__main">
        <div v-for="benefit in benefits" :key="benefit.title">
          <Benefit
            :name="benefit.icon"
            :title="benefit.title"
            :content="benefit.content"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from "../common/Title.vue";
import Benefit from "./Benefit.vue";

export default {
  name: "Benefits",
  components: {
    Title,
    Benefit,
  },
  methods: {
    handleScroll: function (evt, el) {
      if (window.scrollY > 300) {
        el.setAttribute("style", "opacity: 1;");
      }
      return window.scrollY > 1099;
    },
  },
  data() {
    return {
      benefits: [
        {
          icon: "phone-portrait-outline",
          title: "FULLY RESPONSIVE",
          content:
            "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eleifend suscipit enim, eu commodo neque molestie vitae.",
        },
        {
          icon: "infinite-outline",
          title: "UNLIMITED OPTIONS",
          content:
            "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eleifend suscipit enim, eu commodo neque molestie vitae.",
        },
        {
          icon: "logo-wordpress",
          title: "WORDPRESS",
          content:
            "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eleifend suscipit enim, eu commodo neque molestie vitae.",
        },
        {
          icon: "cart-outline",
          title: "e-commerce",
          content:
            "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eleifend suscipit enim, eu commodo neque molestie vitae.",
        },
        {
          icon: "options-outline",
          title: "CUSTOMIZABLE DESIGN",
          content:
            "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eleifend suscipit enim, eu commodo neque molestie vitae.",
        },
        {
          icon: "construct-outline",
          title: "SUPPORT",
          content:
            "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eleifend suscipit enim, eu commodo neque molestie vitae.",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.benefits {
  &__container {
    @include flex(center, center, column);
    padding: 10px 0 15px;
    @include media {
      padding: 150px 0 15px;
    }
  }
  &__title {
    opacity: 0;
  }
  &__description {
    max-width: 717px;
    opacity: 0;
  }
  &__main {
    @include flex(center, center, row, wrap);
    margin-bottom: -65px;
  }
}
</style>