<template>
  <section>
    <Header title="contact us" subtitle="home / contact" />
    <TheContainer>
      <ContactMain />
    </TheContainer>
    <TheSubscribe />
    <TheFooter />
  </section>
</template>

<script>
import ContactMain from "../components/Contact/ContactMain.vue";

export default {
  name: "Contact",
  components: { ContactMain },
};
</script>