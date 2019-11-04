<template>
  <footer class="footer">
    <div class="container container--lg">
      <span class="footer__copyright">© {{ new Date().getFullYear() }} Copyright {{ $static.metadata.siteName }}. All rights reserved.</span>
    </div>
  </footer>
</template>

<static-query>
query MetaData {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.footer {
  padding-top: $spacing;
  padding-bottom: $spacing;

  &__copyright {
    display: block;
    text-align: center;
    @include font-size($font-size--sm);
  }
}
</style>
