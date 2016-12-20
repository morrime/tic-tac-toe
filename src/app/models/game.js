import Backbone from 'backbone';
import Board from 'app/models/board';

const Game = Backbone.Model.extend({

  initialize: function(options) {
    // set empty board
    this.board = new Board();
    // determine whose turn it is
    this.set("xPlay", true);
    // Count number of turns that have occurred
    this.set("playCounter", 0);
    this.set("winner", null);
  },

  // Cats Game output
  catsGame: function() {
  //  console.log("Cat's Game");
  // TODO: possibly put an alert
    this.set("winner", "You Both Lose.");
    alert(this.get("winner"));
   return false;
 },

  // Moved into Game for testing reasons
  determinePlayer: function() {
    // print whose turn it is
    // TODO possibly alert whose turn it is
    if ( this.xPlay === true ) {
      var x = "x";
      console.log("x");
      return x;
    } else {
      console.log("o");
      var o = "o";
      return o;
    }
  },

  // Just moved into Game for testing reasons
  checkIfWon: function() {
    console.log("#%U#*(%&*$&%(*@))");
console.log(this.board.layout);
    for(var i = 0; i < this.board.layout.length; i++) {
      // horizontal win
      if ((this.board.layout[i][0] == this.board.layout[i][1]) && (this.board.layout[i][0] == this.board.layout[i][2]) && (this.board.layout[i][0] !== null) ) {
        return true;
      // vertical win
    } else if ((this.board.layout[0][i] == this.board.layout[1][i]) && (this.board.layout[0][i] == this.board.layout[2][i]) && (this.board.layout[0][i] !== null)) {
        return true;
      // diagonal win
    } else if (((this.board.layout[0][0] == this.board.layout[1][1]) && (this.board.layout[0][0] == this.board.layout[2][2]) && (this.board.layout[1][1] !== null)) || ( (this.board.layout[0][2] == this.board.layout[1][1]) && (this.board.layout[0][2] == this.board.layout[2][0]) && (this.board.layout[1][1] !== null) )
      ) {
        return true;
      } else if (this.playCounter === 9) {
        catsGame();
      }
    }
    // no win
    return false;
  },

  play: function(options) {
    var row = options.row;
    var column = options.column;

    // if spot isn't occupied, mark spot with correct letter for player "x"
    console.log("xplay: " + this.Xplay);
    if((this.board.layout[row][column] === " ") && (this.xPlay === true)) {
      console.log("xplay: " + this.Xplay);
      this.board.layout[row][column] = "x";
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
    } else if ((this.board.layout[row][column] === " ") && (this.xPlay === false)) {
      this.board.layout[row][column] = "o";
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
