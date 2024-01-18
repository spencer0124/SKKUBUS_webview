import availableLines from "./availableLines";

/*
건물끼리 연결하는 연결통로(connect)는 그룹으로 이루어져 있음 -> groupId로 구분
건물 내부의 층들은 각각 원으로 이루어져 있음 -> id로 구분

터치를 쉽게 하기 위해 각각의 도형 위에는
크기가 더 큰 투명도 1% 도형을 그려놓음
따라서 실제로 정보를 가져오기 위해는 이름에서 "_clickarea"를 제거해야 함
*/

export const handleSVGClick = (event) => {
  const target = event.target;
  let { id: clickedId, groupId } = extractIds(target);

  clickedId = processClickArea(clickedId);
  groupId = groupId ? processClickArea(groupId) : groupId;

  const actualId = groupId || clickedId;
  if (isAvailableLine(actualId)) {
    return createOverlayInfo(actualId);
  }

  return null;
};

const extractIds = (element) => {
  return {
    id: element.id,
    groupId: element.getAttribute("data-group"),
  };
};

const processClickArea = (id) => {
  return id && id.endsWith("_clickarea") ? id.replace("_clickarea", "") : id;
};

const isAvailableLine = (id) => {
  return availableLines.hasOwnProperty(id);
};

const createOverlayInfo = (id) => {
  const element = document.getElementById(id);
  const rect = element.getBoundingClientRect();

  return {
    ...availableLines[id],
    x: rect.left + window.scrollX - 9,
    y: rect.top + window.scrollY - 25,
  };
};
