  <template>
  <nav class="burger-menu">
    <router-link class="nav__link burger-menu__link" to="/">Home</router-link>
    <router-link class="nav__link burger-menu__link" to="/about"
      >About us</router-link
    >
    <router-link class="nav__link burger-menu__link" to="/services"
      >Services</router-link
    >
    <router-link class="nav__link burger-menu__link" to="/#portfolio"
      >Portfolio</router-link
    >
    <router-link class="nav__link burger-menu__link" to="/blog">Blog</router-link>
    <router-link class="nav__link burger-menu__link" to="/contact"
      >Contact us</router-link
    >
  </nav>
</template>

<script>
export default {
  name: "BurgerMenu",
  components: {},
};
</script>

<style lang="scss">
.burger-menu {
  @include flex(flex-start, center, column);
  height: 100%;
  width: 320px;
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  background-color: rgb(63, 63, 65);
  overflow-x: hidden;
  padding-top: 90px;
  transition: 0.5s;
  &__link {
    text-transform: uppercase;
    margin-bottom: 20px;
    white-space: nowrap;
  }
}
</style>