<template>
  <Layout>
    <template #header>
      <h1 class="main__title h0">Tag: {{$page.tag.title}}</h1>
    </template>
    <list-post :posts="$page.tag.posts.edges"></list-post>
    <pager class="pager" :info="$page.tag.posts.pageInfo" :nextLabel="'next'" :prevLabel="'prev'" :linkClass="'pager__link'"></pager>
  </Layout>
</template>

<page-query>
query TagPosts ($path: String!, $page: Int) {
  tag (path: $path) {
    id
    path
    title
    posts: belongsTo (perPage: 8, page: $page) @paginate {
      edges {
        node {
          ... on Post {
            id
            path
            title
            excerpt
            content
            date (format: "MMMM D, YYYY")
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
      }
      pageInfo {
        totalPages
        currentPage
      }
    }
  }
}
</page-query>

<script>
import ListPost from '~/components/ListPost.vue'
import { Pager } from 'gridsome'

export default {
  components: {
    ListPost,
    Pager
  },
  metaInfo() {
    return {
      title: `Tag: ${this.$page.tag.title}`
    }
  }
}
</script>