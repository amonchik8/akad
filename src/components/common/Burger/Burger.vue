<template>
  <div class="burger">
    <button @click="$emit('toggle'), (visible = !visible)" class="burger__btn">
      <span :class="{ burger__lineTop: visible }" class="burger__line"></span>
      <span
        :class="{ burger__lineCenter: visible }"
        class="burger__line"
      ></span>
      <span
        :class="{ burger__lineBottom: visible }"
        class="burger__line"
      ></span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Burger",
  data() {
    return {
      visible: false,
    };
  },
};
</script>

<style lang="scss">
.burger {
  &__btn {
    z-index: 1020;
    margin-top: 10px;
    cursor: pointer;
    @include size(36px);
    position: relative;
  }
  &__line {
    transition: all 0.3s ease;
    position: absolute;
    width: 36px;
    height: 2px;
    background-color: $base-color;
    margin-bottom: 10px;
    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2) {
      width: 26px;
      top: 35%;
      transform: translateY(-50%);
    }
    &:nth-child(3) {
      bottom: 0;
    }
  }
  &__lineTop {
    transform: rotate(45deg) translateX(7px) translateY(10px);
  }
  &__lineCenter {
    opacity: 0;
  }
  &__lineBottom {
    transform: rotate(-45deg) translateX(7px) translateY(-10px);
  }
}
</style>