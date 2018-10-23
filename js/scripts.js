//business end
function Grid(){
  this.gridArray = ["","","","","","","","",""]
};
function changePlayer() {
  if (tictac === "X") {
    tictac = player1.mark;
  }
  else {
    tictac = player2.mark;
  };
};
function Player(name, xo) {
  this.name = name;
  this.mark = xo;
  this.score = 0;
};
//Player.prototype.mark = function(){

//};

//player1.mark(); // returns "X"

//var testSpace = board.find(1, 2); // board.find(1,2) returns a Space object

//testSpace.xCoordinate(); // returns 1
//testSpace.yCoordinate(); // returns 2

//testSpace.mark(testPlayer);
//testSpace.markedBy(); // returns testPlayer or "X"

//board.gameOver(); // returns a boolean


//user end
var game = new Grid();
function score(){
  if (game.gridArray[0]==="X"&&game.gridArray[1]==="X"&&game.gridArray[2]==="X") {
    alert("Player1 wins!");
  } else if (game.gridArray[3]==="X"&&game.gridArray[4]==="X"&&game.gridArray[5]==="X") {
    alert("Player1 wins!");
  } else if (game.gridArray[6]==="X"&&game.gridArray[7]==="X"&&game.gridArray[8]==="X") {
    alert("Player1 wins!");
  } else if (game.gridArray[0]==="X"&&game.gridArray[3]==="X"&&game.gridArray[6]==="X") {
    alert("Player1 wins!");
  } else if (game.gridArray[1]==="X"&&game.gridArray[4]==="X"&&game.gridArray[7]==="X") {
    alert("Player1 wins!");
  } else if (game.gridArray[2]==="X"&&game.gridArray[5]==="X"&&game.gridArray[8]==="X") {
    alert("Player1 wins!");
  } else if (game.gridArray[0]==="X"&&game.gridArray[4]==="X"&&game.gridArray[8]==="X") {
    alert("Player1 wins!");
  } else if (game.gridArray[2]==="X"&&game.gridArray[4]==="X"&&game.gridArray[6]==="X") {
    alert("Player1 wins!");

  } else if (game.gridArray[0]==="O"&&game.gridArray[1]==="O"&&game.gridArray[2]==="O") {
    alert("Player2 wins!");
  } else if (game.gridArray[3]==="O"&&game.gridArray[4]==="O"&&game.gridArray[5]==="O") {
    alert("Player2 wins!");
  } else if (game.gridArray[6]==="O"&&game.gridArray[7]==="O"&&game.gridArray[8]==="O") {
    alert("Player2 wins!");
  } else if (game.gridArray[0]==="O"&&game.gridArray[3]==="O"&&game.gridArray[6]==="O") {
    alert("Player2 wins!");
  } else if (game.gridArray[1]==="O"&&game.gridArray[4]==="O"&&game.gridArray[7]==="O") {
    alert("Player2 wins!");
  } else if (game.gridArray[2]==="O"&&game.gridArray[5]==="O"&&game.gridArray[8]==="O") {
    alert("Player2 wins!");
  } else if (game.gridArray[0]==="O"&&game.gridArray[4]==="O"&&game.gridArray[8]==="O") {
    alert("Player2 wins!");
  } else if (game.gridArray[2]==="O"&&game.gridArray[4]==="O"&&game.gridArray[6]==="O") {
    alert("Player2 wins!");
  }
};
$(document).ready(function() {
  var player1 = new Player(player1, "X", 1);
  var player2 = new Player(player2, "O", 2);
  var turn = player1.mark;
  function changePlayer() {
    if (turn === player1.mark) {
      turn = player2.mark;
    }
    else {
      turn = player1.mark;
    }
  };
  var allButtons = $("button.butt");
  allButtons.on('click', function(){
    var buttVal = parseInt($(this).val());
    console.log(buttVal);
    game.gridArray[buttVal] = turn;
    console.log(game.gridArray);
    $(this).prop('disabled', true);
    this.append(turn);
    changePlayer();
    score();
  });
});
