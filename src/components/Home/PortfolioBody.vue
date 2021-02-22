<template>
  <div class="main box" v-scroll="handleScroll">
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
</template>

<script>
import AppFilter from "./AppFilter";

export default {
  components: { AppFilter },
  name: "PortfolioBody",
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
  methods: {
    handleScroll: function (evt, el) {
      if (window.scrollY > 1200) {
        el.setAttribute("style", "opacity: 1;");
      }
      return window.scrollY > 1699;
    },
  },
};
</script>

<style lang="scss">
.main {
  opacity: 0;
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
  @include flex(center, center, row, wrap);
  margin-bottom: 10px;
  @include media(700px) {
    @include flex(flex-start, flex-start, column);
  }
  @include media {
    margin-bottom: 0;
  }
  &__title {
    line-height: 1.6;
    margin-bottom: 0;
    @include media(700px) {
      text-align: left;
      max-width: 167px;
    }
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
    margin-bottom: 15px;
    text-align: center;
    @include media(700px) {
      margin-bottom: 0;
      &:not(:last-child) {
        margin-bottom: 15px;
      }
      &:not(:first-child) {
        margin-left: 20px;
      }
    }
    @include media {
      &:not(:last-child) {
        margin-bottom: 30px;
      }
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