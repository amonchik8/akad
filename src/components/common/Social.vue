<template>
  <div>
    <ul class="social">
      <li class="social__item">
        <a class="social__link" href=""
          ><ion-icon class="social__icon" name="logo-twitter"></ion-icon></a>
      </li>
      <li class="social__item">
        <a class="social__link" href=""
          ><ion-icon class="social__icon" name="logo-twitter"></ion-icon></a>
      </li>
      <li class="social__item">
        <a class="social__link" href=""
          ><ion-icon class="social__icon" name="logo-youtube"></ion-icon></a>
      </li>
      <li class="social__item">
        <a class="social__link" href=""
          ><ion-icon class="social__icon" name="logo-linkedin"></ion-icon></a>
      </li>
      <li class="social__item">
        <a class="social__link" href=""
          ><ion-icon class="social__icon" name="logo-pinterest"></ion-icon></a>
      </li>
      <li class="social__item">
        <a class="social__link" href=""
          ><ion-icon class="social__icon" name="logo-instagram"></ion-icon></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Social",
};
</script>

<style lang="scss">
.social {
    @include flex(flex-end);
    &__item {
        &:not(:last-child) {
            margin-right: 20px;
        }
    }
    &__icon {
       @include text($H18, 400, $secondary-color);
    }
}
</style>