<template>
  <section>
    <HomeHeader />
    <TheContainer>
      <WhyChoose />
      <Portfolio />
    </TheContainer>
    <TheSubscribe />
    <TheFooter />
  </section>
</template>

<script>
import HomeHeader from "../components/Home/HomeHeader.vue";
import WhyChoose from "../components/Home/WhyChoose.vue";
import Portfolio from "../components/Home/Portfolio.vue";

export default {
  components: {
    HomeHeader,
    WhyChoose,
    Portfolio,
  },
};
</script>