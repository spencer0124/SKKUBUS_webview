const flutterCommunicate = (url) => {
  console.log("flutter communicate initiated");

  try {
    // eslint-disable-next-line no-undef
    knewyearmessage.postMessage(url);
  } catch (e) {
    console.log(e);
  }
};

export default flutterCommunicate;
