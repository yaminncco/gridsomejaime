<template>
	<article class="post">
    <ul class="post__meta">
      <li v-if="post.category"><g-link class="post__category" :to="post.category.path" tag="a">{{post.category.title}}</g-link></li>
      <li><span class="post__date">{{post.date}}</span></li>
    </ul>
		<h2 class="post__title">
			<g-link :to="post.path" tag="a">{{post.title}}</g-link>
		</h2>
    <p v-if="post.excerpt" class="post__excerpt">{{truncate}}</p>
	</article>
</template>

<script>
export default {
  props: {
    post: {
      required: true,
      type: Object
    }
  },
  computed: {
    truncate() {
      const maxLength = 150
      return this.post.excerpt.length > maxLength ? `${this.post.excerpt.substring(0, maxLength)}...` : this.post.excerpt
    }
  }
};
</script>