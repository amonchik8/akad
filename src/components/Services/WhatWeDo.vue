<template>
  <section class="what-we-do__container">
    <Title class="title-decoration" title="what we do" />
    <p class="title__description what-we-do__description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <div class="what-we-do__main">
      <div class="what-we-do__content-wrapper">
        <Content class="what-we-do__content"
          >Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
          tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
          consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
          velit esse molestie consequat, vel illum dolore eu feugiat nulla
          facilisis at vero eros et accumsan.</Content
        >
        <div class="what-we-do__list-wrapper">
          <div class="what-we-do__list">
            <what-we-do-list-item value="Stunning on all screens" />
            <what-we-do-list-item value="Easy to customize" />
            <what-we-do-list-item value="Make a difference" />
            <what-we-do-list-item value="Imagine and create" />
            <what-we-do-list-item value="Unlimited possibilities" />
          </div>
          <div class="what-we-do__list">
            <what-we-do-list-item value="Remarkable style" />
            <what-we-do-list-item value="Captivating presentations" />
            <what-we-do-list-item value="Make tour portfolio pop" />
            <what-we-do-list-item value="Words thar matter" />
            <what-we-do-list-item value="Satisfied clients" />
          </div>
        </div>
      </div>
      <div class="what-we-do__banner">
        <img
          class="what-we-do__image"
          src="@/assets/images/Services/ServicesBanner.png"
          alt="image"
        />
      </div>
    </div>
    <div class="what-we-do__we-do">
      <WeDo class="what-we-do__we-do-item"
        subtitle="KEEP PULSE GOING"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ."
      ><ion-icon name="pulse-outline"></ion-icon></WeDo>
      <WeDo class="what-we-do__we-do-item"
        subtitle="PASS THE LIMITS"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ."
      ><ion-icon name="infinite-outline"></ion-icon></WeDo>
      <WeDo class="what-we-do__we-do-item"
        subtitle="GREAT IDEAS"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ."
      ><ion-icon name="bulb-outline"></ion-icon></WeDo>
      <WeDo class="what-we-do__we-do-item"
        subtitle="AWESOME SUPPORT"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ."
      ><ion-icon name="options-outline"></ion-icon></WeDo>
    </div>
  </section>
</template>

<script>
import Content from "../common/Content.vue";
import Title from "../common/Title";
import WeDo from "./WeDo.vue";
import WhatWeDoListItem from "./WhatWeDoListItem.vue";

export default {
  name: "WhatWeDo",
  components: {
    Title,
    Content,
    WhatWeDoListItem,
    WeDo,
  },
};
</script>

<style lang="scss">
.what-we-do {
  &__container {
    @include flex(center, center, column);
    padding: 25px 0;
    @include media {
      padding: 75px 0;
    }
  }
  &__description {
    max-width: 717px
  }
  &__main {
    @include flex(space-between, center, column);
    width: 100%;
    @include media {
      @include flex(space-between, flex-start, row);
    }
  }
  &__content-wrapper {
    @include flex(center, flex-start, column);
    max-width: 533px;
    margin-right: 0;
    @include media {
      margin-right: 35px;
      @include flex(flex-start, flex-start, column);
    }
  }
  &__content {
    margin-bottom: 10px;
    @include media {
      margin-bottom: 50px;
    }
  }
  &__list-wrapper {
    @include flex(space-between, center, column);
    width: 100%;
    margin-bottom: 20px;
    @include media(430px) {
      @include flex(space-between, center, row);
      
    }
    @include media {
      @include flex(flex-start, center, row);
      margin-bottom: 0;
    }
  }
  &__list {
    @include flex(flex-start, center, column);
    @include media(430px) {
      @include flex(flex-start, flex-start, column);
    }
    &:not(:last-child) {
      margin-right: 0;
      @include media(430px) {
      margin-bottom: 0;
    }
      margin-bottom: 20px;
      @include media {
        margin-right: 120px;
      }
    }
  }
  &__banner {
    position: relative;
    width: 100%;
    max-width: 550px;
    padding-bottom: 38.7%;
    margin-bottom: 20px;
  }
  &__image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  &__we-do {
    @include flex(center, center, row, wrap);
    width: 100%;
    @include media {
      @include flex(space-between, center, row, wrap);
      padding: 150px 0 0;
    }
  }
}
</style>