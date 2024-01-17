import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as HSSCMapSVG } from "../../fastmap_skkubus.svg";
import { handleClick } from "./clickLogic";

let scrollTimer;
let scollStartDetect = false;

//
function HSSCMap() {
  const [clickedCircle, setClickedCircle] = useState(1); // null로 하면 처음에 클릭이 안되는 버그가 있음
  const [info, setInfo] = useState("");
  const [isInitialized, setIsInitialized] = useState(false);
  const overlayRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scollStartDetect) {
      console.log("detached type#2"); // Print the message when scrolling starts
      scollStartDetect = false; // Reset the flag
    }
  }, [clickedCircle]);

  // This effect runs when `clickedCircle` changes.
  useEffect(() => {
    // If `clickedCircle` is not null, the overlay is being shown.
    if (clickedCircle) {
      // console.log("showing");
    } else {
      // If `clickedCircle` is null, the overlay has disappeared.
      // console.log("disappear");
    }
  }, [clickedCircle]); // Dependency array with `clickedCircle` to run the effect when it changes.

  const handleScroll = () => {
    clearTimeout(scrollTimer);
    // If a scroll is detected, clear the clickedCircle state to hide the overlay.
    if (clickedCircle) {
      setClickedCircle(null);
    }

    scrollTimer = setTimeout(() => {
      setClickedCircle(1);
      scollStartDetect = true;
    }, 50);

    // Set the flag to true when scrolling starts
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll, {
        passive: true,
      });
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [clickedCircle]); // Added `clickedCircle` as a dependency.

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto"
        style={{ height: "100vh" }}
      >
        <div className="aspect-w-16 aspect-h-9">
          <HSSCMapSVG
            className="w-[250%] h-[98%]"
            onClick={handleClick(setClickedCircle, setInfo, overlayRef)}
          />
        </div>
      </div>
      {clickedCircle && (
        <div
          ref={overlayRef}
          className="absolute bg-white border border-black p-2 rounded-md shadow-md pointer-events-none"
          style={{ position: "absolute" }} // Initial position set to absolute
        >
          {info}
        </div>
      )}
    </div>
  );
}

export default HSSCMap;
