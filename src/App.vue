<template>
  <div id="app">
    <TheContainer></TheContainer>
    <router-view/>
  </div>
</template>

<script>
import TheContainer from "./components/TheContainer";

export default {
  components: {
    TheContainer,
  },
};
</script>