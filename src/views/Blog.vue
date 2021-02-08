<template>
  <section>
    <Header>
        <template #title>
            blog posts
        </template>
        <template #subtitle>
            home / blog
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
  name: "Blog",
  components: {
    Footer,
    Subscribe,
    Header,
  },
};
</script>