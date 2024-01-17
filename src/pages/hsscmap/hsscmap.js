import React, { useState } from "react";
import { ReactComponent as HSSCMapSVG } from "../../fastmap_skkubus.svg";
import availableLines from "./availableLines";
import { handleSVGClick } from "./handleClick";

function HSSCMap() {
  const [overlayStyle, setOverlayStyle] = useState(null);

  const onSVGClick = (event) => {
    const style = handleSVGClick(event);
    if (style) {
      setOverlayStyle(style);
    }
  };

  return (
    <div onClick={onSVGClick}>
      <HSSCMapSVG className="h-screen w-auto py-5 px-2.5" />
      {overlayStyle && <div style={overlayStyle} className="overlay"></div>}
    </div>
  );
}

export default HSSCMap;
