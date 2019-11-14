<template>
  <div class="layout">
    <the-header :breakpoint="768"/>
    <the-main :coverImage="coverImage">
      <template #header>
        <slot name="header"/>
      </template>
      <slot/>
    </the-main>
    <the-footer/>
  </div>
</template>

<script>
import TheHeader from '~/layouts/partials/TheHeader.vue'
import TheMain from '~/layouts/partials/TheMain.vue'
import TheFooter from '~/layouts/partials/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheMain,
    TheFooter
  },
  props: {
    coverImage: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
