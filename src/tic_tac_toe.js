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

Game.prototype.checkIfWon = function() {
  // console.log("YOLO!!!!!");
  // console.log(this.board);
  for(var i = 0; i < this.board.length; i++) {
    if((this.board[i][0] == this.board[i][1] == this.board[i][2]) && (this.board[i][0] !== null)) {
      return true;
    }
  }
};

Game.prototype.determinePlayer = function(xPlay) {
  if ( this.xPlay === true ) {
    console.log("Player X, it's your turn");
  } else {
    console.log("Player Y, it's your turn");
  }
};


export default Game;
