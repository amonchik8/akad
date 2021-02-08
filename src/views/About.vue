<template>
  <section>
    <Header></Header>
    <Main></Main>
    <Benefits></Benefits>
    <Team></Team>
    <Testimonials></Testimonials>
    <Subscribe></Subscribe>
    <Footer></Footer>
  </section>
</template>

<script>
import Footer from "../components/common/Footer.vue";
import Subscribe from "../components/common/Subscribe.vue";
import Header from "../components/common/Header.vue";
import Main from "../components/common/About/Main.vue";
import Benefits from "../components/common/About/Benefits.vue";
import Team from "../components/common/About/Team.vue";
import Testimonials from "../components/common/About/Testimonials.vue";

export default {
  name: "About",
  components: {
    Footer,
    Subscribe,
    Header,
    Main,
    Benefits,
    Team,
    Testimonials
  },
};
</script>
