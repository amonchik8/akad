<template>
  <section class="portfolio">
    <div class="portfolio__container">
      <Title id="portfolio" class="title-decoration portfolio__title" title="our portfolio" />
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
        <transition-group tag="div" class="main__grid" name="portfolio-grid">
          <ul
            class="portfolio-grid portfolio-grid-item"
            key="portfolio-grid"
            :class="{ gridFiltered: filter != 'all' }"
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
          </ul>
        </transition-group>
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
          category: "Graphic-design",
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
          category: "Advertising",
          imageUrl: require("@/assets/images/Home/imageGrid8.png"),
        },
        {
          category: "Advertising",
          imageUrl: require("@/assets/images/Home/imageGrid9.png"),
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
    @include flex(center, stretch, column);
    padding: 75px 0 150px;
  }
  &__anchor {
    display: flex;
  }
  &__description {
    max-width: 765px;
  }
  &__title {
    margin: 0 auto;
    margin-bottom: 25px;
  }
}
.main {
  @include flex(space-between, flex-start, row);
  &__menu {
    margin-right: 110px;
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
  &__title {
    margin-top: -13px;
    margin-bottom: 40px;
    text-align: left;
    max-width: 167px;
    line-height: 1.9;
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
.portfolio-grid-item {
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
</style>