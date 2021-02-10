<template>
  <section class="contact">
    <div class="contact__container">
      <div class="contact__main">
        <form class="form" action="">
          <div class="form__input-wrapper">
            <input type="text" />
            <input type="email" />
          </div>
          <input type="text" />
          <textarea name="" id="" cols="30" rows="10"> </textarea>
          <Button>Send</Button>
        </form>
        <div class="contact__info">
            <h3></h3>
            <Content></Content>
            <ul class="contact__list">
                <li></li>
            </ul>
            <Social></Social>
        </div>
      </div>
      <div class="map"></div>
    </div>
  </section>
</template>

<script>
import Button from "../Button.vue";
import Content from '../Content.vue';
import Social from '../Social.vue';

export default {
  components: { Button, Content, Social },
  name: "ContactMain",
};
</script>

<style lang="scss">
</style>