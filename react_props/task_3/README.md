# Task 3 — Checking the application using the React extension

This task asks for two screenshots taken from the React Developer Tools
extension in Chrome, while the app is running:

| File | What it must show |
| --- | --- |
| `change_property.png` | The **Components** tab, with the first `NotificationItem`'s `type` prop edited from `default` to `urgent` — the first notification turns red in the page. |
| `profiler.png` | The **Profiler** tab after recording a page load, showing the render time of each component so the slowest one after `App` is visible. |

## How to capture them

Run the dashboard from the previous task:

```bash
cd ../task_2/dashboard    # or task_5/dashboard for the final version
npm install
npm start                 # http://localhost:8564/
```

On a Node newer than 12, Webpack 4's MD4 hashing needs a flag:

```bash
NODE_OPTIONS=--openssl-legacy-provider npm start
```

Then, with [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
installed:

**change_property.png**

1. Open the page, then DevTools → **Components**.
2. Open the notifications drawer so the list is visible.
3. Select the first `NotificationItem` in the tree.
4. In the right-hand props panel, change `type` from `default` to `urgent`.
5. Confirm the first notification turns red in the page, and screenshot the
   whole window so both the edited prop and the red row are visible.

**profiler.png**

1. DevTools → **Profiler**.
2. Press record, reload the page, then stop recording.
3. Open the flamegraph or ranked chart for the first commit.
4. Screenshot it so `App` and the per-component render times are readable.

Save both files in this directory with exactly the names above.
