import React from "react";
import flutterCommunicate from "../../common/flutterCommunicate";

function KNewYearBus() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-5">
      {/* <div className="text-center mb-4">설 연휴 귀향/귀경 버스 수요 조사</div> */}
      <img
        src="./assets/images/KNewYearBusNotice.jpeg"
        alt="이미지"
        className="max-w-full h-auto mb-4"
        width="500"
        height="500"
      />
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="block text-blue-600 hover:text-blue-800 font-medium py-2 px-4 transition duration-300 ease-in-out"
        onClick={() =>
          flutterCommunicate("https://forms.gle/D6wc5TxA6BtSXVY7A")
        }
      >
        👉 수요조사 참여하기
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="block text-blue-600 hover:text-blue-800 font-medium py-2 px-4 transition duration-300 ease-in-out"
        onClick={() => {
          flutterCommunicate("https://www.instagram.com/p/C11OUpZvU9G/");
        }}
      >
        👉 총학생회 게시물 확인하기
      </a>
    </div>
  );
}

export default KNewYearBus;
