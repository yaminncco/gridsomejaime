<template>
	<Layout class="layout__post" :coverImage="$page.post.cover_image">
    <template #header>
      <ul class="post__meta">
        <li v-if="$page.post.category"><g-link class="post__category" :to="$page.post.category.path" tag="a">{{$page.post.category.title}}</g-link></li>
        <li><span class="post__date">{{$page.post.date}}</span></li>
      </ul>
      <h1 class="main__title post__title">{{$page.post.title}}</h1>
    </template>
    <div class="post__content">
      <div class="markdown" v-html="$page.post.content"></div>
      <div v-if="$page.post.tags" class="post__tags">
        <span class="tags__label">Tags:</span>
        <g-link v-for="(tag, index) in $page.post.tags" :key="index" :to="tag.path" class="tags__item">{{tag.id}}</g-link>
      </div>
    </div>
	</Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post(path: $path) {
    id
    path
    title
    excerpt
    content
    date (format: "MMMM D, YYYY")
    cover_image (width: 1920, height: 720, quality: 90)
    tags {
      id
      path
      title
    }
    category {
      id
      path
      title
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  }
}
</script>
