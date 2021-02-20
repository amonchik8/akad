<template>
  <section class="about">
    <div class="about__container">
      <TextBlock
        class="about__text-block"
        title="about us"
        subtitle="We are awesome"
        content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi."
      />
      <TextBlock
        class="about__text-block"
        title="What We Do"
        subtitle="Creative & Digital"
        content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi."
      />
    </div>
  </section>
</template>

<script>
import TextBlock from "../common/TextBlock.vue";

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
    @include flex(space-between, center, column);
    padding: 30px 0 15px;
    @include media {
      @include flex(space-between, center, row);
      padding: 150px 0 15px;
    }
  }
  &__subtitle {
    @include text($H14, 800, $base-color);
    margin-bottom: 30px;
  }
  &__text-block {
    @include flex(space-between, center, column);
    max-width: 526px;
    @include media {
      @include flex(space-between, flex-start, column);
    }
    &:not(:last-child) {
      @include media {
        margin-right: 35px;
        margin-bottom: 0;
      }
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
}
</style>