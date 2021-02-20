<template>
  <section class="portfolio">
    <div class="portfolio__container">
      <Title
        id="portfolio"
        class="title-decoration portfolio__title"
        title="our portfolio"
      />
      <p class="title__description portfolio__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div class="main">
        <div class="main__menu">
          <h2 class="title portfolio-list__title">choose category</h2>
          <ul class="portfolio-list">
            <AppFilter
              class="portfolio-list__item"
              v-for="item in filters"
              :key="item.value"
              :checked="item.value === filter"
              :value="item.value"
              @change="filter = item.value"
              >{{ item.category }}</AppFilter
            >
          </ul>
        </div>
        <transition-group
          tag="ul"
          :class="{ gridFiltered: filter != 'all' }"
          class="main__grid portfolio-grid"
          name="flip"
        >
          <li
            class="portfolio-grid__item"
            v-for="image in filteredPortfolio"
            :key="image.id"
          >
            <img
              class="portfolio-grid__image"
              :src="image.imageUrl"
              :alt="image.category"
            />
          </li>
        </transition-group>
      </div>
    </div>
  </section>
</template>

<script>
import Title from "../common/Title";
import AppFilter from "./AppFilter";

export default {
  name: "Portfolio",
  components: {
    Title,
    AppFilter,
  },
  data() {
    return {
      filter: "all",
      filters: [
        { value: "all", category: "All" },
        { value: "web-design", category: "Web design" },
        { value: "graphic-design", category: "Graphic design" },
        { value: "fashion", category: "Fashion" },
        { value: "logo-design", category: "Logo design" },
        { value: "advertising", category: "Advertising" },
      ],
      portfolio: [
        {
          category: "Graphic-design",
          imageUrl: require("@/assets/images/Home/imageGrid1.png"),
        },
        {
          category: "Advertising",
          imageUrl: require("@/assets/images/Home/imageGrid2.png"),
        },
        {
          category: "Web-design",
          imageUrl: require("@/assets/images/Home/imageGrid3.png"),
        },
        {
          category: "Fashion",
          imageUrl: require("@/assets/images/Home/imageGrid4.png"),
        },
        {
          category: "Logo-design",
          imageUrl: require("@/assets/images/Home/imageGrid5.png"),
        },
        {
          category: "Fashion",
          imageUrl: require("@/assets/images/Home/imageGrid6.png"),
        },
        {
          category: "Fashion",
          imageUrl: require("@/assets/images/Home/imageGrid7.png"),
        },
        {
          category: "Graphic-design",
          imageUrl: require("@/assets/images/Home/imageGrid8.png"),
        },
        {
          category: "Advertising",
          imageUrl: require("@/assets/images/Home/imageGrid9.png"),
        },
      ].map((item, id) => ({ ...item, id: id + 1 })),
    };
  },
  computed: {
    filteredPortfolio() {
      return this.portfolio.filter(({ category }) => {
        return (
          this.filter === "all" ||
          category.toUpperCase() === this.filter.toUpperCase()
        );
      });
    },
  },
};
</script>

<style lang="scss">
.portfolio {
  &__container {
    @include flex(center, stretch, column);
    @include media {
      padding: 75px 0 150px;
    }
    padding: 30px 0 50px;
  }
  &__anchor {
    display: flex;
  }
  &__description {
    max-width: 765px;
  }
  &__title {
    margin: 0 auto;
    margin-bottom: 10px;
    @include media {
      margin-bottom: 25px;
    }
  }
}
.main {
  @include flex(space-between, center, column);
  @include media(700px) {
    @include flex(space-between, flex-start, row);
  }
  &__menu {
    margin-right: 0;
    @include media {
      margin-right: 110px;
    }
    min-width: 190px;
  }
  &__grid {
    @include flex(center, center, row);
    max-width: 100%;
    margin: 0 auto;
  }
}
.portfolio-list {
  @include flex(flex-start, flex-start, column);
  margin-bottom: 20px;
  @include media {
    margin-bottom: 0;
  }
  &__title {
    text-align: left;
    max-width: 167px;
    line-height: 1.6;
    margin-bottom: 0;
    @include media {
      margin-bottom: 40px;
      line-height: 1.9;
      margin-top: -13px;
    }
  }
  &__item {
    cursor: pointer;
    @include text($H14, 700, $base-color);
    text-transform: uppercase;
    margin-bottom: 0;
    &:not(:last-child) {
      margin-bottom: 15px;
      @include media {
        margin-bottom: 30px;
      }
    }
    &:not(:first-child) {
      margin-left: 20px;
    }
  }
}
.portfolio-grid {
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr;
  grid-template-areas:
    "item-1"
    "item-2"
    "item-3"
    "item-4"
    "item-5"
    "item-6"
    "item-7"
    "item-8"
    "item-9";
    @include media(400px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "item-1 item-2"
      "item-1 item-2"
      "item-3 item-4"
      "item-3 item-6"
      "item-5 item-7"
      "item-5 item-7"
      "item-8 item-9"
      "item-8 item-11"
      "item-10 item-11";
  }
  @include media {
    grid-template-rows: repeat(9, 0.5fr);
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    grid-template-areas:
      "item-1 item-2 item-3"
      "item-1 item-2 item-3"
      "item-4 item-5 item-3"
      "item-4 item-5 item-3"
      "item-4 item-5 item-6"
      "item-7 item-5 item-6"
      "item-7 item-8 item-9"
      "item-7 item-8 item-9"
      "item-7 item-8 item-10";
  }
  align-items: stretch;
  &__item {
    @include flex;
    &:nth-child(1) {
      grid-area: item-1;
    }
    &:nth-child(2) {
      grid-area: item-2;
    }
    &:nth-child(3) {
      grid-area: item-3;
    }
    &:nth-child(4) {
      grid-area: item-4;
    }
    &:nth-child(5) {
      grid-area: item-5;
    }
    &:nth-child(6) {
      grid-area: item-6;
    }
    &:nth-child(7) {
      grid-area: item-7;
    }
    &:nth-child(8) {
      grid-area: item-8;
    }
    &:nth-child(9) {
      grid-area: item-9;
    }
  }
  &__image {
    object-fit: cover;
    width: 100%;
    height: auto;
  }
}
.gridFiltered {
  @include flex(center, center);
  flex-wrap: wrap;
}
.portfolio-grid__item {
  transition: all 0.5s;
}
.portfolio-grid-enter,
.portfolio-grid-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.portfolio-grid-leave-active {
  position: absolute;
}
.flip {
  transition: all 0.2s;
}
.flip-enter,
.flip-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.flip-move {
  transition: transform 0.4s;
}
.flip-leave-active {
  position: absolute;
}
</style>