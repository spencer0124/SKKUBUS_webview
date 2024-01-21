import React, { useState } from "react";
import { ReactComponent as HSSCMapSVG } from "../../fastmap_skkubus.svg";
// import availableLines from "./data/AvailableLines";
import { handleSVGClick } from "./handleClick";
import flutterMapCommunicate from "../../common/flutterMapCommunicate";

function HSSCMap() {
  const [overlayInfo, setOverlayInfo] = useState(null);

  const onSVGClick = (event) => {
    closeOverlay();

    /*
    event.stopPropagation() is called at the beginning of the onSVGClick function. This stops the click event from bubbling up to parent elements, which should prevent the event handler from being triggered more than once per click.
    This change should resolve the issue of the event handler running twice for each click. 
     */
    event.stopPropagation(); // 이거 넣으면 두번씩 터치되는 문제 해결!
    const info = handleSVGClick(event);

    // 마커 생성되는 경우
    if (info) {
      setOverlayInfo(info);
      console.log("info:", info);
      console.log("set overlay");
      flutterMapCommunicate(
        "add",
        info.placename,
        info.buildingname,
        info.previousplace,
        info.afterplace,
        info.placeinfo,
        info.time,
        info.leftColor,
        info.rightColor
      );
    }

    // 마커 사라지는 경우
    else {
      console.log("no overlay");
      flutterMapCommunicate("delete");
    }
  };

  const closeOverlay = () => {
    setOverlayInfo(null);
  };

  // overlayInfo가 있으면, 아래의 div(마커 ui)를 보여준다.
  return (
    <div onClick={onSVGClick}>
      <HSSCMapSVG className="h-screen w-auto pb-20 pt-0.5 px-2.5" />
      {overlayInfo && (
        <div
          style={{ left: overlayInfo.x, top: overlayInfo.y }}
          className="absolute flex flex-col items-center"
        >
          {/* Tooltip Box */}
          <div className="p-1 bg-white shadow-lg rounded-lg  border border-gray-300">
            <div className="text-xs text-gray-700">
              {/* {overlayInfo.placename} */}
              📍
            </div>
          </div>
          {/* Tooltip Arrow */}
          <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-gray-300"></div>
        </div>
      )}
    </div>
  );
}

export default HSSCMap;
