<template>
  <section class="benefits">
    <div class="container benefits__container">
      <Title class="benefits__title">some benefits</Title>
      <p class="title__description benefits__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div class="benefits__main">
        <div v-for="benefit in benefits" :key="benefit.title">
          <Benefit
          :name="benefit.icon">
            <template #title>
              {{ benefit.title }}
            </template>
            <template #content>
              {{ benefit.content }}
            </template>
          </Benefit>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from "../Title.vue";
import Benefit from "./Benefit.vue";

export default {
  name: "Benefits",
  components: {
    Title,
    Benefit,
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
    padding: 150px 24px 15px;
  }
  &__title {
    @include text($H30, 700, $base-color);
    position: relative;
    &:after {
      position: absolute;
      z-index: -1;
      content: "";
      width: 70px;
      height: 20px;
      background-color: $G90;
      left: 0;
      bottom: -1px;
    }
  }
  &__description {
    max-width: 717px;
  }
  &__main {
    @include flex(center, center, row, wrap);
    margin-bottom: -65px;
  }
}
</style>