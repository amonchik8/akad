<template>
  <section class="about">
    <div class="container about__container">
      <TextBlock>
        <template #title>
          <h2 class="about__title">about us</h2>
        </template>
        <template #subtitle>
          <h3 class="about__subtitle">We are awesome</h3>
        </template>
        <template #content>
          <p class="about__content">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi.
          </p>
        </template>
      </TextBlock>
      <TextBlock>
        <template #title>
          <h2 class="about__title">What We Do</h2>
        </template>
        <template #subtitle>
          <h3 class="about__subtitle">Creative & Digital</h3>
        </template>
        <template #content>
          <p class="about__content">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi.
          </p>
        </template>
      </TextBlock>
    </div>
  </section>
</template>

<script>
import TextBlock from "../TextBlock.vue";

export default {
  name: "Main",
  components: {
    TextBlock,
  },
};
</script>

<style lang="scss">
.about {
  &__container {
    @include flex(space-between, center, row);
    padding: 150px 24px 15px;
  }
  &__title {
    @include text($H30, 700, $base-color);
  }
  &__subtitle {
    @include text($H14, 800, $base-color);
    margin-bottom: 30px;
  }
  &__content {
    max-width: 526px;
  }
}
</style>