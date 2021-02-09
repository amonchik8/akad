<template>
  <h2 class="title"><slot /></h2>
</template>

<script>
export default {
  name: "Title",
};
</script>

<style lang="scss">
.title {
  @include text($H30, 700, $base-color);
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 25px;
  &__description {
    text-align: center;
    @include text($H14, 400, $base-color);
    font-family: $secondary-font;
    line-height: 1.7;
    margin: 0 auto 100px;
  }
}
.title-decoration {
  position: relative;
  z-index: 1;
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
  &--icon {
    &:after {
      width: 50px;
      left: -10px;
      bottom: 14px;
    }
  }
}
</style>