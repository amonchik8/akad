<template>
  <div class="textblock">
    <Title class="title-decoration" :title=title />
    <Subtitle class="textblock__subtitle">{{ subtitle }}</Subtitle>
    <Content>{{ content }}</Content>
  </div>
</template>

<script>
import Subtitle from "./Subtitle.vue";
import Content from "./Content.vue";
import Title from "./Title.vue";

export default {
  name: "TextBlock",
  components: {
    Title,
    Subtitle,
    Content,
  },
  props: {
    title: String,
    subtitle: String,
    content: String,
  }
};
</script>

<style lang="scss">
.textblock {
  @include flex(flex-start, flex-start, column);
  &__subtitle {
    margin-bottom: 10px;
  }
}
</style>
