<template>
  <div class="burger">
    <button
      @click="visible = !visible"
      :class="{ burger__active: visible, burger__btnActive: visible }"
      class="burger__btn"
    >
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
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.burger-leave {
  animation: burgerLeave 0.7s ease;
}
.burger-enter {
  animation: burgerEnter 0.7s ease;
}
.burger {
  &__active {
    transition: opacity 0.7s ease;
    // opacity: 0;
  }
  &__btn {
    margin-top: 10px;
    cursor: pointer;
    @include size(36px);
    position: relative;
  }
  &__btnActive {
    cursor: auto;
  }
  &__line {
    transition: all 0.7s ease;
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