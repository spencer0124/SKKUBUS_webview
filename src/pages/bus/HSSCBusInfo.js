import React from "react";
import flutterCommunicate from "../../common/flutterCommunicate";

function HSSCBusInfo() {
  return (
    <div className="bg-white min-h-screen">
      <div className="px-4 pt-1">
        {/* [인사캠 → 혜화역] */}
        <div className="border-t border-gray-300 my-4" />
        <div className="pl-1">
          <p className="text-deep-green font-bold">[인사캠 → 혜화역]</p>
          <p className="text-gray-900 text-sm mt-1 pl-1">
            농구장 → 학생회관 → 정문 → 올림픽기념국민생활관 → 혜화동우체국 →
            혜화동로터리 → 혜화역 1번출구
          </p>
        </div>

        {/* [혜화역 → 인사캠] */}
        <div className="border-t border-gray-300 my-4" />
        <div className="pl-1">
          <p className="text-deep-green font-bold">[혜화역 → 인사캠]</p>
          <p className="text-gray-900 text-sm mt-1 pl-1">
            혜화역 1번출구 → 혜화동로터리 → 성균관대입구사거리 → 정문 →
            600주년기념관
          </p>
        </div>

        {/* 요금 및 결제수단 */}
        <div className="border-t border-gray-300 my-4" />
        <div className="pl-1">
          <p className="text-deep-green font-bold">요금 및 결제수단</p>
          <p className="text-gray-900 text-sm mt-1 pl-1 whitespace-pre-line">
            {
              "요금 400원\n후불교통결제 기능 일반카드, T머니/캐시비카드 사용 가능\n현금 및 회수권 사용 불가"
            }
          </p>
        </div>

        {/* 운행시간 */}
        <div className="border-t border-gray-300 my-4" />
        <div className="pl-1">
          <p className="text-deep-green font-bold">운행시간</p>
          <p className="text-gray-900 text-sm mt-1 pl-1 whitespace-pre-line">
            {
              "월~금 운행, 공휴일 운행 안함\n\n[학기중] 07:00 ~ 23:00\n[방학중] 07:00 ~ 19:00"
            }
          </p>
        </div>

        {/* 연락처 */}
        <div className="border-t border-gray-300 my-4" />
        <div className="pl-1">
          <p className="text-deep-green font-bold">연락처 (클릭 시 전화연결)</p>
          <div className="mt-1 pl-1 space-y-1">
            <div className="flex items-center">
              <span className="text-gray-900 text-sm">학생지원팀&nbsp;&nbsp;</span>
              <button
                onClick={() => flutterCommunicate("tel:027601073")}
                className="bg-transparent border-none cursor-pointer p-0 text-deep-green font-bold text-sm"
              >
                02-760-1073
              </button>
            </div>
            <div className="flex items-center">
              <span className="text-gray-900 text-sm">
                인사캠 관리팀&nbsp;&nbsp;
              </span>
              <button
                onClick={() => flutterCommunicate("tel:027600110")}
                className="bg-transparent border-none cursor-pointer p-0 text-deep-green font-bold text-sm"
              >
                02-760-0110
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 my-4" />
      </div>
    </div>
  );
}

export default HSSCBusInfo;
