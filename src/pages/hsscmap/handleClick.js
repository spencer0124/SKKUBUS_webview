// handleClick.js
import availableLines from "./availableLines";

const checkNearby = (x, y, expansionRadius) => {
  for (
    let dx = -expansionRadius;
    dx <= expansionRadius;
    dx += expansionRadius
  ) {
    for (
      let dy = -expansionRadius;
      dy <= expansionRadius;
      dy += expansionRadius
    ) {
      const element = document.elementFromPoint(x + dx, y + dy);
      if (element && (element.id || element.getAttribute("data-group"))) {
        return element;
      }
    }
  }
  return null;
};

export const handleSVGClick = (event) => {
  let clickedId = event.target.id;
  let target = event.target;
  let groupId = target.getAttribute("data-group");

  if (
    !(
      availableLines.hasOwnProperty(clickedId) ||
      (groupId && availableLines.hasOwnProperty(groupId))
    )
  ) {
    const expansionRadius = 30;
    const rect = target.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const nearbyElement = checkNearby(centerX, centerY, expansionRadius);

    if (nearbyElement) {
      clickedId = nearbyElement.id;
      groupId = nearbyElement.getAttribute("data-group");
    }
  }

  if (availableLines.hasOwnProperty(clickedId)) {
    console.log("if - Information:", availableLines[clickedId]);
    alert(availableLines[clickedId]);
  } else if (groupId && availableLines.hasOwnProperty(groupId)) {
    console.log("else if - Information:", availableLines[groupId]);
    alert(availableLines[groupId]);
  } else {
    console.log("else - Clicked ID:", clickedId);
    console.log("else - Clicked ID not found in availableLines");
  }
};
