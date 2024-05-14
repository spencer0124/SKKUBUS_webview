import React from "react";
import NSCmapImage from "../../benzenmap.webp";

function NSCmap() {
  return (
    <div
      style={{ overflowX: "auto", minHeight: "100vh" }}
      className="px-5 pt-5 pb-0"
    >
      <img
        src={NSCmapImage}
        alt="NSCmap"
        style={{
          height: "95vh",
          width: "auto",
          maxWidth: "none",
          display: "block",
        }}
      />
    </div>
  );
}

export default NSCmap;
