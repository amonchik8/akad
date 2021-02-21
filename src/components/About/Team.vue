<template>
  <section class="team">
    <div class="team__container">
      <Title class="team__title box" title="the dream team" v-scroll="handleScroll" />
      <p class="title__description team__description box" v-scroll="handleScroll">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div class="team-grid box" v-scroll="handleScroll">
        <img
          class="team-grid__image"
          v-for="person in team"
          :key="person.id"
          :src="person.photo"
          alt="image"
        />
      </div>
      <div class="panel">
        <p class="panel__description">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod
        </p>
        <Button>read more</Button>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "../common/Button.vue";
import Title from "../common/Title.vue";

export default {
  name: "Team",
  components: {
    Title,
    Button,
  },
  data() {
    return {
      team: [
        {
          id: 1,
          photo: require("@/assets/images/About/team1.png"),
        },
        {
          id: 2,
          photo: require("@/assets/images/About/team2.png"),
        },
        {
          id: 3,
          photo: require("@/assets/images/About/team3.png"),
        },
        {
          id: 4,
          photo: require("@/assets/images/About/team4.png"),
        },
        {
          id: 5,
          photo: require("@/assets/images/About/team5.png"),
        },
        {
          id: 6,
          photo: require("@/assets/images/About/team6.png"),
        },
        {
          id: 7,
          photo: require("@/assets/images/About/team7.png"),
        },
        {
          id: 8,
          photo: require("@/assets/images/About/team8.png"),
        },
      ],
    };
  },
  methods: {
    handleScroll: function (evt, el) {
      if (window.scrollY > 950) {
        el.setAttribute("style", "opacity: 1;");
      }
      return window.scrollY > 1599;
    },
  },
};
</script>

<style lang="scss">
.team {
  &__container {
    @include flex(center, center, column);
    padding-top: 55px;
    @include media {
      padding-top: 150px;
    }
  }
  &__title {
    opacity: 0;
    position: relative;
    &:after {
      position: absolute;
      z-index: -1;
      content: "";
      width: 66px;
      height: 20px;
      background-color: $G90;
      left: 0;
      bottom: -1px;
    }
  }
  &__description {
    opacity: 0;
    max-width: 717px;
  }
}
.team-grid {
  opacity: 0;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  margin-bottom: 15px;
  @include media {
    grid-gap: 30px;
    margin-bottom: 30px;
  }
  grid-template-areas:
    "image-1 image-2 image-3 image-4"
    "image-5 image-6 image-7 image-8";
  &__image {
    @include flex;
    object-fit: cover;
    width: 100%;
    height: auto;
    &:nth-child(1) {
      grid-area: image-1;
    }
    &:nth-child(2) {
      grid-area: image-2;
    }
    &:nth-child(3) {
      grid-area: image-3;
    }
    &:nth-child(4) {
      grid-area: image-4;
    }
    &:nth-child(5) {
      grid-area: image-5;
    }
    &:nth-child(6) {
      grid-area: image-6;
    }
    &:nth-child(7) {
      grid-area: image-7;
    }
    &:nth-child(8) {
      grid-area: image-8;
    }
  }
}
.panel {
  @include flex(space-between, center, column);
  padding: 25px 15px;
  @include media {
    @include flex(space-between, center, row);
    padding: 50px 30px;
  }
  width: 100%;
  background-color: rgba(96, 96, 110, 0.1);
  &__description {
    @include text($H18, 400, $base-color);
    font-family: $secondary-font;
    font-style: italic;
    margin-bottom: 10px;
    @include media {
    margin-bottom: 0;
  }
  }
}
</style>