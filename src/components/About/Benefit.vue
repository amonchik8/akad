<template>
  <div class="benefit">
    <div class="benefit__title">
      <div class="benefit__icon-wrapper">
        <ion-icon
          :name="name"
          class="benefit__icon"
        ></ion-icon>
      </div>
      <Title class="benefit__title animate__animated animate__backInLeft"><slot name="title" /></Title>
    </div>
    <Content class="benefit__content"><slot name="content" /></Content>
  </div>
</template>

<script>
import Content from "../common/Content.vue";
import Title from "../common/Title.vue";

export default {
  components: { Title, Content },
  name: "Benefit",
  props: {
    name: String 
  }
};
</script>

<style lang="scss">
.benefit {
  @include flex(center, flex-start, column);
  max-width: 362px;
  padding: 0 12px;
  margin-bottom: 65px;
  &__title {
    @include flex(center, center, row);
    @include text($H18, 700, $base-color);
    margin-bottom: 5px;
  }
  &__icon-wrapper {
    @include size(40px);
    @include flex(center, center);
    margin-right: 20px;
    background-color: $G90;
    margin-bottom: 5px;
  }
  &__icon {
    @include text($H30, 400, $N0);
  }
}
</style>