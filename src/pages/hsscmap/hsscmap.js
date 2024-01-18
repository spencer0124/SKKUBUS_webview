import React, { useState } from "react";
import { ReactComponent as HSSCMapSVG } from "../../fastmap_skkubus.svg";
import availableLines from "./availableLines";
import { handleSVGClick } from "./handleClick";
import flutterMapCommunicate from "../../common/flutterMapCommunicate";

function HSSCMap() {
  const [overlayStyle, setOverlayStyle] = useState(null);
  const [overlayInfo, setOverlayInfo] = useState(null);

  const onSVGClick = (event) => {
    closeOverlay();

    /*
    event.stopPropagation() is called at the beginning of the onSVGClick function. This stops the click event from bubbling up to parent elements, which should prevent the event handler from being triggered more than once per click.
    This change should resolve the issue of the event handler running twice for each click. 
     */
    event.stopPropagation(); // 이거 넣으면 두번씩 터치되는 문제 해결!
    const style = handleSVGClick(event);
    if (style) {
      setOverlayStyle(style);
    }
    const info = handleSVGClick(event);
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
        info.time
      );
    } else {
      console.log("no overlay");
      flutterMapCommunicate("delete");
    }
  };

  const closeOverlay = () => {
    // console.log("delete overlay");
    setOverlayInfo(null);
  };

  return (
    <div onClick={onSVGClick}>
      <HSSCMapSVG className="h-screen w-auto py-20 px-2.5" />
      {overlayInfo && (
        <div
          style={{ left: overlayInfo.x, top: overlayInfo.y }}
          className="absolute flex"
        >
          <div className="bg-white shadow-lg rounded-l-lg p-4 border border-gray-300 flex-grow">
            <div className="text-xs text-gray-700">{overlayInfo.placename}</div>
          </div>
          <button className="bg-deep-green text-white font-bold text-xs py-2 px-4 rounded-r-lg">
            ···
          </button>
          <div className="absolute w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-t-transparent border-l-transparent border-r-transparent border-b-black left-1/2 transform -translate-x-1/2 -translate-y-full rotate-180"></div>
        </div>
      )}
    </div>
  );
}

export default HSSCMap;
