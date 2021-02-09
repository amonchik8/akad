<template>
  <section>
    <Header>
      <template #title> about </template>
      <template #subtitle> home / about </template>
    </Header>
    <TheContainer>
      <Main></Main>
      <Benefits></Benefits>
      <Team></Team>
      <Testimonials></Testimonials>
    </TheContainer>
    <TheSubscribe></TheSubscribe>
    <TheFooter></TheFooter>
  </section>
</template>

<script>
import Main from "../components/common/About/Main.vue";
import Benefits from "../components/common/About/Benefits.vue";
import Team from "../components/common/About/Team.vue";
import Testimonials from "../components/common/About/Testimonials.vue";

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
