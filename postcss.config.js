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
        'page-about',
        'page-contact',
        'parent-page-home',
        'parent-page-about',
        'parent-page-contact',
        'parent-page-blog',
        'active-button',
        'position-open',
        'list-open',
        'toggle-mobile-dropdown',
        'ul', 
        'ol',
        'table',
        'tr',
        'td',
        'pre',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'btn--active',
        'blog--grid',
      ],
    }),
  ],
}