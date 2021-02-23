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

.bm-burger-button {
  position: sticky;
  width: 30px;
  height: 30px;
  //   left: 36px;
  //   top: 36px;
  cursor: pointer;
}
.bm-burger-bars {
  background-color: $base-color;
}
.line-style {
  position: absolute;
  height: 10%;
  left: 0;
  right: 0;
}
.cross-style {
  position: absolute;
  top: 12px;
  right: 2px;
  cursor: pointer;
}
.bm-cross {
  background: #bdc3c7;
}
.bm-cross-button {
  height: 24px;
  width: 24px;
}
.bm-menu {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Stay on top */
  top: 0;
  left: 0;
  background-color: rgb(63, 63, 65); /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}

.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}
.bm-item-list {
  color: #b8b7ad;
  margin-left: 10%;
  font-size: 20px;
}
.bm-item-list > * {
  display: flex;
  text-decoration: none;
  padding: 0.7em;
}
.bm-item-list > * > span {
  margin-left: 10px;
  font-weight: 700;
  color: white;
}
</style>