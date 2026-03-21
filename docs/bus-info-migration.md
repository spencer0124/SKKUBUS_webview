# Bus Info Pages — Native → WebView Migration

## Overview

The Flutter app's native INJA (campus shuttle) and HSSC (인사캠 shuttle) info screens have been replaced with WebView loads pointing to this project.

## Route Mapping

| Flutter (before)       | Flutter (after)                                         | Web route              | Component         |
|------------------------|---------------------------------------------------------|------------------------|--------------------|
| `/injadetail` (native) | `/customwebview` → `webview.skkuuniverse.com/#/bus/campus/info` | `/bus/campus/info` | `CampusBusInfo.js` |
| `/MainbusDetail` (native) | `/customwebview` → `webview.skkuuniverse.com/#/bus/hssc/info` | `/bus/hssc/info`   | `HSSCBusInfo.js`   |

## Changes Required in This Project

**None.** Both pages already exist and are fully functional:

- `src/pages/bus/CampusBusInfo.js` — campus shuttle info with map navigation buttons via `flutterCommunicate()`
- `src/pages/bus/HSSCBusInfo.js` — HSSC shuttle info with phone links via `flutterCommunicate()`
- Routes registered in `src/App.js`
- HashRouter configured in `src/index.js`

## Deployment Requirement

The webview must be deployed and accessible at `https://webview.skkuuniverse.com`. Both `/#/bus/campus/info` and `/#/bus/hssc/info` must be reachable.

## Notes

- WebView pages render Korean only. The Flutter nav bar title uses `.tr` for i18n (Korean/English/Chinese).
- Flutter communicates via the `customwebviewmessage` JavaScript channel — see `flutter-integration.md` for details.
- The production domain is `webview.skkuuniverse.com` (not the Vercel preview URL `skkubus-webview.vercel.app`).
