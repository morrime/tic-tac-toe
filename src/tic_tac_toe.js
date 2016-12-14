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
};

checkIfWon = function(board) {
  for(var i = 0; i < board.length; i++) {
    // horizontal win
    if (
      (board[i][0] == board[i][1]) &&
      (board[i][0] == board[i][2]) &&
      (board[i][0] !== null) ) {
        return true;
    // vertical win
    } else if (
      (board[0][i] == board[1][i]) && (board[0][i] == board[2][i]) && (board[0][i] !== null)) {
      return true;
    // diagonal win
    } else if (
      ( (board[0][0] == board[1][1]) && (board[0][0] == board[2][2]) && (board[1][1] !== null) )
      ||
      ( (board[0][2] == board[1][1]) && (board[0][2] == board[2][0]) && (board[1][1] !== null) )
    ) {
        return true;
    }
  }
  // no win
  return false;
};

determinePlayer = function(xPlay, board) {
  // print current game board
  console.log("determinePlayer board (below)");
  console.log(board);
  // print whose turn it is
  if ( xPlay === true ) {
    console.log("Player X, it's your turn");
  } else {
    console.log("Player O, it's your turn");
  }
};

Game.prototype.consolePlay = function(row, column) {
  // print player and board
  determinePlayer(this.xPlay, this.board);

  // if spot isn't occupied, mark spot with correct letter for player "x"
  if((this.board[row-1][column-1] === null) && (this.xPlay === true)) {
    this.board[row-1][column-1] = "x";
    // print winner if that marking results in a win
    if ( checkIfWon(this.board) === true) {
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
    if (checkIfWon(this.board) === true) {
      console.log("O WINS");
    // if no resulting win, switch turns
    } else {
      this.xPlay = true;
    }
    // invalid play, re-prompt
  } else {
    console.log("NO.");
    console.log("invalid play board");
    determinePlayer(this.xPlay, this.board);
  }
};

// game = new Game();
// game.consolePlay(1,3) //player x
// console.log(game.board);

// export default Game;
