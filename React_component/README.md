# React component

Class components and their lifecycle, event handling, higher-order components,
and controlling when a component re-renders.

## Learning objectives

- When to use a Class or a function to create a component
- The lifecycle of a Class component
- How to test a component
- How to use a Jest spy to verify that a function is called correctly
- What an HOC is and how to use it
- How to optimize performance and control which components render

## Requirements

- Code runs on Ubuntu 18.04 LTS with Node 12.x.x and npm 6.x.x
- All files end with a new line

## Tasks

| Directory | Covers | Test suite |
| --- | --- | --- |
| `task_0` | `App` converted from a function into a class. | 9 suites, 37 tests |
| `task_1` | `componentDidMount` / `componentWillUnmount` keyboard listener; ctrl+h alerts and calls `logOut`. | 9 suites, 38 tests |
| `task_2` | `Notifications` converted to a class with a bound `markAsRead`, wired to `NotificationItem`'s `onClick`. | 9 suites, 40 tests |
| `task_3` | `BodySection` containment and its `BodySectionWithMarginBottom` specialization. | 11 suites, 42 tests |
| `task_4` | The `WithLogging` HOC, logging mount and unmount for the wrapped component. | 12 suites, 44 tests |
| `task_5` | `NotificationItem` made pure with `React.memo`; `Notifications` gated by `shouldComponentUpdate`. | 12 suites, 46 tests |

Each task lives in its own `dashboard/` directory. From inside one:

```bash
npm install
npm start          # dev server on http://localhost:8564/
npm test           # run the suites once
npm run test-watch # re-run on every change
```

## Notes

### Keyboard shortcut

`App` attaches a `keydown` listener on mount and removes it on unmount, so no
handler outlives the component. ctrl+h alerts `Logging you out` and calls the
`logOut` prop, which defaults to an empty function.

### The HOC and `App`

`task_4` exports the wrapped login component from `App.js`:

```js
export const LoginWithLogging = WithLogging(Login);
```

It is exported rather than kept local so `App.test.js` can assert on the exact
component that `App` renders. Enzyme cannot match the HOC by its `displayName`
through a string selector, because `WithLogging(Login)` is not a valid CSS
identifier.

### `shouldComponentUpdate` on `Notifications`

As the task specifies, `Notifications` re-renders only when the incoming
`listNotifications` is **longer** than the current one:

```js
shouldComponentUpdate(nextProps) {
  return nextProps.listNotifications.length > this.props.listNotifications.length;
}
```

This deliberately blocks every other prop change, `displayDrawer` included. It
is safe here because `App` passes a fixed list and never toggles the drawer, but
it is a length check rather than a real equality check — worth knowing before
reusing the pattern.

Note that the React DevTools extension bypasses `shouldComponentUpdate`, so the
two `setProps` tests in `Notifications.test.js` are the way to verify this
behaviour, not the extension.

### Duplicated margin rule

The task body asks for the `.bodySectionWithMargin` rule in
`BodySectionWithMarginBottom.css`, while the checklist and file list ask for it
in `BodySection.css`. Both files carry the same declaration and
`BodySectionWithMarginBottom.js` imports both, so either reading is satisfied.
The rule is identical in both, so nothing can conflict.

### Running on a modern Node

Webpack 4 hashes with MD4, removed from OpenSSL's default provider in Node 17+:

```bash
NODE_OPTIONS=--openssl-legacy-provider npm start
```

Not needed on Node 12, so it stays out of the `package.json` scripts.

## Author

Victor
