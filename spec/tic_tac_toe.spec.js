import Game from 'tic_tac_toe';


describe('Game', function() {
  describe('board', function() {
    var blankGame = new Game();

    it('should be an array of three arrays', function() {
      expect(blankGame.board.length).toEqual(3);
    });

    it('should be an array', function () {
      expect(blankGame.board).toEqual(jasmine.any(Array));
    });

    it('should have subarrays with a length of 3', function(){
      for (var i = 0; i < blankGame.board.length; i ++ ) {
        expect(blankGame.board[i].length).toEqual(3);
      }
    });

    it('should have subarrays filled with nulls', function(){
      for (var i = 0; i < blankGame.board.length; i ++ ) {
        for (var j = 0; j < blankGame.board[i].length; j ++ ) {
          expect(blankGame.board[i][j]).toEqual(null);
        }
      }
    });
  });

  describe('checkIfWon', function() {
    var blankGame2 = new Game();

    var horizontalWinningGame = new Game();
    horizontalWinningGame.board = [
      [ null, "x", "x" ],
      [ null, "o", "o" ],
      [ "x", "x", "x" ]
    ];
    horizontalWinningGame.playCounter = 7;

    var verticalWinningGame = new Game();
    verticalWinningGame.board = [
      [ "o", null, "x" ],
      [ null, "o", "x" ],
      [ "x", "o", "x" ]
    ];
    verticalWinningGame.playCounter = 7;

    var diagonalWinningGame = new Game();
    diagonalWinningGame.board = [
      [ "x", "o", null ],
      [ "o", "x", null ],
      [ "o", "o", "x" ]
    ];
    diagonalWinningGame.playCounter = 7;

    var catGame = new Game();
    catGame.board = [
      [ "x", "o", "x" ],
      [ "o", "x", "o" ],
      [ "o", "x", "o" ]
    ];
    catGame.playCounter = 9;

    it('should know if there is a cats game', function() {
      expect(catGame.checkIfWon()).toEqual(false);
    });

    it('should know if there is a horizontal win', function() {
      expect(horizontalWinningGame.checkIfWon()).toEqual(true);
    });

    it('should know to return false if null is in horizontal place', function() {
      expect(blankGame2.checkIfWon()).toEqual(false);
    });

    it('should know if there is a vertical win', function() {
      expect(verticalWinningGame.checkIfWon()).toEqual(true);
    });

    it('should know to return false if null is in vertical place', function() {
      expect(blankGame2.checkIfWon()).toEqual(false);
    });

    it('should know if there is a diagonal win', function() {
      expect(diagonalWinningGame.checkIfWon()).toEqual(true);
    });

    it('should know to return false if null is in middle place(testing diagonal win case with nulls)', function() {
      expect(blankGame2.checkIfWon()).toEqual(false);
    });
  });

  describe('determinePlayer', function() {
    var game = new Game();

    it('should return x if no one has played', function() {
      expect(game.determinePlayer()).toEqual("x");
    });

    it('should return o if one play has ocurred', function() {
      game.consolePlay(1,1);
      expect(game.determinePlayer()).toEqual("o");
    });

    it('should return x if two plays have ocurred', function() {
      game.consolePlay(1,1);
      game.consolePlay(2,1);
      expect(game.determinePlayer()).toEqual("x");
    });
  });

  describe('consolePlay', function() {
    var game2 = new Game();
    var game3 = new Game();
    var game4 = new Game();

    it('should return o if two plays have ocurred on the same space (because the second play was not valid)', function() {
      game2.consolePlay(1,1);
      game2.consolePlay(1,1);
      expect(game2.determinePlayer()).toEqual("o");
    });

    it('should return x if three plays have ocurred, with x incorrectly playing on turn 2', function() {
      game3.consolePlay(1,1);
      game3.consolePlay(1,3);
      game3.consolePlay(1,3);
      expect(game3.determinePlayer()).toEqual("x");
    });

    it('should increment playCounter by 1 if play is valid', function() {

      // counter should start at 0
      expect(game4.playCounter).toEqual(0);

      // counter should increment by 1 with valid play
      game4.consolePlay(1,1);
      expect(game4.playCounter).toEqual(1);

      // counter should not increment by 1 with invalid play
      game4.consolePlay(1,1);
      expect(game4.playCounter).toEqual(1);

      // counter should increment by 1 with valid play
      game4.consolePlay(1,2);
      expect(game4.playCounter).toEqual(2);
    });
  });
});
