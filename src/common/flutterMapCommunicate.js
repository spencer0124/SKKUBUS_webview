const flutterMapCommunicate = (
  type,
  placename,
  buildingname,
  previousplace,
  afterplace,
  placeinfo,
  time
) => {
  console.log("flutter map communicate initiated");

  try {
    // eslint-disable-next-line no-undef
    webtofluttermessage.postMessage(
      JSON.stringify({
        type: type,
        placename: placename,
        buildingname: buildingname,
        previousplace: previousplace,
        afterplace: afterplace,
        placeinfo: placeinfo,
        time: time,
      })
    );
  } catch (e) {
    console.log(e);
  }
};

export default flutterMapCommunicate;
