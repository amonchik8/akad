<template>
  <section class="portfolio">
    <div class="container portfolio__container">
      <Title>our portfolio</Title>
      <p class="title__subtitle portfolio__subtitle">
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
        <div class="main__grid">
          <ul class="portfolio-grid" :class="{ gridFiltered: filter != 'all' }">
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
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from "../Title";
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
        { value: "web-design", category: "Web-design" },
        { value: "graphic-design", category: "Graphic-design" },
        { value: "fashion", category: "Fashion" },
        { value: "logo-design", category: "Logo-design" },
        { value: "advertising", category: "Advertising" },
      ],
      portfolio: [
        {
          category: "Graphic-design",
          imageUrl: require("@/assets/images/imageGrid1.png"),
        },
        {
          category: "Graphic-design",
          imageUrl: require("@/assets/images/imageGrid2.png"),
        },
        {
          category: "Web-design",
          imageUrl: require("@/assets/images/imageGrid3.png"),
        },
        {
          category: "Fashion",
          imageUrl: require("@/assets/images/imageGrid4.png"),
        },
        {
          category: "Logo-design",
          imageUrl: require("@/assets/images/imageGrid5.png"),
        },
        {
          category: "Fashion",
          imageUrl: require("@/assets/images/imageGrid6.png"),
        },
        {
          category: "Fashion",
          imageUrl: require("@/assets/images/imageGrid7.png"),
        },
        {
          category: "Advertising",
          imageUrl: require("@/assets/images/imageGrid8.png"),
        },
        {
          category: "Advertising",
          imageUrl: require("@/assets/images/imageGrid9.png"),
        },
      ],
    };
  },
  computed: {
    filteredPortfolio() {
      return this.portfolio.filter(({ category }) => {
        switch (this.filter) {
          case "web-design":
            return category === "Web-design";
          case "graphic-design":
            return category === "Graphic-design";
          case "fashion":
            return category === "Fashion";
          case "logo-design":
            return category === "Logo-design";
          case "advertising":
            return category === "Advertising";
          default:
            return true;
        }
      });
    },
  },
};
</script>

<style lang="scss">
.portfolio {
  &__container {
    padding: 75px 24px 150px;
  }
  &__subtitle {
    max-width: 765px;
  }
}
.main {
  @include flex(space-between, flex-start, row);
  &__menu {
    margin-right: 30px;
  }
  &__grid {
    @include flex(center, center, row);
    width: 100%;
  }
}
.portfolio-list {
  @include flex(flex-start, flex-start, column);
  &__title {
    margin-bottom: 50px;
    text-align: left;
    max-width: 167px;
    line-height: 2;
  }
  &__item {
    cursor: pointer;
    @include text($H14, 700, $base-color);
    text-transform: uppercase;
    margin-bottom: 0;
    &:not(:last-child) {
      margin-bottom: 30px;
    }
    &:not(:first-child) {
      margin-left: 20px;
    }
  }
}
.portfolio-grid {
  display: grid;
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
}
</style>