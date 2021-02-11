<template>
  <section class="contact">
    <div class="contact__container">
      <div class="contact__main">
        <form class="form-contact" action="">
          <div class="form-contact__input-wrapper">
            <Input
              v-model="email"
              :has-error="emailHasError"
              :error-message="emailErrorMessage"
              :valid="emailValid"
              label="e"
              type="email"
              placeholder="your name"
              required
              @blur="emailHasError = !emailValid"
              @focus="emailHasError = false"
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
            v-model="email"
            :has-error="emailHasError"
            :error-message="emailErrorMessage"
            :valid="emailValid"
            label="e"
            type="email"
            placeholder="object"
            required
            @blur="emailHasError = !emailValid"
            @focus="emailHasError = false"
          />
          <textarea name="" id="" cols="30" rows="10"> </textarea>
          <Button>Send</Button>
        </form>
        <div class="contact__info">
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
            <li class="contact__list-item contact__list-item--bold">email@website.com</li>
          </ul>
          <Social class="contact__social"></Social>
        </div>
      </div>
      <div class="map"></div>
    </div>
  </section>
</template>

<script>
import Button from "../Button.vue";
import Content from "../Content.vue";
import Input from "../Input.vue";
import Social from "../Social.vue";

export default {
  components: { Button, Content, Social, Input },
  name: "ContactMain",
};
</script>

<style lang="scss">
.contact {
  &__container {
    @include flex(center, center, row);
    padding: 150px 0;
  }
  &__main {
    max-width: 560px;
  }
  &__title {
    @include text($H18, 700, $base-color);
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  &__social {
    @include flex(flex-start);
  }
  &__content {
    color: $secondary-color;
    margin-bottom: 20px;
  }
  &__list {
    margin-bottom: 30px;
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
}
.form-contact {
  margin-bottom: 100px;
  @include flex(center, flex-start, column);
  &__input-wrapper {
    @include flex(space-between, center, row);
    width: 100%;
  }
}
</style>