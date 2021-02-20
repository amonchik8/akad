<template>
  <section class="benefits">
    <div class="benefits__container">
      <Title class="title-decoration" title="some benefits"/>
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
import Title from "../common/Title.vue";
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
    padding: 30px 0 15px;
    @include media {
      padding: 150px 0 15px;
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