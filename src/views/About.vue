<template>
  <section>
    <Header></Header>
    <Main></Main>
    <Benefits></Benefits>
    <Subscribe></Subscribe>
    <Footer></Footer>
  </section>
</template>

<script>
import Footer from "../components/common/Footer.vue";
import Subscribe from "../components/common/Subscribe.vue";
import Header from '../components/common/Header.vue';
import Main from '../components/common/About/Main.vue';
import Benefits from '../components/common/About/Benefits.vue';

export default {
  name: "About",
  components: {
    Footer,
    Subscribe,
    Header,
    Main,
    Benefits,
  },
};
</script>
