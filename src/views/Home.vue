<template>
  <section>
    <HomeHeader></HomeHeader>
    <TheContainer>
      <WhyChoose></WhyChoose>
      <Portfolio></Portfolio>
    </TheContainer>
    <TheSubscribe></TheSubscribe>
    <TheFooter></TheFooter>
  </section>
</template>

<script>
import HomeHeader from "../components/common/Home/HomeHeader.vue";
import WhyChoose from "../components/common/Home/WhyChoose.vue";
import Portfolio from "../components/common/Home/Portfolio.vue";

export default {
  components: {
    HomeHeader,
    WhyChoose,
    Portfolio,
  },
};
</script>