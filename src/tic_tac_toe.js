var TicTacToe = function () {

  var Game = function (board) {
    this.board = board;
    this.xPLay = true;
  };

  Game.prototype.checkIfWon = function(board) {
    // logic to win game
  };


  Game.prototype.determinePlayer = function(xPlay) {
    xPlay = this.xPlay
    if ( xPlay == true ) {
      console.log("Player X, it's your turn");
    } else {
      console.log("Player Y, it's your turn");
    }
  };


  var Board = [
      [ null, null, null ],
      [ null, null, null ],
      [ null, null, null ]
    ]

};

export default TicTacToe;
