<template>
  <div>
    <div class="nav-mobile">
      <a class="logo" href="https://akad.vercel.app/">akad.</a>
      <Burger @toggle="onToggle" />
      <transition
        enter-active-class="burger-enter"
        leave-active-class="burger-leave"
      >
        <BurgerMenu v-show="visible" class="burger__menu" />
      </transition>
    </div>
  </div>
</template>

<script>
import Burger from "./Burger/Burger.vue";
import BurgerMenu from "./Burger/BurgerMenu.vue";

export default {
  components: { Burger, BurgerMenu },
  name: "MenuPanel",
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    onToggle() {
      this.visible = !this.visible;
    },
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
@keyframes burgerLeaveMobile {
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
}
@keyframes burgerEnterMobile {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.nav-mobile {
  .burger-leave {
    animation: burgerLeaveMobile 0.3s ease;
  }
  .burger-enter {
    animation: burgerEnterMobile 0.3s ease;
  }
  @include media {
    .burger-leave {
    animation: burgerLeave 0.3s ease;
  }
  .burger-enter {
    animation: burgerEnter 0.3s ease;
  }
  }
  
  max-width: 1172px;
  margin: 0 auto;
  @include flex(space-between, center);
  &__image {
    cursor: pointer;
  }
}
.logo {
  @include flex(space-between, center);
  text-transform: uppercase;
  @include text($H18, 700, $base-color);
}
</style>