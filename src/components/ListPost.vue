<template>
    <div class="post__list">
        <post-item v-for="{ node } in posts" :key="node.id" :post="node" />
    </div>
</template>

<script>
import PostItem from '~/components/PostItem.vue'

export default {
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
    components: {
        PostItem
    }
}
</script>