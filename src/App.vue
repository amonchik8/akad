<template>
  <div id="app">
    <TheContainer></TheContainer>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/blog">Blog</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/services">Services</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
import TheContainer from "./components/TheContainer";

export default {
  components: {
    TheContainer,
  },
};
</script>