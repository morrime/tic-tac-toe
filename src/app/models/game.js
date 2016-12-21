import Backbone from 'backbone';
import Board from 'app/models/board';

const Game = Backbone.Model.extend({
  url: "http://localhost:3000/api/v1/games",

  parse: function(response) {
    return response;
  },

  toJSON: function() {
    console.log(">>>>>>" + this.board.layout);

    var merged = [].concat.apply([], this.board.layout);

    var object = {
      "board": merged,
      "players": ["X Player","O Player" ],
      "outcome": this.get("winner")
    };
    console.log(object);
    return object;

  },

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
    this.set("winner", "Draw");
    this.save();
    // alert("losers!");
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

    if((this.board.layout[row][column] === " ") && (this.get("xPlay") === true)) {
      // mark spot with correct letter for player "x"
      this.board.placeMarker({marker: "X", row: row, column: column});

      // Changes variables in preparation for the next turn
      this.nextTurnLogic();

    } else if ((this.board.layout[row][column] === " ") && (this.get("xPlay") === false)) {
      // mark spot with correct letter for player "o"
      this.board.placeMarker({marker: "O", row: row, column: column});

      // Changes variables in preparation for the next turn
      this.nextTurnLogic();

      // invalid play, re-prompt
    }

  },

  nextTurnLogic: function(options) {
    this.set("playCounter", this.get("playCounter")+1);

    if (this.get("playCounter") > 4 ) {
      if ( this.checkIfWon() === true) {
        if (this.get("xPlay") === true) {
          this.set("winner", "X");
          this.save();
          // alert("X wins!");
        } else {
          this.set("winner", "O");
          this.save();
          // alert("O wins!");
        }
      }
    }
    this.set("xPlay", !(this.get("xPlay")));
  }

});

export default Game;
