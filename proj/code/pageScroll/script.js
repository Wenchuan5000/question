// 这个函数用于隐藏全部以编辑过的回合
function hideTurnFirst() {
  var allTurns = document.querySelectorAll("turn");
  for (var i = 0; i < allTurns.length; i++) {
    // allTurns[i].classList.add("turnHidden");
    allTurns[i].style.display = "none";
  }
}


// 让我们调用这个函数，隐藏回合
hideTurnFirst();


// 选择答案的函数
function goTo(input) {
  input.style.display = "block";
  input.style.opacity = "0";

  setTimeout(function() {
    input.style.transition = "opacity 0.8s";
    input.style.opacity = "1";
  }, 1000)
}


// 在页面上调用这个函数可以展示第一个回合
function showFirstTurn() {
  var firstTurn = document.querySelector("#turn_1");
  goTo(firstTurn);
}


// 写成了事件监听，根据 classList 中的第一个 className 确定下一个显示那个一个回合
function pass() {
  var selection = document.querySelectorAll("selection");

  if (selection != null) {
    for (var i = 0; i < selection.length; i++) {
      selection[i].addEventListener("click", function() {
        console.log("selected!");

        // 防止双击误触
        var prevent = this.parentElement.querySelectorAll("selection");
        for (var j = 0; j < prevent.length; j++) {
          console.log("Btn No." + j + " is prevented!");
          prevent[j].style.pointerEvents = "none";
        }

        // 为选中目标加上一个背景色提示用户选中了这个选项
        this.classList.add("chosen")

        var clock = 300;
        var clockStart = 600;
        var remove = this.parentElement.parentElement;
        setTimeout(function() {
          remove.style.transition = "opacity 0.3s";
          remove.style.opacity = "0";
        }, 0 * clock + clockStart);


        // 这个必须放在后面，不然 showAns 会找不到它自身的正确的上一个
        setTimeout(function() {
          remove.style.display = "none";
        }, 1 * clock + clockStart);


        // 显示路径指向的答案
        var targetId = "turn" + this.classList[0];
        console.log(targetId);
        var target = document.querySelector("#" + targetId);

        goTo(target);

      })
    }
  }
}

pass();
