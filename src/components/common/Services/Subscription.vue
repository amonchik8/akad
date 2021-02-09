<template>
    <div class="subscription">
<Title></Title>
<div class="subscription__price"></div>
<what-we-do-list-item />
<Button>get started</Button>
    </div>
</template>

<script>
import Button from '../Button.vue'
import Title from '../Title.vue'
import WhatWeDoListItem from './WhatWeDoListItem.vue'
export default {
  components: { Title, WhatWeDoListItem, Button },
    name: 'Subscription',
}
</script>

<style lang="scss">
.subscription {
    @include flex(flex-start, center, column);
}
</style>