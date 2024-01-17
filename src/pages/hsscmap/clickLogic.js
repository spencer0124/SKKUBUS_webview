import availableLines from "./availableLines";

let Timer2;

export const handleClick =
  (setClickedCircle, setInfo, overlayRef) => (event) => {
    const clickRange = 17; // pixels
    let matchingElement = null; // Store the matching element

    for (const key in availableLines) {
      const element = document.getElementById(key);
      if (element) {
        const rect = element.getBoundingClientRect();
        const inXRange =
          event.clientX >= rect.left - clickRange &&
          event.clientX <= rect.right + clickRange;
        const inYRange =
          event.clientY >= rect.top - clickRange &&
          event.clientY <= rect.bottom + clickRange;

        if (inXRange && inYRange) {
          matchingElement = key; // Store the matching element
        }
      }
    }

    if (matchingElement) {
      console.log("show type#1");
      // Update state based on the last matching element found
      setClickedCircle(matchingElement);
      setInfo(availableLines[matchingElement]);

      const rect = document
        .getElementById(matchingElement)
        .getBoundingClientRect();
      const newLeft = rect.left + window.scrollX;
      const newTop = rect.top + window.scrollY;

      if (overlayRef && overlayRef.current) {
        overlayRef.current.style.left = `${newLeft}px`;
        overlayRef.current.style.top = `${newTop}px`;
      }
    } else {
      // Reset if no matching element is found
      console.log("detached type#1");
      setClickedCircle(null);
      setInfo("");
      Timer2 = setTimeout(() => {
        setClickedCircle(1);
      }, 50);
    }
  };
