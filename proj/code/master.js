function importJS(_src, _id) {
  var imported = document.createElement("script");
  imported.src = _src;
  // imported.id = _id;
  document.querySelector("#scriptGoesHere").appendChild(imported);
}

importJS("code/pageScroll/script.js", "");
importJS("code/messageBox/script.js", "");
