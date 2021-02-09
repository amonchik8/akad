<template>
  <div class="we-do">
    <Title class="we-do__title title-decoration title-decoration--icon"><slot /></Title>
    <h3 class="we-do__subtitle">{{ subtitle }}</h3>
    <Content class="we-do__content">{{ content }}</Content>
  </div>
</template>

<script>
import Content from "../Content.vue";
import Title from "../Title.vue";

export default {
  components: { Content, Title },
  name: "WeDo",
  props: {
    title: String,
    subtitle: String,
    content: String,
  },
};
</script>

<style lang="scss">
.we-do {
    @include flex(center, center, column);
    &__title {
        @include text($H48, 400, $base-color);
        margin-bottom: 10px;
    }
    &__subtitle {
        @include text($H18, 700, $base-color);
        margin-bottom: 10px;
    }
    &__content {
        text-align: center;
        max-width: 225px;
    }
}
</style>