# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server (CRA, port 3000)
npm run build      # Production build to /build
npm test           # Run tests (Jest, interactive watch mode)
npm run deploy     # Deploy to GitHub Pages via gh-pages
```

## Architecture

This is a **Flutter webview** companion app — not a standalone web app. It renders inside a Flutter app's WebView widget and communicates back to Flutter via JavaScript message channels.

### Routing

Uses **HashRouter** (not BrowserRouter) so Flutter can load routes like `#/map/hssc` without server-side routing.

| Route | Component | Description |
|---|---|---|
| `/` | `ErrorPage` | Fallback |
| `/map/hssc` | `HSSCMap` | Interactive SVG campus map (HSSC/인문사회캠퍼스) |
| `/map/nsc` | `NSCMap` | Static image campus map (NSC/자연과학캠퍼스) |
| `/bus/newyear` | `KNewYearBus` | Holiday bus shuttle info |
| `/bus/newyear/detail` | `KNewYearBusDetail` | Bus shuttle detail |

### Flutter Bridge (`src/common/`)

Two message channels send data from webview to Flutter:
- **`flutterCommunicate`** — sends URL strings via `customwebviewmessage.postMessage()`
- **`flutterMapCommunicate`** — sends structured JSON (place name, building, colors, connections) via `webtofluttermessage.postMessage()`. The `type` field is `"add"` or `"delete"` to control markers in Flutter.

These use globals injected by Flutter's WebView — they will throw in a regular browser (caught silently).

### HSSC Map System (`src/pages/hsscmap/`)

The core interactive feature. An SVG map (`fastmap_skkubus.svg`) is rendered as a React component. Each clickable building floor/connector has a transparent overlay (`_clickarea` suffix) for easier touch targets.

**Click flow:** SVG click → `handleClick.js` strips `_clickarea` suffix → looks up ID in `AvailableLines` → returns overlay position + place data → sends to Flutter via `flutterMapCommunicate`.

**Data files in `src/pages/hsscmap/data/`:**
- `AvailableLines.js` — Large map (~130 entries) of SVG element IDs to place metadata (name, building, floor, facilities, walking times, adjacent places, colors). This is the primary data source for the map.
- `LineColors.js` — Hex color codes for 12 campus buildings/lines
- `LineTypes.js` — Constants: `bus` and `place`

### Styling

TailwindCSS with a custom `deep-green` color (`#003626`, SKKU brand). Viewport height uses a CSS variable `--vh` set in `App.js` to handle mobile browser chrome.

### Key Conventions

- SVG element IDs must match keys in `AvailableLines.js`; clickable elements need a corresponding `{id}_clickarea` overlay in the SVG
- Korean text is used throughout data files and comments
- All content is in Korean (Noto Sans CJK KR fonts in `public/assets/fonts/`)
