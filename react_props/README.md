# React props

> Render props everywhere.

Splitting the school dashboard into reusable function components, passing data
down as props, typechecking those props, and rendering lists with keys.

## Learning objectives

- Creating basic React components using functions
- Reusing components
- Passing properties to components
- Defining types for components
- Using Fragments
- When to use a key to improve a loop's performance

## Requirements

- Code runs on Ubuntu 18.04 LTS with Node 12.x.x and npm 6.x.x
- All files end with a new line

## Tasks

| Directory | Covers | Test suite |
| --- | --- | --- |
| `task_0` | `App` becomes a shell; `Header`, `Footer` and `Login` split into their own folders, `Login` wrapped in a Fragment. | App renders |
| `task_1` | Tests for `Header`, `Footer`, `Login`, and the four component checks in `App`. | 6 suites, 18 tests |
| `task_2` | `NotificationItem` extracted, driven by `type` / `html` / `value` props. | 7 suites, 22 tests |
| `task_3` | React DevTools screenshots — see [task_3/README.md](./task_3/README.md). | — |
| `task_4` | `prop-types`, the `CourseList` / `CourseListRow` pair, `isLoggedIn` on `App`, `displayDrawer` on `Notifications`. | 9 suites, 34 tests |
| `task_5` | `CourseShape` and `NotificationItemShape`, list rendering with keys, and empty-list states. | 9 suites, 37 tests |

Each task lives in its own `dashboard/` directory. From inside one:

```bash
npm install
npm start          # dev server on http://localhost:8564/
npm test           # run the suites once
npm run test-watch # re-run on every change
```

## Component layout

By `task_5` the source is organised one folder per concern:

```
src/
├── App/            App.js, App.css, App.test.js
├── Header/         Header.js, Header.css, Header.test.js
├── Footer/         Footer.js, Footer.css, Footer.test.js
├── Login/          Login.js, Login.css, Login.test.js
├── Notifications/  Notifications.js/.css/.test.js,
│                   NotificationItem.js/.test.js, NotificationItemShape.js
├── CourseList/     CourseList.js/.css/.test.js,
│                   CourseListRow.js/.test.js, CourseShape.js
├── utils/          utils.js, utils.test.js
├── assets/         holberton-logo.jpg, close-icon.png
└── index.js
```

## Notes

`App` owns the data. `listCourses` and `listNotifications` are declared there
and passed down, so `CourseList` and `Notifications` stay presentational and
each list item is keyed by its `id`.

Every prop that is not required has a default, so the browser console stays free
of propType warnings in all four UI states (drawer open/closed, logged in/out).

### Running on a modern Node

The project targets Node 12. Webpack 4 hashes with MD4, which was removed from
OpenSSL's default provider in Node 17+, so on a newer Node prefix the command:

```bash
NODE_OPTIONS=--openssl-legacy-provider npm start
```

This is deliberately kept out of the `package.json` scripts, since Node 12
rejects the flag outright.

## Author

Victor
