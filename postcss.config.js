const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './layouts/**/*.html',
        './layouts/**/*.svg',
        './content/**/*.md',
      ],
      safelist: [
        'mobile-dropdown-open',
        'is-active',
        'nav-open',
        'has-dropdown-open',
        'has-sub-menu-open',
        'expand',
        'collapse',
        'page-home',
        'parent-page-home',
        'page-about',
        'parent-page-about',
        'page-contact',
        'parent-page-contact',
        'active-button',
        'position-open',
        'list-open',
        'toggle-mobile-dropdown',
      ],
    }),
  ],
}