<template>
  <section>
    <Header title="contact us" subtitle="home / contact" />
    <TheContainer>
      <ContactMain></ContactMain>
    </TheContainer>
    <TheSubscribe></TheSubscribe>
    <TheFooter></TheFooter>
  </section>
</template>

<script>
import ContactMain from "../components/common/Contact/ContactMain.vue";
import TheContainer from "../components/TheContainer.vue";
export default {
  name: "Contact",
  components: { ContactMain, TheContainer },
};
</script>