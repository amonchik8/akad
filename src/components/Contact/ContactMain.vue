<template>
  <section class="contact">
    <div class="contact__container">
      <div class="contact__main">
        <form class="contact-form" @submit.prevent="onSubmit">
          <div class="contact-form__input-wrapper">
            <Input
              class="contact-form__name-input"
              v-model="name"
              :has-error="nameHasError"
              :error-message="nameErrorMessage"
              :valid="nameValid"
              label="e"
              type="name"
              placeholder="your name"
              required
              @blur="nameHasError = !nameValid"
              @focus="nameHasError = false"
            />
            <Input
              v-model="email"
              :has-error="emailHasError"
              :error-message="emailErrorMessage"
              :valid="emailValid"
              label="e"
              type="email"
              placeholder="your email"
              required
              @blur="emailHasError = !emailValid"
              @focus="emailHasError = false"
            />
          </div>
          <Input
            class="contact-form__input"
            v-model="object"
            label="e"
            type="text"
            placeholder="object"
          />
          <Textarea
            class="contact-form__textarea"
            v-model="textarea"
            :has-error="textareaHasError"
            :error-message="textareaErrorMessage"
            :valid="textareaValid"
            label="e"
            type="textarea"
            placeholder="message"
            required
            @blur="textareaHasError = !textareaValid"
            @focus="textareaHasError = false"
          ></Textarea>
          <Button class="contact-form__button" :disabled="disabled"
            >Send</Button
          >
        </form>
        <div class="contact__info box" v-scroll="handleScroll">
          <h3 class="contact__title">contact info</h3>
          <Content class="contact__content"
            >Lorem ipsum dolor sit amet, conse adipisicing elit. Libero incidunt
            quod ab mollitia quia dolorum conse.</Content
          >
          <ul class="contact__list">
            <li class="contact__list-item">
              13D, Functional apartament, Unique colony,
            </li>
            <li class="contact__list-item">Agadir 86360</li>
            <li class="contact__list-item">+212 124-566-780</li>
            <li class="contact__list-item">+212 124-566-780</li>
            <li class="contact__list-item contact__list-item--bold">
              email@website.com
            </li>
          </ul>
          <Social class="contact__social" />
        </div>
      </div>
      <div class="map">
        <Map />
      </div>
    </div>
  </section>
</template>

<script>
import Button from "../common/Button.vue";
import Content from "../common/Content.vue";
import Input from "../common/Input.vue";
import Social from "../common/Social.vue";
import Textarea from "../common/Textarea.vue";
import Map from "./Map.vue";
import { Icon } from "leaflet";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default {
  components: {
    Button,
    Content,
    Social,
    Input,
    Textarea,
    Map,
  },
  name: "ContactMain",
  data() {
    return {
      email: "",
      name: "",
      textarea: "",
      object: "",
      emailHasError: false,
      nameHasError: false,
      textareaHasError: false,
    };
  },
  computed: {
    emailValid() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.email).toLowerCase());
    },
    nameValid() {
      return this.name.length >= 2;
    },
    textareaValid() {
      return this.textarea.length >= 10;
    },
    emailErrorMessage() {
      switch (true) {
        case !this.email:
          return "Enter email";
        case !this.emailValid:
          return "Invalid email";
        default:
          return "";
      }
    },
    nameErrorMessage() {
      switch (true) {
        case !this.name:
          return "Enter name";
        case !this.nameValid:
          return "Invalid format too short";
        default:
          return "";
      }
    },
    textareaErrorMessage() {
      switch (true) {
        case !this.textarea:
          return "Enter message";
        case !this.textareaValid:
          return "Invalid format too short";
        default:
          return "";
      }
    },
    disabled() {
      return !this.nameValid || !this.emailValid || !this.textareaValid;
    },
  },
  methods: {
    onSubmit() {
      alert("Send");
    },
    handleScroll: function (evt, el) {
      if (window.scrollY > 450) {
        el.setAttribute("style", "opacity: 1;");
      }
      return window.scrollY > 1399;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.myMap?.mapObject.ANY_LEAFLET_MAP_METHOD();
    });
  },
};
</script>

<style lang="scss">
.contact {
  &__container {
    @include flex(space-between, center, column);
    padding: 20px 0;
    @include media {
      @include flex(space-between, center, row);
      padding: 150px 0;
    }
  }
  &__main {
    @include media {
      max-width: 560px;
      margin-right: 30px;
    }
  }
  &__title {
    @include text($H18, 700, $base-color);
    text-transform: uppercase;
    margin-bottom: 10px;
    @include media {
      margin-bottom: 20px;
    }
  }
  &__social {
    @include flex(flex-start);
    margin-bottom: 20px;
    @include media {
      margin-bottom: 0;
    }
  }
  &__content {
    color: $secondary-color;
    margin-bottom: 10px;
    @include media {
      margin-bottom: 20px;
    }
  }
  &__list {
    margin-bottom: 20px;
    @include media {
      margin-bottom: 30px;
    }
  }
  &__list-item {
    @include text($H14, 400, $secondary-color);
    &:not(:last-child) {
      margin-bottom: 15px;
    }
    &--bold {
      font-weight: 700;
    }
  }
  &__info {
    @include media {
      @include flex(flex-start, flex-start, column);
      opacity: 0;
    }
  }
}
.contact-form {
  margin-bottom: 20px;
  @include flex(center, flex-start, column);
  width: 100%;
  @include media {
    max-width: 555px;
    margin-bottom: 100px;
  }
  &__input-wrapper {
    @include flex(center, center, column);
    width: 100%;
    @include media {
      @include flex(center, center, row);
      margin-bottom: 10px;
    }
  }
  &__name-input {
    margin-right: 0;
    @include media {
      margin-right: 30px;
    }
  }
  &__input {
    margin-bottom: 0;
    @include media {
      margin-bottom: 10px;
    }
  }
  &__textarea {
    margin-bottom: 10px;
    @include media {
      margin-bottom: 28px;
    }
  }
  &__button {
    padding: 17px 63.05px;
  }
}
.map {
  width: 100%;
  @include media {
    max-width: 555px;
  }
}
</style>