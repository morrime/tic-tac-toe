var Game = function () {
  // this.game = new Game();
  this.var = true;
  this.board = [
    [ null, null, null ],
    [ null, null, null ],
    [ null, null, null ]
  ];
  this.xPLay = true;
};

Game.prototype.checkIfWon = function(board) {
  console.log("YOLO!!!!!");
  // logic to win game
};

Game.prototype.determinePlayer = function(xPlay) {
  if ( this.xPlay === true ) {
    console.log("Player X, it's your turn");
  } else {
    console.log("Player Y, it's your turn");
  }
};


export default Game;
