import Backbone from 'backbone';
import Board from 'app/models/board';

// var testBoard = [[1,null,3], [4,5,6], [7,8,9]];

const Game = Backbone.Model.extend({
  defaults: {
    // determine whose turn it is
    xPlay: true,
    // Count number of turns that have occurred
    playCounter: 0
  },

  initialize: function(options) {
    // set empty board
    this.board = new Board();
  },


  // Cats Game output
  catsGame: function() {
   console.log("Cat's Game");
   return false;
 },

  // Moved into Game for testing reasonsß
  determinePlayer: function() {
    // print current game board
    console.log(this.board);
    // print whose turn it is
    if ( this.xPlay === true ) {
      console.log("Player X, it's your turn");
      var x = "x";
      return x;
    } else {
      console.log("Player O, it's your turn");
      var o = "o";
      return o;
    }
  },

  // Just moved into Game for testing reasons
  checkIfWon: function() {

    for(var i = 0; i < this.board.length; i++) {
      // horizontal win
      if ((this.board[i][0] == this.board[i][1]) && (this.board[i][0] == this.board[i][2]) && (this.board[i][0] !== null) ) {
        return true;
      // vertical win
      } else if ((this.board[0][i] == this.board[1][i]) && (this.board[0][i] == this.board[2][i]) && (this.board[0][i] !== null)) {
        return true;
      // diagonal win
      } else if (((this.board[0][0] == this.board[1][1]) && (this.board[0][0] == this.board[2][2]) && (this.board[1][1] !== null)) || ( (this.board[0][2] == this.board[1][1]) && (this.board[0][2] == this.board[2][0]) && (this.board[1][1] !== null) )
      ) {
        return true;
      } else if (this.playCounter === 9) {
        console.log(this.board);
        console.log("Cat's Game");
        console.log("   /\\___/\\   ");
        console.log("  (  o o  )  ");
        console.log("  /   *   \\  ");
        console.log("  \\__\\_/__/  meow!");
        console.log("    /   \\   ");
        console.log("   / ___ \\  ");
        console.log("   \\/___\\/  ");
        return false;
      }
    }
    // no win
    return false;
  },

  play: function(options) {
    var row = options.row;
    var column = options.column;
    console.log(row);
    console.log(column);


    // if spot isn't occupied, mark spot with correct letter for player "x"
    if((this.board.layout[mappedHtml] === null) && (this.xPlay === true)) {
      this.board.layout[mappedHtml] = "x";
      this.xPlay = false;
      this.playCounter +=1;
      // print winner if that marking results in a win
      if (this.playCounter > 4 ) {
        if ( this.checkIfWon() === true) {
          console.log("X WINS!");
        }
      }
      // print player and board
      this.determinePlayer();

      // if spot isn't occupied, mark spot with correct letter for player "o"
    } else if ((this.board.layout[mappedHtml] === null) && (this.xPlay === false)) {
      this.board.layout[mappedHtml] = "o";
      this.xPlay = true;
      this.playCounter +=1;

      // print winner if that marking results in a win
      if (this.playCounter > 4 ) {
        if ( this.checkIfWon() === true) {
          console.log("O WINS!");
        }
      }
      // print player and board
      this.determinePlayer();

      // invalid play, re-prompt
    } else {
      console.log("That's an invalid play. Please try again.");
      this.determinePlayer();
    }
  }
});

// Game.prototype.consolePlay = function(row, column) {
//   while (!( row == 1 || row == 2 || row == 3 ) || !( column == 1 || column == 2 || column == 3 )) {
//     throw new SyntaxError("Those are not valid coordinates");
//   }
//
//   // if spot isn't occupied, mark spot with correct letter for player "x"
//   if((this.board[mappedHtml] === null) && (this.xPlay === true)) {
//     this.board[row-1][column-1] = "x";
//     this.xPlay = false;
//
//     this.playCounter +=1;
//     // print winner if that marking results in a win
//     if (this.playCounter > 4 ) {
//       if ( this.checkIfWon() === true) {
//         console.log("X WINS!");
//       }
//     }
//     // print player and board
//     this.determinePlayer();
//
//     // if spot isn't occupied, mark spot with correct letter for player "o"
//   } else if ((this.board[row-1][column-1] === null) && (this.xPlay === false)) {
//     this.board[row-1][column-1] = "o";
//     this.xPlay = true;
//     this.playCounter +=1;
//
//     // print winner if that marking results in a win
//     if (this.playCounter > 4 ) {
//       if ( this.checkIfWon() === true) {
//         console.log("O WINS!");
//       }
//     }
//     // print player and board
//     this.determinePlayer();
//
//     // invalid play, re-prompt
//   } else {
//     console.log("That's an invalid play. Please try again.");
//     this.determinePlayer();
//   }
// };


export default Game;
