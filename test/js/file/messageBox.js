var arraySayYes = [
  "呵，好无聊。",
  "昂，你答对了。",
  "真希望你答错。",
  "哇！数学家！",
  "正解ですよ！",
  "你赢了这一轮！",
  "不得了，答对了！",
  "哈哈哈哈哈哈！",
  "莱布尼茨再世啊！",
  "高斯也没你聪明！",
];

var arraySayNo = [
  "嗯？再想一想。",
  "吼吼！呵呵呵呵！",
  "你是认真的吗？",
  "想法不错，但没答对",
  "错误答案呵呵！",
  "你回答不上来了吧！",
  "你受到了 1 点科学伤害",
  "你难过吗？",
  "你沮丧吗？",
  "バっっっツ！",
  "我开始同情你了。",
  "错！！！！！",
  "啦啦啦啦啦啦！",
  "你发现了一个错误答案。",
  "你开始怀疑自我。",
];

var arrayJustChosen = [
  "我们继续吧！",
  "别来烦我！",
];

// to change the text in the p tag in messageBox, randomly
function chatter(which) {
  if (which == "yes") {
    var i = Math.floor(Math.random() * arraySayYes.length);
    return arraySayYes[i];
  } else if (which == "no") {
    var i = Math.floor(Math.random() * arraySayYes.length);
    return arraySayNo[i];
  } else if (which == "justChosen") {
    var i = Math.floor(Math.random() * arrayJustChosen.length);
    return arrayJustChosen[i];
  }
}

// the index of messageBox
// the first index of the first messageBox is 1.
var i_messageBox = 0


// create a new messageBox
function createMessageBox() {
  i_messageBox += 1;
  console.log("messageBox_" + i_messageBox + " created!")

  var newMessageBox = document.createElement("div");
  newMessageBox.id = "messageBox_" + i_messageBox;
  newMessageBox.classList.add("messageBox");
  document.querySelector("#pageGoseHere").appendChild(newMessageBox);

  var newMark = document.createElement("div");
  newMark.id = "messageBox-mark_" + i_messageBox;
  newMark.classList.add("mark");
  newMessageBox.appendChild(newMark);

  var newIconNaked = document.createElement("i");
  newIconNaked.id = "messageBox-mark-icon_" + i_messageBox;
  newIconNaked.classList.add("iconfont-naked");
  newIconNaked.innerHTML = "&#xe62d;";
  newMark.appendChild(newIconNaked);

  for (var i = 1; i <= 8; i++) {
    var newStar = document.createElement("div");
    newStar.classList.add("star");
    newStar.classList.add("i" + i);
    newMark.appendChild(newStar);
  }

  var newText = document.createElement("div");
  newText.classList.add("text");
  newMessageBox.appendChild(newText);

  var newH1 = document.createElement("h1");
  newH1.innerHTML = "提示走这里";
  newText.appendChild(newH1);

  var newP = document.createElement("p");
  newP.innerHTML = "数落人的话走这里";
  newText.appendChild(newP);
}


// delete the messageBox that is already uesed
function removePreviousMessageBox() {
  var i_messageBoxToRemove = 0;
  i_messageBoxToRemove = i_messageBox - 1;

  if (i_messageBox > 1) {

    var removePreviousMessageBox = document.querySelector("#messageBox_" + i_messageBoxToRemove);
    removePreviousMessageBox.parentNode.removeChild(removePreviousMessageBox);
  }
}


// to determine the answer is true or false.
function yesOrNo(which) {
  createMessageBox();
  removePreviousMessageBox();

  var currentMessageBox = document.querySelector("#messageBox_" + i_messageBox);
  var currentMessageBoxId = currentMessageBox.id;
  var currentMessageBoxIcon = document.querySelector("#" + currentMessageBoxId + " i");
  var currentMessageBoxTitle = document.querySelector("#" + currentMessageBoxId + " h1");
  var currentMessageBoxText = document.querySelector("#" + currentMessageBoxId + " p");


  console.log(currentMessageBox.id);

  if (which == "yes") {
    currentMessageBox.classList.add("tadashii");
    currentMessageBoxIcon.innerHTML = "&#xe632;";
    currentMessageBoxTitle.innerHTML = "正确";
  } else if (which == "no") {
    currentMessageBox.classList.add("batsu");
    currentMessageBoxIcon.innerHTML = "&#xe634;";
    currentMessageBoxTitle.innerHTML = "错误";
  } else if (which == "justChosen") {
    currentMessageBox.classList.add("tadashii");
    currentMessageBoxIcon.innerHTML = "&#xe634;";
    currentMessageBoxTitle.innerHTML = "很好";
  }

  currentMessageBoxText.innerHTML = chatter(which);
}

// TODO: show next turn
function showNextTurn() {

}


// NOTE: this.nextElementSibling;

var turnYes = document.querySelectorAll(".abcd [class*='tr']");

if (turnYes != null) {
  for (i = 0; i < turnYes.length; i++) {
    turnYes[i].addEventListener("click", function() {

      yesOrNo("yes");

    });
  }
}

var turnNo = document.querySelectorAll(".abcd [class*='na']");

if (turnNo != null) {
  for (var i = 0; i < turnNo.length; i++) {
    turnNo[i].addEventListener("click", function() {

      // this.style.animation = "btnBadChoice 0.5s forwards";
      this.classList.add("badChoice");

      yesOrNo("no");

    })
  }
}

var turnJustGo = document.querySelectorAll(".abcd .ohoh");

if (turnJustGo != null) {
  for (var i = 0; i < turnJustGo.length; i++) {
    turnJustGo[i].addEventListener("click", function() {

      // this.style.animation = "btnBadChoice 0.5s forwards";
      // this.classList.add("badChoice");

      yesOrNo("justChosen");

    })
  }
}




















//
