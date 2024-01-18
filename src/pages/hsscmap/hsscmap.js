import React, { useState } from "react";
import { ReactComponent as HSSCMapSVG } from "../../fastmap_skkubus.svg";
import availableLines from "./availableLines";
import { handleSVGClick } from "./handleClick";

function HSSCMap() {
  const [overlayStyle, setOverlayStyle] = useState(null);
  const [overlayInfo, setOverlayInfo] = useState(null);

  const onSVGClick = (event) => {
    event.stopPropagation(); // 이거 넣으면 두번씩 터치되는 문제 해결!
    /*
    event.stopPropagation() is called at the beginning of the onSVGClick function. This stops the click event from bubbling up to parent elements, which should prevent the event handler from being triggered more than once per click.
    This change should resolve the issue of the event handler running twice for each click. 
     */
    const style = handleSVGClick(event);
    if (style) {
      setOverlayStyle(style);
    }
    const info = handleSVGClick(event);
    if (info) {
      setOverlayInfo(info);
    }
  };
  return (
    <div onClick={onSVGClick}>
      <HSSCMapSVG className="h-screen w-auto py-5 px-2.5" />
      {overlayInfo && (
        <div
          style={{ left: overlayInfo.x, top: overlayInfo.y }}
          className="absolute flex"
        >
          <div className="bg-white shadow-lg rounded-l-lg p-4 border border-gray-300 flex-grow">
            <div className="text-xs text-gray-700">{overlayInfo.text}</div>
          </div>
          <button className="bg-deep-green  text-white font-bold text-xs py-2 px-4 rounded-r-lg">
            ···
          </button>
        </div>
      )}
    </div>
  );
}

export default HSSCMap;
