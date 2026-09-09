# Webpack

> Brace yourself, Webpack is coming.

Bundling a small dashboard app with Webpack, from a zero-config build up to a
multi-entry setup with a dev server, CSS and image pipelines, and code splitting.

## Learning objectives

- Setting up Webpack for a basic project
- Entry points, output, and loaders
- Adding plugins
- Splitting code into chunks
- Setting up a dev server

## Requirements

- Code runs on Ubuntu 18.04 LTS with Node 12.x.x
- All files end with a new line

## Tasks

### `task_0` — Basic setup

Webpack with **no config file**: the default `src/index.js` entry point is
bundled to `dist/main.js`, which `dist/index.html` loads. jQuery appends three
paragraphs to the page.

```bash
npm install
npm run build      # -> dist/main.js
```

`dist/main.js` is a build artifact and is not committed.

### `task_1` — Using a config file

Adds `webpack.config.js`: `js/dashboard_main.js` is bundled to
`public/bundle.js` in `production` mode. A button increments a counter, with the
handler wrapped in Lodash's `debounce` so rapid clicks are collapsed into one.

```bash
npm install
npm run build      # -> public/bundle.js
```

### `task_2` — Adding CSS and images

Extends task_1 with `style-loader` + `css-loader` for CSS, and `file-loader` +
`image-webpack-loader` for images. `css/main.css` puts the counter in bold to the
right of the button and renders a 200×200 `#logo` backed by
`assets/holberton-logo.jpg`.

```bash
npm install
npm run build      # -> public/bundle.js + the emitted logo
```

The production bundle stays under Webpack's 244 KiB budget, so no
`asset size limit` warning is emitted.

### `task_3` — Dev server, modules and tree shaking

Splits the app into three modules — `header`, `body` and `footer` — each with its
own JS and CSS, wired up as three Webpack entry points emitting
`[name].bundle.js`. Adds:

- a dev server on port **8564**
- `mode: 'development'` with `inline-source-map`, so `console.log` in
  `header.js` points at the source file rather than the bundle
- `HtmlWebpackPlugin` to generate `index.html`
- `CleanWebpackPlugin` to wipe the build folder between builds
- `optimization.splitChunks` to lift jQuery and Lodash out of the entry bundles
  into shared vendor chunks

```bash
npm install
npm run build      # -> public/
npm run start-dev  # http://localhost:8564/
```

`public/` is generated and is not committed.

## A note on `image-webpack-loader`

`image-webpack-loader` shells out to native binaries (`mozjpeg`, `optipng`,
`pngquant`, `gifsicle`). Only the plugins that ship a binary for every platform
are enabled in the config; the rest are explicitly switched off, because the
loader tries to `require` each one unless it is disabled, which would otherwise
break the build on machines where those binaries are unavailable.

## Author

Victor
