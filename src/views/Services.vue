<template>
  <section>
    <Header>
      <template #title> our services </template>
      <template #subtitle> home / services </template>
    </Header>
    <TheContainer>
      <WhatWeDo></WhatWeDo>
      <Plans></Plans>
    </TheContainer>
    <TheSubscribe></TheSubscribe>
    <TheFooter></TheFooter>
  </section>
</template>

<script>
import Plans from '../components/common/Services/Plans.vue';
import WhatWeDo from "../components/common/Services/WhatWeDo.vue";

export default {
  name: "Services",
  components: { WhatWeDo, Plans },
};
</script>
