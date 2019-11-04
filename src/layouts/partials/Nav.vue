<template>
    <nav class="nav" role="navigation">
        <ul class="nav__list">
            <li class="nav__item"><g-link class="nav__link" tag="a" to="/" exact>Blog</g-link></li>
            <li class="nav__item"><g-link class="nav__link" tag="a" to="/about" exact>About</g-link></li>
            <li class="nav__item"><g-link class="nav__link" tag="a" to="/contact" exact>Contact</g-link></li>
        </ul>
    </nav>
</template>

<style lang="scss">
.nav {
	&__list {
		display: flex;
		flex-direction: row;
		list-style: none;
		margin: 0;
		padding: 0;
	}
	&__item {
		margin-left: 3.2rem;
		&:first-child {
			margin-left: 0;
		}
	}
	&__link {
		position: relative;
		display: block;
		padding: 1.2rem 0;
		font-weight: $font-weight--bold;
		@include font-size($font-size--sm);
		&.active {
			color: $color-primary;
			[data-theme="dark"] & {
        		color: $color-white;
    		}
		}
		&:after {
			content: '';
			display: block;
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			background-color: $color-primary;
			height: 0.12em;
			width: 100%;
			transition: transform 200ms;
			transform-origin: 100%;
			transform: scaleX(0);
		}
		&.active,
		&:hover {
			&:after {
				transform-origin: 0%;
				transform: scaleX(1);
			}
		}
	}
}

.header--mobile {
	.nav {
		padding: $container-gutter;
		background: rgba($color-white, 0.98);
		[data-theme="dark"] & {
          background-color: rgba($background-body--dark, 0.98);
        }

		&__list {
			flex-direction: column;
		}
		&__item {
			margin-left: 0;
			margin-bottom: 3.2rem;
			&:last-child {
				margin-bottom: 0;
			}
		}
		&__link {
			display: inline-block;
			@include font-size($font-size--h3);
		}
	}
}
</style>