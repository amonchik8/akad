<template>
  <section class="home">
    <Header></Header>
    <WhyChoose></WhyChoose>
    <Portfolio></Portfolio>
    <Subscribe></Subscribe>
    <Footer></Footer>
  </section>
</template>

<script>
import Header from "../components/common/Home/Header.vue";
import WhyChoose from "../components/common/Home/WhyChoose.vue";
import Portfolio from "../components/common/Home/Portfolio.vue";
import Subscribe from "../components/common/Home/Subscribe.vue";
import Footer from "../components/common/Home/Footer.vue";

export default {
  components: {
    Header,
    WhyChoose,
    Portfolio,
    Subscribe,
    Footer,
  },
};
</script>

<style lang="scss">
</style>