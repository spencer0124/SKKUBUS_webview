import React from "react";

function Hello() {
  const handleClick = () => {
    // Your action code goes here
    console.log("Link clicked!");
    // Add any other actions you want to perform

    try {
      // eslint-disable-next-line no-undef
      knewyearmessage.postMessage("https://forms.gle/D6wc5TxA6BtSXVY7A");
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick2 = () => {
    // Your action code goes here
    console.log("Link clicked!");
    // Add any other actions you want to perform

    try {
      // eslint-disable-next-line no-undef
      knewyearmessage.postMessage("https://www.instagram.com/p/C11OUpZvU9G/");
    } catch (e) {
      console.log(e);
    }
  };

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
        // href="https://forms.gle/D6wc5TxA6BtSXVY7A"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800"
        onClick={handleClick}
      >
        👉 수요조사 참여하기
      </a>
      <a
        // href="https://forms.gle/D6wc5TxA6BtSXVY7A"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800"
        onClick={handleClick2}
      >
        👉 총학생회 게시물 확인하기
      </a>
    </div>
  );
}

export default Hello;
