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

  for(var i = 0; i < this.board.length; i++) {
    if (
      (this.board[i][0] == this.board[i][1]) &&
      (this.board[i][0] == this.board[i][2]) &&
      (this.board[i][0] !== null) ) {
        return true;
    } else if ((this.board[0][i] == this.board[1][i]) && (this.board[0][i] == this.board[2][i]) && (this.board[0][i] !== null)) {
      return true;
    } else if ( ((this.board[0][0] == this.board[1][1]) && (this.board[0][0] == this.board[2][2])) ||
      ((this.board[0][2] == this.board[1][1]) && (this.board[0][2] == this.board[2][0])) ) {
        return true;
    }
  }
  return false;
};

Game.prototype.determinePlayer = function(xPlay) {
  if ( this.xPlay === true ) {
    console.log("Player X, it's your turn");
  } else {
    console.log("Player Y, it's your turn");
  }
};


export default Game;
