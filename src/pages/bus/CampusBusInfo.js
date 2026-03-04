import React from "react";
import flutterCommunicate from "../../common/flutterCommunicate";

const seoulLat = 37.587308;
const seoulLon = 126.993688;
const seoulDestnameEncode =
  "%EC%8A%A4%EA%BE%B8%EB%B2%84%EC%8A%A4%20%7C%20%EC%9D%B8%EC%82%AC%EC%BA%A0%20%EC%85%94%ED%8B%80%20%EC%9C%84%EC%B9%98";

const suwonLat = 37.292345;
const suwonLon = 126.975532;
const suwonDestnameEncode =
  "%EC%8A%A4%EA%BE%B8%EB%B2%84%EC%8A%A4%20%7C%20%EC%9E%90%EA%B3%BC%EC%BA%A0%20%EC%85%94%ED%8B%80%20%EC%9C%84%EC%B9%98";

function MapButtons({ lat, lon, destnameEncode }) {
  const naverUrl = `nmap://route/walk?dlat=${lat}&dlng=${lon}&dname=${destnameEncode}`;
  const kakaoUrl = `kakaomap://route?ep=${lat},${lon}&by=FOOT&eName=${destnameEncode}`;
  const appleUrl = `maps://?t=m&daddr=${lat},${lon}`;

  return (
    <div className="pl-1 pt-2 pb-2 space-y-2">
      <div className="flex gap-2">
        <button
          onClick={() => flutterCommunicate(naverUrl)}
          className="flex-1 py-2.5 rounded-full text-white font-bold text-sm border-none cursor-pointer"
          style={{ backgroundColor: "#2DB400" }}
        >
          네이버 지도로 길찾기
        </button>
        <button
          onClick={() => flutterCommunicate(kakaoUrl)}
          className="flex-1 py-2.5 rounded-full text-black font-bold text-sm border-none cursor-pointer"
          style={{ backgroundColor: "#FFE812" }}
        >
          카카오맵으로 길찾기
        </button>
      </div>
      <div>
        <button
          onClick={() => flutterCommunicate(appleUrl)}
          className="py-2.5 rounded-full text-white font-bold text-sm border-none cursor-pointer bg-black"
          style={{ width: "calc(50% - 4px)" }}
        >
          애플 지도로 길찾기
        </button>
      </div>
    </div>
  );
}

function CampusBusInfo() {
  return (
    <div className="bg-white min-h-screen">
      <div className="px-4 pt-1">
        {/* 안내사항 */}
        <div className="border-t border-gray-300 my-4" />
        <div className="pl-1">
          <p className="text-deep-green font-bold">안내사항</p>
          <div className="text-gray-900 text-sm mt-1 pl-1 space-y-0.5">
            <p>요금: 무료</p>
            <p>
              금요일에는 기존 인자셔틀 버스와 별도로
              <br />
              학부대학 셔틀버스가 추가운영됩니다
            </p>
            <p className="font-bold">
              스꾸버스 시간표는 모든 버스 통합 시간표입니다
            </p>
          </div>
        </div>

        {/* 운행시간 */}
        <div className="border-t border-gray-300 my-4" />
        <div className="pl-1">
          <p className="text-deep-green font-bold">운행시간</p>
          <div className="text-gray-900 text-sm mt-1 pl-1 space-y-0.5">
            <p>매주 금요일 출발 7시 버스는 8시 출발로 대체됩니다</p>
            <p className="font-bold">토요일/일요일/공휴일/학교휴일 운행없음</p>
          </div>
        </div>

        {/* 인자셔틀 위치 [인사캠 → 자과캠] */}
        <div className="border-t border-gray-300 my-4" />
        <div className="pl-1">
          <p className="text-deep-green font-bold">
            인자셔틀&nbsp;위치&nbsp;[인사캠 → 자과캠]
          </p>
          <p className="text-gray-900 text-sm mt-1 pl-1">
            탑승장소 : 600주년 기념관 건너편
          </p>
          <MapButtons
            lat={seoulLat}
            lon={seoulLon}
            destnameEncode={seoulDestnameEncode}
          />
        </div>

        {/* 인자셔틀 위치 [자과캠 → 인사캠] */}
        <div className="border-t border-gray-300 my-4" />
        <div className="pl-1">
          <p className="text-deep-green font-bold">
            인자셔틀&nbsp;위치&nbsp;[자과캠 → 인사캠]
          </p>
          <p className="text-gray-900 text-sm mt-1 pl-1">
            탑승장소 : N센터 앞
          </p>
          <MapButtons
            lat={suwonLat}
            lon={suwonLon}
            destnameEncode={suwonDestnameEncode}
          />
        </div>
      </div>
    </div>
  );
}

export default CampusBusInfo;
