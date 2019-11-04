<template>
  <main class="main" role="main">
    <template v-if="$slots.header">
      <div class="main__header">
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

<style lang="scss">
.main {
  display: flex;
  flex: 1;
  flex-direction: column;

  &__header {
    position: relative;
    padding-top: $spacing--lg * 2;
    padding-bottom: $spacing--lg;

    &:last-child {
      display: flex;
      flex: 1;
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
