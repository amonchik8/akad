<template>
  <section>
    <HomeHeader></HomeHeader>
    <WhyChoose></WhyChoose>
    <Portfolio></Portfolio>
    <Subscribe></Subscribe>
    <Footer></Footer>
  </section>
</template>

<script>
import HomeHeader from "../components/common/Home/HomeHeader.vue";
import WhyChoose from "../components/common/Home/WhyChoose.vue";
import Portfolio from "../components/common/Home/Portfolio.vue";
import Subscribe from "../components/common/Subscribe.vue";
import Footer from "../components/common/Footer.vue";

export default {
  components: {
    HomeHeader,
    WhyChoose,
    Portfolio,
    Subscribe,
    Footer,
  },
};
</script>