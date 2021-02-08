<template>
  <section>
    <Header>
        <template #title>
            our services
        </template>
        <template #subtitle>
            home / services
        </template>
    </Header>
    <Subscribe></Subscribe>
    <Footer></Footer>
  </section>
</template>

<script>
import Footer from "../components/common/Footer.vue";
import Subscribe from "../components/common/Subscribe.vue";
import Header from "../components/common/Header.vue";

export default {
  name: "Services",
  components: {
    Footer,
    Subscribe,
    Header,
  },
};
</script>
