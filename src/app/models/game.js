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

  catsGame: function() {
    // this.set("winner", "You Both Lose.");
    alert("losers!");
 },

  // Moved into Game for testing reasons
  determinePlayer: function() {
    // print whose turn it is
    // TODO possibly alert whose turn it is
    if ( this.get("xPlay") === true ) {
      var x = "x";
      return x;
    } else {
      var o = "o";
      return o;
    }
  },

  // Just moved into Game for testing reasons
  checkIfWon: function() {
    for(var i = 0; i < this.board.layout.length; i++) {
      // horizontal win
      if ((this.board.layout[i][0] == this.board.layout[i][1]) && (this.board.layout[i][0] == this.board.layout[i][2]) && (this.board.layout[i][0] !== " ") ) {
        return true;
      // vertical win
    } else if ((this.board.layout[0][i] == this.board.layout[1][i]) && (this.board.layout[0][i] == this.board.layout[2][i]) && (this.board.layout[0][i] !== " ")) {
        return true;
      // diagonal win
    } else if (((this.board.layout[0][0] == this.board.layout[1][1]) && (this.board.layout[0][0] == this.board.layout[2][2]) && (this.board.layout[1][1] !== " ")) || ( (this.board.layout[0][2] == this.board.layout[1][1]) && (this.board.layout[0][2] == this.board.layout[2][0]) && (this.board.layout[1][1] !== " ") )
      ) {
        return true;
      } else if (this.get("playCounter") === 9) {
        this.catsGame();
        return false;
      }
    }
    // no win
    return false;
  },

  play: function(options) {
    var row = options.row;
    var column = options.column;

    // if spot isn't occupied, mark spot with correct letter for player "x"
    if((this.board.layout[row][column] === " ") && (this.get("xPlay") === true)) {
      this.board.placeMarker({marker: "x", row: row, column: column});

      this.set("playCounter", this.get("playCounter")+1);
      this.set("xPlay", false);

      // print winner if that marking results in a win
      this.nextTurnLogic({playCounter: this.get("playCounter"), xPlay: true });

      // if spot isn't occupied, mark spot with correct letter for player "o"
    } else if ((this.board.layout[row][column] === " ") && (this.get("xPlay") === false)) {
      this.board.placeMarker({marker: "o", row: row, column: column});

      this.set("xPlay", true);
      this.set("playCounter", this.get("playCounter")+1);

      // print winner if that marking results in a win
      this.nextTurnLogic({playCounter: this.get("playCounter"), xPlay: false });

      // invalid play, re-prompt
    } else {
      alert("That's an invalid play. Please try again.");
      this.determinePlayer();
    }

  },

  nextTurnLogic: function(options) {
    if (options.playCounter > 4 ) {
      if ( this.checkIfWon() === true) {
        if (options.xPlay === true) {
          alert("X wins!");
        } else {
          alert("O wins!");
        }
      }
    }
    this.determinePlayer();
  }

});

export default Game;
