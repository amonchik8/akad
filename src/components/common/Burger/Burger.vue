<template>
  <div class="burger">
    <button @click="visible = !visible" class="burger__btn">
      <span class="burger__line"></span>
      <span class="burger__line"></span>
      <span class="burger__line"></span>
    </button>
    <transition
      enter-active-class="burger-enter"
      leave-active-class="burger-leave"
    >
      <BurgerMenu v-show="visible" class="burger__menu" />
    </transition>
  </div>
</template>

<script>
import BurgerMenu from "./BurgerMenu.vue";

export default {
  components: { BurgerMenu },
  name: "Burger",
  data() {
    return {
      visible: false,
    };
  },
};
</script>

<style lang="scss">
@keyframes burgerLeave {
  from {
    width: 320px;
  }
  to {
    width: 0;
  }
}
@keyframes burgerEnter {
  from {
    width: 0;
  }
  to {
    width: 320px;
  }
}
.burger-leave {
  animation: burgerLeave 0.7s ease;
}
.burger-enter {
  animation: burgerEnter 0.7s ease;
}
.burger {
  &__btn {
    margin-top: 10px;
    cursor: pointer;
    @include size(36px);
    position: relative;
  }
  &__line {
    cursor: pointer;
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
}
</style>