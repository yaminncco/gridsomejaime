<template>
  <Layout>
    <list-post :posts="$page.posts.edges"></list-post>
    <pager class="pager" :info="$page.posts.pageInfo" :nextLabel="'next'" :prevLabel="'prev'" :linkClass="'pager__link'"></pager>
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (perPage: 2, page: $page) @paginate {
    edges {
      node {
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
    pageInfo {
      totalPages
      currentPage
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
      title: 'A simple Blog theme for Gridsome'
    }
  }
}
</script>
