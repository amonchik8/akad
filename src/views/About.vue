<template>
  <section>
    <Header title="about" subtitle="home / about" />
    <TheContainer>
      <Main />
      <Benefits />
      <Team />
      <Testimonials />
    </TheContainer>
    <TheSubscribe />
    <TheFooter />
  </section>
</template>

<script>
import Main from "../components/About/Main.vue";
import Benefits from "../components/About/Benefits.vue";
import Team from "../components/About/Team.vue";
import Testimonials from "../components/About/Testimonials.vue";

export default {
  name: "About",
  components: {
    Main,
    Benefits,
    Team,
    Testimonials,
  },
};
</script>
