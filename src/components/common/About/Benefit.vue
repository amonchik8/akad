<template>
  <div class="benefit">
    <div class="benefit__title">
      <div class="benefit__icon-wrapper">icon</div>
      <Title class="benefit__title">FULLY RESPONSIVE</Title>
    </div>
    <Content class="benefit__content"
      >Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus. In eleifend suscipit enim, eu commodo neque molestie
      vitae.</Content
    >
  </div>
</template>

<script>
import Content from "../Content.vue";
import Title from "../Title.vue";
export default {
  components: { Title, Content },
  name: "Benefit",
};
</script>

<style lang="scss">
.benefit {
    &__title {
        @include text($H18, 700, $base-color);
    }
    &__icon-wrapper {
        background-color: $G90;
    }
    &__content {
        max-width: 358px;
    }
}
</style>