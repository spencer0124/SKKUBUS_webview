# Flutter ↔ Webview 연동 가이드

## 1. 개요

웹뷰 페이지에서 네이티브 기능(전화 걸기, 지도 앱 열기 등)이 필요할 때, JavaScript 메시지 채널을 통해 Flutter에 요청을 보낸다.

```
[웹뷰 (React)]                        [Flutter]
flutterCommunicate(url)
  → customwebviewmessage.postMessage(url)  →  onMessageReceived
                                                → canLaunchUrl(url)
                                                → launchUrl(url)
```

## 2. 통신 채널

### `customwebviewmessage`

웹뷰에서 Flutter로 URL 문자열을 전달하는 채널.

**웹뷰 측** (`src/common/flutterCommunicate.js`):
```js
customwebviewmessage.postMessage(url);
```

**Flutter 측** (`CustomWebViewController`):
```dart
webcontroller.addJavaScriptChannel(
  'customwebviewmessage',
  onMessageReceived: (JavaScriptMessage message) async {
    if (await canLaunchUrl(Uri.parse(message.message))) {
      launchUrl(Uri.parse(message.message));
    }
  },
);
```

> 참고: `webtofluttermessage` 채널은 지도(HSSC/NSC 건물 맵)에서 JSON 데이터를 보내는 용도로 별도 존재.

## 3. 웹뷰가 보내는 메시지 타입

### 전화 걸기 (`tel:`)
```js
flutterCommunicate('tel:027601073')
```
Flutter가 `launchUrl`로 처리하면 OS 전화 다이얼러가 열림.

### 네이버 지도 (`nmap://`)
```js
flutterCommunicate('nmap://route/walk?dlat=37.587308&dlng=126.993688&dname=...')
```

### 카카오맵 (`kakaomap://`)
```js
flutterCommunicate('kakaomap://route?ep=37.587308,126.993688&by=FOOT&eName=...')
```

### 애플 지도 (`maps://`)
```js
flutterCommunicate('maps://?t=m&daddr=37.587308,126.993688')
```

### 외부 링크 (`http://`, `https://`)
```js
flutterCommunicate('https://example.com')
```

> iOS `Info.plist`의 `LSApplicationQueriesSchemes`와 Android `AndroidManifest.xml`의 `<queries>`에 `tel`, `nmap`, `kakaomap` 스킴이 이미 등록되어 있어 `canLaunchUrl`이 정상 동작함.

## 4. Flutter 라우트 변경 가이드

기존 네이티브 정보 화면을 웹뷰로 교체하려면, "정보" 버튼의 네비게이션을 `/customwebview` 라우트로 변경한다.

### 인사캠 셔틀버스 정보

**변경 전** (`bus_seoul_main_screen.dart`):
```dart
rightBtnAction: () {
  Get.toNamed('/MainbusDetail');
},
```

**변경 후**:
```dart
rightBtnAction: () {
  Get.toNamed('/customwebview', arguments: {
    'title': '인사캠 셔틀버스',
    'color': '003626',
    'webviewLink': 'https://skkubus-webview.vercel.app/#/bus/hssc/info',
  });
},
```

### 인자셔틀 정보

**변경 전** (`bus_inja_main_screen.dart`):
```dart
onTap: () => Get.toNamed('/injadetail'),
```

**변경 후**:
```dart
onTap: () => Get.toNamed('/customwebview', arguments: {
  'title': '인자셔틀',
  'color': '003626',
  'webviewLink': 'https://skkubus-webview.vercel.app/#/bus/campus/info',
}),
```

## 5. customwebviewmessage 핸들러 개선 (권장)

현재 핸들러는 앱 미설치 시 **조용히 실패**한다 (`canLaunchUrl`이 false를 반환하면 아무 동작 없음).

기존 `InjaDetailController.executeMap()`과 동일한 fallback을 추가하려면:

```dart
onMessageReceived: (JavaScriptMessage message) async {
  final uri = Uri.parse(message.message);

  if (await canLaunchUrl(uri)) {
    await launchUrl(uri);
  } else if (uri.scheme == 'nmap' || uri.scheme == 'kakaomap') {
    // 지도 앱 미설치 시 앱스토어/플레이스토어로 안내
    final mapName = uri.scheme == 'nmap' ? '네이버 지도' : '카카오맵';
    final result = await FlutterPlatformAlert.showCustomAlert(
      windowTitle: '$mapName가 설치되어 있지 않아요',
      text: '$mapName 설치 페이지로 이동할까요?',
      negativeButtonTitle: '이동',
      positiveButtonTitle: '취소',
    );

    if (result == CustomButton.negativeButton) {
      final storeUrl = Platform.isIOS
          ? (uri.scheme == 'nmap'
              ? 'https://apps.apple.com/kr/app/naver-map-navigation/id311867728'
              : 'https://apps.apple.com/kr/app/kakaomap-korea-no-1-map/id304608425')
          : (uri.scheme == 'nmap'
              ? 'https://play.google.com/store/apps/details?id=com.nhn.android.nmap'
              : 'https://play.google.com/store/apps/details?id=net.daum.android.map');
      if (await canLaunchUrl(Uri.parse(storeUrl))) {
        await launchUrl(Uri.parse(storeUrl));
      }
    }
  }
},
```

> 필요 import: `flutter_platform_alert`, `dart:io` (Platform)

## 6. 웹뷰 경로 ↔ Flutter 라우트 대응표

| 웹뷰 경로 (HashRouter) | 기존 Flutter 라우트 | Flutter `customwebview` title |
|---|---|---|
| `#/bus/hssc/info` | `/MainbusDetail` | 인사캠 셔틀버스 |
| `#/bus/campus/info` | `/injadetail` | 인자셔틀 |
| `#/map/hssc` | `/hsscbuildingmap` | (별도 WebView 컨트롤러 사용) |
| `#/map/nsc` | `/nscbuildingmap` | (별도 WebView 컨트롤러 사용) |
| `#/bus/newyear` | `/customwebview` | (이미 웹뷰) |
