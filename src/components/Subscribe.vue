<template>
  <section class="subscribe">
    <div class="container subscribe__container">
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
          <form class="form" action="">
            <input class="form__input" type="text" />
            <button class="form__button">send</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.subscribe {
  padding: 50px 24px;
  background-color: $G90;
  &__main {
      @include flex(space-between, flex-start, row);
  }
  &__title {
      @include text($H30, 700, $N0);
      line-height: 1.6;
      margin-bottom: 30px;
  }
  &__button {
      color: $G90;
      background-color: $N0;
  }
  &__form {
      padding: 20px 25px 20px 20px;
      background-color: $N0;
  }
  &__form-title {
      @include text($H24, 700, $base-color);
      line-height: 1.5;
      margin-bottom: 15px;
      max-width: 336px;
  }
  &__form-subtitle {
      @include text($H16, 400, $base-color);
      line-height: 1.5;
      font-family: $secondary-font;
      margin-bottom: 25px;
      max-width: 488px;
  }
}
.form {
    width: 100%;
    display: flex;
}
</style>