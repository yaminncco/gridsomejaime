<template>
	<header class="header" :class="headerClass" :style="headerStyles">
		<div class="header__block" ref="header">
			<div class="header__container container container--lg">
				<div class="header__logo">
					<Logo/>
				</div>
				<div class="header__right">
          <div class="header__nav" ref="nav" :style="isMobile && [{'height': collapseHeight} , {'top': `${headerHeight}px`}, collapseInOut && {'transition' : `${collapseDuration}ms height ease-in-out`}]">
            <Nav/>
          </div>
          <button v-if="isMobile" class="header__toggle-btn" aria-label="toggle nav" :class="[collapse ? 'header__toggle-btn--close' : 'header__toggle-btn--open']" @click="toggleMenu"><span></span></button>
          <ThemeToggle/>
        </div>
			</div>
		</div>
	</header>
</template>

<script>
import Logo from "./Logo.vue";
import Nav from "./Nav.vue";
import ThemeToggle from "~/components/ThemeToggle.vue"

export default {
  components: {
    Logo,
    Nav,
    ThemeToggle
  },
  props: {
    breakpoint: {
      type: Number,
      default: 768
    }
  },
  data() {
    return {
      scrollTop: 0,
      headerShow: true,
      headerHeight: 1,
      viewPort: 0,
      collapse: false,
      collapseInOut: false,
      collapseDuration: 200,
      collapseTimeout: 0,
      collapseHeight: "0px"
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.headerHeight = this.$refs.header.offsetHeight;
      this.viewPort = window.innerWidth;
    });
    window.addEventListener("resize", e => {
      this.viewPort = window.innerWidth;
      if (!this.isMobile) {
        this.collapse = false;
        this.collapseHeight = "0px";
      }
    });
    window.addEventListener("scroll", e => {
      let scroll = window.scrollY;
      this.headerShow = this.scrollTop > scroll;
      this.scrollTop = scroll;
    });
  },
  methods: {
    toggleMenu() {
      this.collapseInOut = true;
      this.collapseHeight = `${this.$refs.nav.scrollHeight}px`;
      if (this.collapse) {
        setTimeout(() => {
          this.collapseHeight = `0px`;
        }, 16);
      }
      this.collapse = !this.collapse;
      clearTimeout(this.collapseTimeout);
      this.collapseTimeout = setTimeout(() => {
        if (this.collapse) {
          this.collapseHeight = `auto`;
        }
        this.collapseInOut = false;
      }, this.collapseDuration);
    }
  },
  computed: {
    isFixed() {
      return this.scrollTop >= this.headerHeight;
    },
    isMobile() {
      return this.viewPort <= this.breakpoint;
    },
    headerClass() {
      return [
        { "header--desktop": !this.isMobile },
        { "header--mobile": this.isMobile },
        { "header--show": this.isFixed && !this.isMobile && this.headerShow },
        { "header--hide": this.isFixed && !this.isMobile && !this.headerShow }
      ];
    },
    headerStyles() {
      return [
        { height: `${this.headerHeight}px` }
      ];
    }
  }
};
</script>

<style lang="scss">
.header {
  &__block {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: rgba($background-body, 0.98);
    z-index: 90;
    [data-theme="dark"] & {
      background-color: rgba($background-body--dark, 0.98);
    }
  }
  &--show {
    .header__block {
      animation: showHeader 200ms;
    }
  }
  &--hide {
    .header__block {
      animation: hideHeader 200ms;
      animation-fill-mode: forwards;
    }
  }

  @keyframes showHeader {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  @keyframes hideHeader {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(-100%);
    }
  }

  &__container {
    min-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__right {
    display: flex;
    justify-content: center;
    align-items: center;

    & > * {
      margin-left: 3.2rem;
      &:first-child {
        margin-left: 0px;
      }
    }
  }

  &__toggle-btn {
    position: relative;
    width: 30px;
    height: 30px;
    padding: 0;
    background: transparent;
    border: none;
    cursor: pointer;
    > span {
      position: relative;
      display: inline-block;
      top: 50%;
      transform: translateY(-50%);
      &,
      &:after,
      &:before {
        position: absolute;
        left: 0;
        width: 100%;
        height: 3px;
        border-radius: 2px;
        background-color: $color-black;
        transition: 200ms all;
        [data-theme="dark"] & {
          background-color: $color-grey;
        }
      }
      &:after,
      &:before {
        content: "";
        display: block;
      }
      &:after {
        bottom: -10px;
      }
      &:before {
        top: -10px;
      }
    }

    &--close {
      > span {
        transform: rotate(45deg);
        &:after {
          bottom: 0;
          transform: rotate(-90deg);
        }
        &:before {
          top: 0;
          opacity: 0;
        }
      }
    }
  }

  &--mobile {
    .header__nav {
      position: absolute;
      left: 0;
      right: 0;
      margin: 0;
      overflow-x: hidden;
      overflow-y: auto;
      max-height: 70vh;
    }
  }
}
</style>