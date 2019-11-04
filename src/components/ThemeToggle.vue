<template>
  <button class="toggle-theme" role="button" aria-label="Toggle dark/light" @click.prevent="toggleTheme">
    <span></span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      currentTheme: ''
    }
  },
  methods: {
    setTheme() {
      const preferredTheme = localStorage.getItem('theme')
      if (!preferredTheme) {
        localStorage.setItem('theme', 'light')
      } else {
        localStorage.setItem('theme', preferredTheme)
      }
      this.currentTheme = localStorage.getItem('theme')
      document.body.setAttribute('data-theme', this.currentTheme)
    },
    toggleTheme() {
      if (this.currentTheme === 'light') {
        this.currentTheme = 'dark'
      } else {
        this.currentTheme = 'light'
      }
      localStorage.setItem('theme', this.currentTheme)
      document.body.setAttribute('data-theme', this.currentTheme)
    }
  },
  mounted () {
    this.setTheme()
  }
}
</script>

<style lang="scss">
.toggle-theme {
  display: flex;
  background-color: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  color: $color-body;
  [data-theme="dark"] & {
    color: $color-body--dark;
  }
  > span {
    position: relative;
    width: 48px;
    height: 20px;
    background-color: $color-grey;
    display: inline-block;
    border-radius: 20px;
    [data-theme="dark"] & {
      background-color: $color-black;
    }
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: -2px;
      width: 24px;
      height: 24px;
      background-color: $color-primary;
      border-radius: 50%;
      transition: 200ms transform;
      [data-theme="dark"] & {
        transform: translateX(100%);
      }
    }
  }
}
</style>
