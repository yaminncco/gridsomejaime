<template>
  <div class="read-progress" :style="{'width': `${widthPerc}%`}"></div>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: 0,
      contentEl: null,
      contentHeight: 0
    };
  },
  mounted() {
    this.contentEl = document.querySelector(".post__content")
    window.addEventListener("scroll", this.handleScroll)
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll)
  },
  methods: {
    initContentHeight() {
      this.contentHeight = this.contentEl.clientHeight + (window.pageYOffset + this.contentEl.getBoundingClientRect().top)
    },
    handleScroll() {
      this.scrollTop = window.scrollY
      this.initContentHeight()
    }
  },
  computed: {
    widthPerc() {
      return process.isClient ? this.scrollTop * 100 / (this.contentHeight - (this.contentHeight > window.innerHeight ? window.innerHeight : 0)) : 0
    }
  }
}
</script>

<style lang="scss">
.read-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  z-index: 100;
  background-color: $color-primary;
}
</style>
