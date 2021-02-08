// ========================================
// import js
// ========================================
function importJS(_src, _id) {
  var imported = document.createElement("script");
  imported.src = _src;
  // imported.id = _id;
  document.querySelector("#scriptGoesHere").appendChild(imported);
}

importJS("js/file/go.js", "");
importJS("js/file/messageBox.js", "")





function addMarginStart() {
  var md = document.querySelector("#md");
  var mdMarginStart = 64;

  var topNav = document.querySelector("#topNav");
  if (topNav != null) {
    var topNavHeight = topNav.offsetHeight;
    console.log("Top navigation is " + topNavHeight + " height.");
    mdMarginStart += topNavHeight;
    md.style.marginTop = mdMarginStart + "px";
  } else {
    console.log("This page has no top navigation.");
    md.style.marginTop = mdMarginStart + "px";
  }
}


addMarginStart();
