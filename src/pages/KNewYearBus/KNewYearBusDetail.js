import React from "react";
import flutterCommunicate from "../../common/flutterCommunicate";

function KNewYearBusDetail() {
  return (
    <div className="bg-white p-4 sm:p-6">
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
          ⚡️부산, 마산, 대구 지역 귀향/귀경버스 예매 방법 안내⚡️
        </h2>
        <div className="text-sm sm:text-base text-gray-700">
          <p>1. 아래 예매 링크로 들어가서 예약자 정보 기재 예매</p>
          <p className="text-blue-600 hover:text-blue-700">
            <a
              onClick={() => {
                flutterCommunicate("https://www.instagram.com/p/C11OUpZvU9G/");
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              링크: https://drive.google.com/open...
            </a>
          </p>
          <p>2. 신한은행 110-493-618129 (예금주: 권도훈) 으로 버스요금 입금</p>
          <p>3. 예약 확인 문자 수신 후 정해진 장소에서 버스 탑승</p>
        </div>
        <div className="text-sm sm:text-base text-gray-700">
          💫예매 기간: 8/22(목) ~ 9/1(일) 23:59
          <br />
          🚎귀향버스🚎
          <br />
          ✨탑승 일시: 2019년 9월 12일 목요일 오전 8시
          <br />
          ✨탑승 장소: 자연과학캠퍼스 야구장 옆 주차장
          <br />
          ✨도착 장소: 부산-사상역 파라곤 호텔 앞 대구-동대구 전철역
          대구무역회관 앞 마산-마산역 앞
          <br />
          🚎귀경버스🚎
          <br />
          ✨탑승 일시: 2019년 9월 15일 일요일
          <br />
          ✨탑승 장소: 부산-사상역 파라곤 호텔 앞(오전 11시) 대구-동대구 전철역
          대구무역회관 앞(오후 12시) 마산-마산역 앞(오후 12시)
          <br />
          ✨도착 장소: 자연과학캠퍼스
          <br />
          🚎지역별 버스요금 (왕복 기준, 편도 없음)🚎
          <br />
          부산: 42,000원 마산: 42,000원 대구: 34,000원
          <br />
          ⚡️타 지역 귀향/귀경버스 수요조사⚡️
          <br />
          수요조사 링크:{" "}
          <a
            href="https://drive.google.com/open..."
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            https://drive.google.com/open...
          </a>{" "}
          (수요조사는 8/25(일) 23:59까지 진행됩니다.)
        </div>
        <div className="text-sm sm:text-base text-gray-700">
          ✔️예매 기간 이외에는 예매가 불가능합니다.
          <br />
          ✔️9/1(일) 23:59 이후에는 환불처리가 불가능합니다.
          <br />
          문의사항: 인사비서국장 전우중 (010-5936-4227)
        </div>
        {/* asdf? */}
      </div>
    </div>
  );
}

export default KNewYearBusDetail;
