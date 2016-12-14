import Game from 'tic_tac_toe';


describe('Game', function() {
  describe('board', function() {
    var blankGame = new Game();

    var horizontalWinningGame = new Game();
    horizontalWinningGame.board = [
      [ null, "x", "x" ],
      [ null, "o", "o" ],
      [ "x", "x", "x" ]
    ];

    var verticalWinningGame = new Game();
    verticalWinningGame.board = [
      [ "o", null, "x" ],
      [ null, "o", "x" ],
      [ "x", "o", "x" ]
    ];

    var diagonalWinningGame = new Game();
    diagonalWinningGame.board = [
      [ "x", "o", null ],
      [ "o", "x", null ],
      [ "o", "o", "x" ]
    ];

    it('should be an array of three arrays', function() {
      expect(blankGame.board.length).toEqual(3);
    });

    it('should be an array', function () {
      expect(blankGame.board).toEqual(jasmine.any(Array));
    });

    it('should know if there is a horizontal win', function() {
      expect(horizontalWinningGame.checkIfWon()).toEqual(true);
    });

    it('should know to return false if null is in horizontal place', function() {
      expect(blankGame.checkIfWon()).toEqual(false);
    });

    it('should know if there is a vertical win', function() {
      expect(verticalWinningGame.checkIfWon()).toEqual(true);
    });

    it('should know to return false if null is in vertical place', function() {
      expect(blankGame.checkIfWon()).toEqual(false);
    });

    it('should know if there is a diagonal win', function() {
      expect(diagonalWinningGame.checkIfWon()).toEqual(true);
    });

    it('should know to return false if null is in middle place(testing diagonal win case with nulls)', function() {
      expect(blankGame.checkIfWon()).toEqual(false);
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
  });
});
