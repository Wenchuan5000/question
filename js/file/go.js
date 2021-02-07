// ========================================
// 隐藏未到达的关卡
// ========================================
function hideTurnsFirst() {
  var rounds = document.querySelectorAll("#theScene .round");
  if (rounds != null) {
    for (var i = 0; i < rounds.length; i++) {
      rounds[i].classList.add("turnHidden");
    }
  }
}

hideTurnsFirst();


// ========================================
// 页面上的进度条
// ========================================
var indexOfSecProgressOnNav = 0;

function progressBarLength() {
  var targetProgressBar = document.querySelector("#topNavGoseHere .progressNow");
  var n = document.querySelectorAll("#theScene .round").length;
  var targetProgressBarWidth = 100 / n;

  indexOfSecProgressOnNav += 1;

  if (targetProgressBar != null) {
    targetProgressBar.style.width = (targetProgressBarWidth * indexOfSecProgressOnNav) + "%";
  }
}


// ========================================
// 选择路径
// ========================================
function go() {
  var selection = document.querySelectorAll(".abcd li");

  if (selection != null) {
    for (var i = 0; i < selection.length; i++) {



      selection[i].addEventListener("click", function() {
        console.log("你选择了一个答案");



        // 防止双击误触
        var prevent = this.parentElement.querySelectorAll(".selection");
        for (var j = 0; j < prevent.length; j++) {
          console.log("Btn No." + j + " is prevented");
          prevent[j].style.pointerEvents = "none";
        }



        // 为选中目标加上一个背景色提示用户选中了这个选项
        this.classList.add("justChosen");

        var clock = 300;
        var clockStart = 600;
        var removeBtn = this.parentElement;
        setTimeout(function() {
          removeBtn.classList.add("flyAway");
        }, 0 * clock + clockStart);

        var showAns = this.parentElement.nextElementSibling;
        if (showAns != null) {
          setTimeout(function() {
            showAns.classList.remove("hidden");
            showAns.classList.add("shown");
          }, 1 * clock + clockStart);
        }



        // 去掉这个元素，以删除占用间距；
        // 这个必须放在后面，不然 showAns 会找不到它自身的正确的上一个
        setTimeout(function() {
          removeBtn.parentNode.removeChild(removeBtn);
        }, 1 * clock + clockStart);



        // 显示路径指向的答案
        var targetId = "path-" + this.classList[1];
        console.log(targetId);
        var target = document.querySelector("#" + targetId);

        setTimeout(function() {
          target.classList.remove("turnHidden");
          target.classList.add("turnShown");
        }, 4 * clock + clockStart);

        progressBarLength();
      })
    }
  }
}

go();















//
