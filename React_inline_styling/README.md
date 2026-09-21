# React inline styling

Moving the dashboard's styling out of CSS files and into the components with
Aphrodite — inline styles, conditional styles, media queries and animations.

## Learning objectives

- Differences between using a CSS file and inline styling
- Using a library to bring the styling to the JavaScript
- Using media queries and responsive design
- Creating small animations within the app

## Requirements

- Code runs on Ubuntu 18.04 LTS with Node 12.x.x and npm 6.x.x
- All files end with a new line

## Tasks

| Directory | Covers | Test suite |
| --- | --- | --- |
| `task_0` | Inline `style` on `CourseListRow`: `#f5f5f5ab` body rows, `#deb5b545` header rows. | 12 suites, 46 tests |
| `task_1` | Aphrodite in `App`, `Header`, `Login`, `Footer`, `BodySection*`, `CourseList` and the `Notifications` panel. | 12 suites, 46 tests |
| `task_2` | Conditional styling in `NotificationItem` and `CourseListRow`; the last CSS file removed. | 12 suites, 48 tests |
| `task_3` | Media queries for screens under 900px. | 12 suites, 48 tests |
| `task_4` | Keyframe animations on the notifications menu item. | 12 suites, 49 tests |

Each task lives in its own `dashboard/` directory. From inside one:

```bash
npm install
npm start          # dev server on http://localhost:8564/
npm test           # run the suites once
npm run test-watch # re-run on every change
```

## Notes

### Style constants, not object literals

`task_0` declares the two row styles once at module scope:

```js
const headerRowStyle = { backgroundColor: '#deb5b545' };
const defaultRowStyle = { backgroundColor: '#f5f5f5ab' };
```

Building the object inside the component would hand React a new object on every
render and defeat the `React.memo` / `shouldComponentUpdate` work from the
previous project.

### Why the tests changed

Aphrodite replaces semantic class names with generated hashes such as
`notifications_1xwtua6`, so assertions like `find('div.Notifications')` can no
longer match. Those checks were rewritten to assert on structure instead — the
presence of the close button for the panel, the menu item's text for the menu —
which is what they were really trying to prove. Every suite calls
`StyleSheetTestUtils.suppressStyleInjection()` in `beforeEach` and
`clearBufferAndResumeStyleInjection()` in `afterEach`.

Two assertions became stronger rather than weaker: `CourseListRow` and
`NotificationItem` now check that the header/body and urgent/default variants
receive *different* generated classes, which is a direct test of the
conditional styling.

### No CSS files remain

By `task_2` every `.css` file is gone. `Footer.js` and `BodySection.js` were
converted alongside the components the task names, because deleting `App.css`
and `BodySection.css` removed the rules those two relied on — leaving them
behind would have changed the rendered UI.

### Responsive breakpoints

`task_3` uses a single breakpoint, kept in a constant so it reads the same in
every component:

```js
const SMALL_SCREEN = '@media (max-width: 900px)';
```

Below 900px each label/input pair becomes a block so it takes its own line, the
OK button moves to a line of its own, the notifications panel goes full-screen
with no list padding at 20px text, and each item spans the width with a black
bottom rule and `10px 8px` of padding. Above it, the layout is unchanged.

### Animations

`task_4` defines the two keyframe objects the task asks for and attaches them to
`:hover` on the menu item — 1s for the opacity fade, 0.5s for the bounce, three
iterations. Once `displayDrawer` is true the menu item takes an extra
`menuItemHidden` style so the menu and the panel are never visible together.

### Running on a modern Node

Webpack 4 hashes with MD4, removed from OpenSSL's default provider in Node 17+:

```bash
NODE_OPTIONS=--openssl-legacy-provider npm start
```

Not needed on Node 12, so it stays out of the `package.json` scripts.

## Author

Victor
