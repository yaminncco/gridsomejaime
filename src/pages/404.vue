<template>
  <Layout>
    <template #header>
      <div :style="{'text-align' : 'center'}">
        <h1 class="main__title h0">404 Page not found.</h1>
        <p class="main__excerpt">Sorry, the page you were looking for could not be found.</p>
        <p><g-link :to="'/'" class="a">Back to the homepage</g-link></p>
      </div>
    </template>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: '404 Page not found'
  }
}
</script>