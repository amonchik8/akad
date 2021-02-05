<template>
  <section class="home">
    <Header></Header>
    <WhyChoose></WhyChoose>
    <Portfolio></Portfolio>
    <Subscribe></Subscribe>
  </section>
</template>

<script>
import Header from "../components/common/Home/Header";
import WhyChoose from "../components/common/Home/WhyChoose";
import Portfolio from "../components/common/Home/Portfolio";
import Subscribe from "../components/common/Home/Subscribe";

export default {
  components: {
    Header,
    WhyChoose,
    Portfolio,
    Subscribe,
  },
};
</script>

<style lang="scss">
</style>