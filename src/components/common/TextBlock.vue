<template>
  <div class="textblock">
    <Title><slot name="title" /></Title>
    <Subtitle><slot name="subtitle" /></Subtitle>
    <Content><slot name="content" /></Content>
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
};
</script>

<style lang="scss">
.textblock {
  @include flex(flex-start, flex-start, column);
  &:not(:last-child) {
    margin-right: 35px;
  }
}
</style>
