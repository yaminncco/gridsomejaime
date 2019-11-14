<template>
  <main class="main" role="main">
    <template v-if="$slots.header">
      <div class="main__header" :class="[coverImage && 'main__header--hascover']">
        <div v-if="coverImage" class="main__cover">
          <div class="main__cover-overlay"></div>
          <img class="main__cover-image" :src="coverImage.src" alt="">
        </div>
        <div class="container container--lg">
          <slot name="header"/>
        </div>
      </div>
    </template>
    <template v-if="$slots.default">
      <div class="main__body">
        <div class="container">
          <slot/>
        </div>
      </div>
    </template>
  </main>
</template>

<script>
export default {
  props: {
    coverImage: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss">
.main {
  display: flex;
  flex: 1;
  flex-direction: column;

  &__header {
    position: relative;
    padding-top: $spacing--lg * 2;
    padding-bottom: $spacing--lg;

    &:last-child,
    &--hascover {
      display: flex;
      flex: 1;
    }

    &--hascover {
      @media only screen and (min-width: $breakpoint--tablet) {
        min-height: 80vh;
      }
    }
  }

  &__cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    overflow: hidden;
  }

  &__cover-image {
    position: absolute;
    min-width: 100%;
    min-height: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50% , -50%);
    z-index: -1;
  }

  &__cover-overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(180deg, $background-body 2%, rgba($background-body, 0.6) 50%, $background-body 98%);
    [data-theme="dark"] & {
      background: linear-gradient(180deg, $background-body--dark 2%, rgba($background-body--dark, 0.6) 50%, $background-body--dark 98%);
    }
  }

  &__title {
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__excerpt {
    @include font-size($font-size--lg);
  }

  &__body {
    position: relative;
    padding-top: $spacing--lg;
    padding-bottom: $spacing--lg;

    &:first-child {
      padding-top: $spacing--lg * 2;
    }
  }
}
</style>
