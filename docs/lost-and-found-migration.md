# 분실물 페이지 Flutter 연동 가이드

## 개요

기존 Flutter 네이티브 분실물 페이지(`lostandfound.dart`)를 웹뷰로 대체한다.

**웹뷰 URL**: `https://webview.skkuuniverse.com/#/skku/lostandfound`

## Flutter 변경사항

### 1. option_campus.dart 수정

기존 분실물 버튼의 네비게이션을 웹뷰로 변경:

```dart
// 기존 코드
Get.toNamed(Routes.lostAndFound);

// 변경 코드
Get.toNamed(
  Routes.webview,
  arguments: {
    'title': '분실물',
    'color': '003626',
    'webviewLink': 'https://webview.skkuuniverse.com/#/skku/lostandfound',
  },
);
```

### 2. 웹뷰 동작 방식

분실물 페이지 내 외부 액션은 `flutterCommunicate()`를 통해 Flutter로 전달된다:

| 액션 | 전달되는 메시지 | Flutter 처리 |
|------|----------------|-------------|
| 인사캠 전화 | `tel:027601077` | `url_launcher`로 전화 앱 실행 |
| 자과캠 전화 | `tel:0312905034` | `url_launcher`로 전화 앱 실행 |
| 물건을 찾습니다 | `https://www.skku.edu/.../lost_and_found_2.do` | `url_launcher`로 외부 브라우저 실행 |
| 주인을 찾습니다 | `https://www.skku.edu/.../lost_and_found_3.do` | `url_launcher`로 외부 브라우저 실행 |

Flutter `CustomWebViewController`의 `customwebviewmessage` 채널이 이미 `canLaunchUrl` + `launchUrl`로 처리하므로 추가 작업 불필요.

### 3. 기존 파일 정리 (선택)

웹뷰 전환 완료 후 제거 가능:
- `lib/app/pages/lost_and_found/ui/lostandfound.dart`
- `app_routes.dart`에서 `Routes.lostAndFound` 라우트 제거
- `flutter_phone_direct_caller` 패키지 (다른 곳에서 미사용 시)
