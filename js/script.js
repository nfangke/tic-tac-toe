//Business Logic

// var turns = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
//
// // player one is the first click and all odd clicks.
// function Player (turns) {
//   for (var = i; i <= turns.length; i++) {
//     if (turns[i] % 2 === 0) {
//
//     }
//   }
// }
//
// function Game ()
// // all odd clicks are player one. first click is player one. player one displays x's.
// //all even clicks are player two and return O's.
//
// function Plot ()
// // has three states. empty on load. if clicked on an odd count then dispays x. if clicked on even count then displays o's. filled spaces are not clickable and do not increase the counter
//
// function Board ()
// // The game is won if all spaces in a row are filled and the same OR all spaces in a column are filled and the same OR a1 = b2 = c3 OR c1 = b2 = a3.



//UI Logic

// function Game (turns) {
//
// }

function Plot (coordinate, value) {
  this.coordinate = coordinate;
  this.value = value;
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
// function winCheck() {
//   if (((a1 !== 0) && (a1 === b1) && (b1 === c1)) || ((a2 !== 0) && (a2 === b2) && (b2 === c2)) || ((a3 !== 0) && (a3 === b3) && (b3 === c3))) {
//   alert("Win!");
// }


$(document).ready(function() {
  $("h1").hide().fadeIn(1900);



var turn = 0;

    $(".plot").click(function() {
      turn++;
      console.log(turn);
      if (turn % 2 === 0) {
        $(this).addClass("o");

        var id = $(this).attr('id');
        for (i = 0; i <= board.length; i++) {
          if (board[i].coordinate === id) {
            return board[i].value += 1;
            console.log(board[i].coordinate);


      }

    }

  }

  //  else if (turn % 2 === 0) {
       else {
        $(this).addClass("x");

        var id = $(this).attr('id');
        for (i = 0; i <= board.length; i++) {
          if (board[i].coordinate === id) {
            return board[i].value += 2;
            alert(board[i]);
          }

        }

        }



        // winCheck();


  });
});



// The game is won if all spaces in a row are filled and the same OR all spaces in a column are filled and the same OR a1 = b2 = c3 OR c1 = b2 = a3.
//
//   function Game {
//     if (((a1 !== 0) && (a1 === b1) && (b1 === c1)) || ((a2 !== 0) && (a2 === b2) && (b2 === c2)) || ((a3 !== 0) && (a3 === b3) && (b3 === c3))) {
//       alert("Win!");
//     }
//
//   });
//
