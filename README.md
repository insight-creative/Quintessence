# Quintessence a Hugo Boilerplate With Substance

The [Hugo](https://gohugo.io/) boilerplate we use for our projects.

**Disclaimer** - This boilerplate has been heavily integrated with [Netlify](https://www.netlify.com/) or [CloudCannon](https://cloudcannon.com/), and therefore many features are specific to these platforms and may not work with other hosting providers.

**Disclaimer** - Quintessence is a boilerplate (starter kit) for Hugo projects. It's not a Hugo theme. Check the [theme](#themes) docs for more information.

## Getting Started

To get started, you can either clone the repository. Then run the following from the project root:

```
npm install
hugo server

```

## File Structure

```
│   │
|   └──── /assets            - Source files for assets (SASS, JS, Images, Fonts etc)
│
└──── /layouts               - Template files
│   │ 404.html               - 404 Template
│   │ index.headers          - Custom Netlify HTTP headers
│   │ index.redirects        - Custom Netlify redirect rules
│   │ robots.txt             - Template for robots.txt
│   │
│   └──── /_default          - Base templates for list & singular pages
│   │   │ baseof.html        - Base template
│   │   │ list.html          - List/taxonomy template
│   │   │ single.html        - Singular page/post template
│   │
│   └──── /partials          - Partials
│       │ header.html    - Sites primary <header>
│       │ footer.html    - Sites primary <footer>
│   │
│   └──── /static            - Hugo static resources
│
│ .gitignore
│ LICENSE
│ README.md
│ config.toml                - Hugo configuration
│ postcss.config.js          - PostCSS configuration for Hugo Pipes
│ netlify.toml               - Netlify configuration
│ package.json
```

## Responsive Image Partial

The responsive image partial was built in an attempt to server responsive next gen images in layouts as efficiently as possible. To use the partial call it in your template file as you would any other partial. Then use a [dict](https://gohugo.io/functions/dict/) to pass in all the parameters that you want to pass on through to the partial. **Note** Make sure to always include the reference to "Page" . in order to properly pass the current page context through to the partial. The partial is already configured to use Hugo's image processing to create a srcset of images of different sizes both as webp and jpg fallbacks. No additional work is needed!

### Example responsive image partial usage

```
{{ partial "responsive-image" (dict "Page" . "image" .Params.block.image1.image "alt" .Params.block.image1.image_alt "sizes" "20vw" ) }}
```

## Hero and CTA Partials

The hero and cta partials were built very similarly to the responsive image partial. Call your partial in the same manner as above passing in all your necessary data. With very little work you should have a typical marketing site style hero or cta section ready to go! The best part is these are flexible and you change easily pass in your content based on the page needs without needing to build a new component each time.

### Example hero partial usage

```
{{ partial "hero" (dict "Page" . "image" .Params.hero.image "alt" .Params.hero.image_alt "sizes" "100vw" ) }}
```

### Example cta partial usage

```
{{ partial "cta" (dict "Page" . "image" .Params.cta.image "alt" .Params.cta.image_alt "sizes" "100vw" ) }}
```

## Algolia Search

Quickly add a dynamic search feature with Algolia and the Algolia + Netlify plugin. To create a new set of app credentials navigate to https://crawler.algolia.com/admin/netlify and login to your Algoia account. Link your new site through git and the Algolia plugin will be installed. Update your API keys to match your new application. Learn more in the [Algolia docs](https://www.algolia.com/doc/tools/crawler/netlify-plugin/quick-start/).

## Deploy to Netlify

You can deploy directly to Netlify using this button:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/insight-creative/Quintessence)
