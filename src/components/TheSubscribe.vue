<template>
  <section class="subscribe">
    <div class="subscribe__container">
      <div class="subscribe__main">
        <div class="subscribe__title-wrapper">
          <h2 class="subscribe__title">
            YOU THINK WE'RE COOL ? LET'S WORK TOGETHER
          </h2>
          <button class="button subscribe__button">get in touch</button>
        </div>
        <div class="subscribe__form">
          <h3 class="subscribe__form-title">
            STAY INFORMED WITH OUR NEWSLETTER
          </h3>
          <p class="subscribe__form-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <form class="form" @submit.prevent="onSubmit">
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
            <Button :disabled="disabled" class="form__button">send</Button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "./common/Button.vue";
import Input from "./common/Input.vue";
export default {
  name: "TheSubscribe",
  components: {
    Button,
    Input,
  },
  data() {
    return {
      email: "",
      password: "",
      emailHasError: false,
      passwordHasError: false,
    };
  },
  computed: {
    emailValid() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.email).toLowerCase());
    },
    passwordValid() {
      return this.password.length >= 4;
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
    passwordErrorMessage() {
      switch (true) {
        case !this.password:
          return "Enter password";
        case !this.passwordValid:
          return "Invalid format too short";
        default:
          return "";
      }
    },
    disabled() {
      return !this.emailValid;
    },
  },
  methods: {
    onSubmit() {
      alert("Send");
    },
  },
};
</script>

<style lang="scss">
.subscribe {
  &__container {
    max-width: 1188px;
    width: 100%;
    margin: 0 auto;
    padding: 50px 24px;
  }
  background-color: $G90;
  &__main {
    @include flex(space-between, flex-start, row);
  }
  &__title {
    @include text($H30, 700, $N0);
    line-height: 1.6;
    margin-bottom: 20px;
    max-width: 490px;
  }
  &__button {
    color: $G90;
    background-color: $N0;
  }
  &__form {
    @include flex(flex-start, stretch, column);
    padding: 15px 25px 20px;
    background-color: $N0;
  }
  &__form-title {
    @include text($H24, 700, $base-color);
    line-height: 1.5;
    margin-bottom: 15px;
    max-width: 336px;
  }
  &__form-subtitle {
    @include text($H16, 400, $secondary-color);
    line-height: 1.5;
    font-family: $secondary-font;
    margin-bottom: 25px;
    max-width: 488px;
  }
}
.form {
  @include flex(flex-start, flex-end, row);
  max-width: 100%;
  &__button {
    padding: 17px 48.05px;
  }
}
</style>