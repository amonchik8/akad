<template>
  <section>
    <Header title="our services" subtitle="home / services" />
    <TheContainer>
      <WhatWeDo />
      <Plans />
    </TheContainer>
    <TheSubscribe />
    <TheFooter />
  </section>
</template>

<script>
import Plans from '../components/Services/Plans.vue';
import WhatWeDo from "../components/Services/WhatWeDo.vue";

export default {
  name: "Services",
  components: { WhatWeDo, Plans },
};
</script>
