import React from "react";
import flutterCommunicate from "../../common/flutterCommunicate";

function LostAndFound() {
  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText("studentaid@skku.edu")
      .then(() => {
        alert("이메일 주소 복사가 완료되었습니다");
      })
      .catch(() => {
        alert("복사에 실패했습니다");
      });
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="px-4 pt-4">
        {/* 유실물 접수 및 처리 절차 */}
        <div className="bg-gray-200 rounded-lg p-4">
          <p className="text-sm font-bold">유실물 접수 및 처리 절차</p>
          <p className="text-sm text-gray-900 mt-1 whitespace-pre-line">
            {"→  최초 발견자 습득 시, 1~2일 내 학생지원팀 이관\n→  학생지원팀: 유실물 게시판에 1개월 동안 공지\n→  1년 보관 후 폐기"}
          </p>
        </div>

        {/* 학생지원팀 */}
        <div className="border-t border-gray-300 my-4" />
        <div className="pl-1">
          <p className="text-deep-green font-bold">학생지원팀</p>
          <div className="mt-1 pl-1">
            <p className="text-gray-900 text-sm whitespace-pre-line">
              {"인사캠: 600주년기념관 1층\n자과캠: 학생회관 종합행정실 1층\n운영시간: 평일 09:00~17:30"}
            </p>
            <div className="flex items-center mt-0.5">
              <span className="text-gray-900 text-sm">이메일:&nbsp;</span>
              <button
                onClick={handleCopyEmail}
                className="bg-transparent border-none cursor-pointer p-0 text-blue-500 text-sm"
              >
                studentaid@skku.edu
              </button>
            </div>
          </div>
        </div>

        {/* 전화 연락처 */}
        <div className="border-t border-gray-300 my-4" />
        <div className="pl-1">
          <div className="flex items-center">
            <span className="text-gray-900 text-sm">인사캠 학생지원팀&nbsp;&nbsp;</span>
            <button
              onClick={() => flutterCommunicate("tel:027601077")}
              className="bg-transparent border-none cursor-pointer p-0 text-deep-green font-bold text-sm"
            >
              02-760-1077
            </button>
          </div>
          <div className="flex items-center mt-1">
            <span className="text-gray-900 text-sm">자과캠 학생지원팀&nbsp;&nbsp;</span>
            <button
              onClick={() => flutterCommunicate("tel:0312905034")}
              className="bg-transparent border-none cursor-pointer p-0 text-deep-green font-bold text-sm"
            >
              031-290-5034
            </button>
          </div>
        </div>

        {/* 분실물 게시판 */}
        <div className="border-t border-gray-300 my-4" />
        <div className="pl-1">
          <p className="text-deep-green font-bold">분실물 게시판</p>
          <div className="mt-1 pl-1 space-y-1">
            <button
              onClick={() =>
                flutterCommunicate(
                  "https://www.skku.edu/skku/campus/support/lost_and_found_2.do"
                )
              }
              className="flex items-center bg-transparent border-none cursor-pointer p-0"
            >
              <span className="text-blue-500 text-lg">🔗</span>
              <span className="text-blue-500 text-sm ml-1">물건을 찾습니다</span>
            </button>
            <button
              onClick={() =>
                flutterCommunicate(
                  "https://www.skku.edu/skku/campus/support/lost_and_found_3.do"
                )
              }
              className="flex items-center bg-transparent border-none cursor-pointer p-0"
            >
              <span className="text-blue-500 text-lg">🔗</span>
              <span className="text-blue-500 text-sm ml-1">주인을 찾습니다</span>
            </button>
          </div>
        </div>

        <div className="border-t border-gray-300 my-4" />
      </div>
    </div>
  );
}

export default LostAndFound;
