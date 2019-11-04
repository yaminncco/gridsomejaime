<template>
    <div class="logo">
        <g-link class="logo__link" tag="a" to="/" exact>{{ $static.metadata.siteName }}</g-link>
    </div>
</template>

<static-query>
query MetaData {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.logo {
    &__link {
        display: flex;
        align-items: center;
        font-weight: $font-weight--bold;
    }
}
</style>

