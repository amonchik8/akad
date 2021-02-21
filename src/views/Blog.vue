<template>
  <section>
    <Header title="blog posts" subtitle="home / blog" />
    <TheContainer>
      <Blog />
    </TheContainer>
    <TheSubscribe />
    <TheFooter />
  </section>
</template>

<script>
import Blog from "../components/Blog/Blog.vue";
export default {
  name: "",
  components: { Blog },
};
</script>