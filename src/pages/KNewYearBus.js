import React from "react";

function Hello() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-5">
      {/* <div className="text-center mb-4">설 연휴 귀향/귀경 버스 수요 조사</div> */}
      <img
        src="/assets/images/KNewYearBusNotice.jpeg"
        alt="이미지"
        className="max-w-full h-auto mb-4"
        width="500"
        height="500"
      />
      <a
        href="https://forms.gle/D6wc5TxA6BtSXVY7A"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800"
      >
        수요조사 참여하기(클릭)
      </a>
    </div>
  );
}

export default Hello;
