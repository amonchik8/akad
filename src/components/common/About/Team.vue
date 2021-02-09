<template>
  <section class="team">
    <div class="team__container">
      <Title class="team__title">the dream team</Title>
      <p class="title__description team__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div class="team-grid">
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
import Button from "../Button.vue";
import Title from "../Title.vue";

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
};
</script>

<style lang="scss">
.team {
  &__container {
    @include flex(center, center, column);
    padding-top: 150px;
  }
  &__title {
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
    max-width: 717px;
  }
}
.team-grid {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  margin-bottom: 30px;
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
  @include flex(space-between, center, row);
  padding: 50px 30px;
  width: 100%;
  background-color: rgba(96, 96, 110, 0.1);
  &__description {
      @include text($H18, 400, $base-color);
      font-family: $secondary-font;
      font-style: italic;
  }
}
</style>