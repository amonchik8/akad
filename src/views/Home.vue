<template>
  <section class="home">
    <HomeHeader></HomeHeader>
    <WhyChoose></WhyChoose>
    <Portfolio></Portfolio>
    <Subscribe></Subscribe>
  </section>
</template>

<script>
import HomeHeader from "../components/HomeHeader";
import WhyChoose from "../components/WhyChoose";
import Portfolio from "../components/Portfolio";
import Subscribe from "../components/Subscribe";

export default {
  components: {
    HomeHeader,
    WhyChoose,
    Portfolio,
    Subscribe,
  },
};
</script>

<style lang="scss">
</style>