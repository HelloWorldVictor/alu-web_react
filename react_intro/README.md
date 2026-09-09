# React intro

> I will find you and render you.

Building a school dashboard with React — from a `create-react-app` scaffold with
JSX, through Enzyme shallow-rendering tests and a GitHub Pages deploy, to the
same app rebuilt from scratch on Webpack and Babel.

## Learning objectives

- Creating a basic JavaScript application using React
- Using `create-react-app` to start developing quickly
- What JSX is and how to use it
- Using the React Developer Tools to debug
- Using Enzyme's shallow rendering to test an application
- Using React with Webpack and Babel

## Requirements

- Code runs on Ubuntu 18.04 LTS with Node 12.x.x and npm 6.x.x
- All files end with a new line

## Tasks

| Directory | Covers |
| --- | --- |
| `task_0` | The base dashboard: `App-header` with the logo and title, `App-body`, `App-footer`. |
| `task_1` | `utils.js` (`getFullYear`, `getFooterCopy`), the `Notifications` component, and a second render root. |
| `task_2` | Login form (labels bound to inputs, OK button), and the notifications list with priorities and `dangerouslySetInnerHTML`. |
| `task_3` | Jest + Enzyme: 3 suites, 11 tests, all shallow-rendered. |
| `task_4` | The same app, deployed to GitHub Pages from the `gh-pages` branch. |
| `task_5` | The dashboard rebuilt from scratch on Webpack + Babel, with the source reorganised by feature. |

Each task lives in its own `dashboard/` directory. From inside one:

```bash
npm install
npm start          # dev server
npm test           # test suites (task_3 and task_5)
npm run build      # production build
```

### Deployed app

<https://helloworldvictor.github.io/alu-web_react>

## Running on a modern Node

The project targets Node 12. `react-scripts@3.4.4` uses Webpack 4, which hashes
with MD4 — removed from OpenSSL's default provider in Node 17+. On a newer Node,
prefix the command:

```bash
NODE_OPTIONS=--openssl-legacy-provider npm start
```

This is not needed on Node 12, so it is deliberately kept out of the `package.json`
scripts — Node 12 would reject the flag outright.

`cheerio` is pinned to `1.0.0-rc.3` because Enzyme's floating range now resolves
to a version using `node:`-prefixed imports, which the Jest bundled with
`react-scripts@3.4.4` cannot resolve.

## task_5 structure

```
dashboard/
├── .babelrc                  preset-env + preset-react
├── config/
│   ├── webpack.config.js     entry, loaders, dev server with hot reloading
│   ├── setupTests.js         Enzyme adapter
│   ├── styleMock.js          CSS stub for Jest
│   └── fileMock.js           image stub for Jest
├── dist/
│   ├── index.html            loads bundle.js from the body
│   └── favicon.ico
└── src/
    ├── App/                  App.js, App.css, App.test.js
    ├── Notifications/        Notifications.js, .css, .test.js
    ├── utils/                utils.js, utils.test.js
    ├── assets/               holberton-logo.jpg, close-icon.png
    └── index.js
```

## Author

Victor
