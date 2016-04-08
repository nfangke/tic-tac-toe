//BUSINESS LOGIC
function Plot (coordinate, valueNum) {
  this.coordinate = coordinate;
  this.valueNum = valueNum;
}


var a1 = new Plot ("a1", 0);
var b1 = new Plot ("b1", 0);
var c1 = new Plot ("c1", 0);

var a2 = new Plot ("a2", 0);
var b2 = new Plot ("b2", 0);
var c2 = new Plot ("c2", 0);

var a3 = new Plot ("a3", 0);
var b3 = new Plot ("b3", 0);
var c3 = new Plot ("c3", 0);


var board = [a1, b1, c1, a2, b2, c2, a3, b3, c3];


function winCheck() {
  if ((a1.valueNum !== 0) && (a1.valueNum === b1.valueNum) && (b1.valueNum === c1.valueNum) || (a2.valueNum !== 0) && (a2.valueNum === b2.valueNum) && (b2.valueNum === c2.valueNum) || (a3.valueNum !== 0) && (a3.valueNum === b3.valueNum) && (b3.valueNum === c3.valueNum) || (a1.valueNum !== 0) && (a1.valueNum === a2.valueNum) && (a2.valueNum === a3.valueNum) || (b1.valueNum !== 0) && (b1.valueNum === b2.valueNum) && (b2.valueNum === b3.valueNum) ||
  (c1.valueNum !== 0) && (c1.valueNum === c2.valueNum) && (c2.valueNum === c3.valueNum) ||
  (a1.valueNum !== 0) && (a1.valueNum === b2.valueNum) && (b2.valueNum === c3.valueNum) ||
  (a3.valueNum !== 0) && (a3.valueNum === b2.valueNum) && (b2.valueNum === c1.valueNum)) {
  alert("win!");
  }
  else {
    console.log("not yet");
  }

}
var turn = 0;

//UI LOGIC
$(document).ready(function() {
  $("h1").hide().fadeIn(1900);

  $(".plot").click(function() {
    turn++;
    winCheck();
    if (turn % 2 === 0) {
      $(this).addClass("o");
      var id = $(this).attr('id');
      for (i = 0; i <= board.length; i++) {
        if (board[i].coordinate === id) {
          return board[i].valueNum += 1;
        }
        else {
          console.log("2");
        }
      }
    }
    else {
      $(this).addClass("x");

      var id = $(this).attr('id');
      for (i = 0; i <= board.length; i++) {
        if (board[i].coordinate === id) {
          return board[i].valueNum += 2;
        }
        else {
          console.log("3");
        }
      }
    }

  });

});
