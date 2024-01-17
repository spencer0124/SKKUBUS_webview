import React from "react";
import { Grommet, grommet, Box } from "grommet";
import flutterCommunicate from "../../common/flutterCommunicate";

// Constants
const ACTIVE_COLOR = "#043927";
const INACTIVE_COLOR = "#9DC183";
const WHITE = "#ffffff";
const BLACK = "#101820";
const MARKER_DIAMETER = 30;
const CONNECTOR_THICKNESS = 12;
const ACTIVE_OUTLINE = 6;
const INACTIVE_OUTLINE = 3;

const toPx = (num) => `${num}px`;

// // StopConnector Component
// const StopConnector = ({ index, activeIndex, weight }) => {
//   return (
//     <Box
//       background={activeIndex >= index ? ACTIVE_COLOR : INACTIVE_COLOR}
//       style={{ flexGrow: weight }}
//       height={toPx(CONNECTOR_THICKNESS)}
//     />
//   );
// };

// SubwayMap Component
function SubwayMap({ stops, activeIndex }) {
  // Calculate the width of the rectangle to be from the center of the first circle to the center of the last circle
  const totalWidth = toPx(
    MARKER_DIAMETER * (stops.length - 1) +
      CONNECTOR_THICKNESS * (stops.length - 1)
  );

  return (
    <Box margin="large" align="center">
      <Box
        background={INACTIVE_COLOR}
        direction="row"
        height={toPx(MARKER_DIAMETER)}
        width={totalWidth}
        align="center"
        style={{
          position: "relative", // Needed for absolute positioning of markers
        }}
      >
        {stops.map((_, index) => (
          <StopMarker
            key={`marker-${index}`}
            index={index}
            activeIndex={activeIndex}
            // Position each marker so the center of the first and last circles are at the edges of the rectangle
            style={{
              position: "absolute",
              left: toPx(
                index * (MARKER_DIAMETER + CONNECTOR_THICKNESS) -
                  MARKER_DIAMETER / 2
              ),
              zIndex: 1, // Ensure markers are above the rectangle background
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

// Rest of the components remains unchanged

// StopMarker Component and HSSCMap Component remain unchanged

// Rest of the components remains unchanged

// StopMarker Component remains unchanged

// HSSCMap Component remains unchanged

// StopMarker Component
const StopMarker = ({ index, activeIndex, style }) => {
  const isCompleted = index <= activeIndex;
  return (
    <Box
      background={isCompleted ? ACTIVE_COLOR : WHITE}
      style={{
        border: `${INACTIVE_OUTLINE}px solid ${BLACK}`,
        borderRadius: "50%", // Ensures the marker is a circle
        height: toPx(MARKER_DIAMETER),
        width: toPx(MARKER_DIAMETER),
        ...style, // Spread additional styles passed via props
      }}
    />
  );
};

// HSSCMap Component remains unchanged

// HSSCMap Component
function HSSCMap() {
  const ACTIVE_STOP_INDEX = 3;
  const STOPS = [
    { weight: 0, label: "옥상" },
    { weight: 0.5, label: "5층" },
    { weight: 0.5, label: "4층" },
    { weight: 0.5, label: "3층" },
    { weight: 0.5, label: "2층" },
  ];

  return (
    <Grommet theme={grommet}>
      <SubwayMap stops={STOPS} activeIndex={ACTIVE_STOP_INDEX} />
    </Grommet>
  );
}

export default HSSCMap;
