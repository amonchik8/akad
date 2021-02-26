<template>
    <div class="we-do box">
      <IconTitle class="title-decoration title-decoration--icon"
        ><slot
      /></IconTitle>
      <h3 class="we-do__subtitle">{{ subtitle }}</h3>
      <Content class="we-do__content">{{ content }}</Content>
    </div>
</template>

<script>
import Content from "../common/Content.vue";
import IconTitle from "./IconTitle.vue";

export default {
  components: { Content, IconTitle },
  name: "WeDo",
  props: {
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
    text-align: center;
    margin-bottom: 10px;
  }
  &__content {
    text-align: center;
    max-width: 225px;
  }
}
</style>