var Game = function () {
// set empty board
  this.board = [
    [ null, null, null ],
    [ null, null, null ],
    [ null, null, null ]
  ];
  // determine whose turn it is
  this.xPlay = true;
  console.log("Welcome to TIC TAC TOE!");
  this.determinePlayer = function() {
    // print current game board
    console.log("determinePlayer board (below)");
    console.log(this.board);
    // print whose turn it is
    if ( this.xPlay === true ) {
      console.log("Player X, it's your turn");
    } else {
      console.log("Player O, it's your turn");
    }
  };
  this.checkIfWon = function() {
    for(var i = 0; i < this.board.length; i++) {
      // horizontal win
      if (
        (this.board[i][0] == this.board[i][1]) &&
        (this.board[i][0] == this.board[i][2]) &&
        (this.board[i][0] !== null) ) {
          return true;
      // vertical win
      } else if (
        (this.board[0][i] == this.board[1][i]) && (this.board[0][i] == this.board[2][i]) && (this.board[0][i] !== null)) {
        return true;
      // diagonal win
      } else if (
        ( (this.board[0][0] == this.board[1][1]) && (this.board[0][0] == this.board[2][2]) && (this.board[1][1] !== null) )
        ||
        ( (this.board[0][2] == this.board[1][1]) && (this.board[0][2] == this.board[2][0]) && (this.board[1][1] !== null) )
      ) {
          return true;
      }
    }
    // no win
    return false;
  };
};



Game.prototype.consolePlay = function(row, column) {
  // print player and board
  this.determinePlayer();

  // if spot isn't occupied, mark spot with correct letter for player "x"
  if((this.board[row-1][column-1] === null) && (this.xPlay === true)) {
    this.board[row-1][column-1] = "x";
    // print winner if that marking results in a win
    if ( this.checkIfWon() === true) {
      console.log("X WINS!");
      console.log(checkIfWon());
    // if no resulting win, switch turns
    } else {
      this.xPlay = false;
    }
    // if spot isn't occupied, mark spot with correct letter for player "o"
  } else if ((this.board[row-1][column-1] === null) && (this.xPlay === false)) {
    this.board[row-1][column-1] = "o";
    // print winner if that marking results in a win
    if (this.checkIfWon() === true) {
      console.log("O WINS");
    // if no resulting win, switch turns
    } else {
      this.xPlay = true;
    }
    // invalid play, re-prompt
  } else {
    console.log("NO.");
    console.log("invalid play board");
    this.determinePlayer();
  }
};

// game = new Game();
// game.consolePlay(1,3) //player x
// console.log(game.board);

export default Game;
