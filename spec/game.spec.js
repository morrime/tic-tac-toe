import Game from 'app/models/game';


describe('Game', function() {
  describe('board', function() {
    var blankGame = new Game();

    it('should be an array of three arrays', function() {
      expect(blankGame.board.layout.length).toEqual(3);
    });

    it('should be an array', function () {
      expect(blankGame.board.layout).toEqual(jasmine.any(Array));
    });

    it('should have subarrays with a length of 3', function(){
      for (var i = 0; i < blankGame.board.layout.length; i ++ ) {
        expect(blankGame.board.layout[i].length).toEqual(3);
      }
    });

    it('should have subarrays filled with nulls', function(){
      for (var i = 0; i < blankGame.board.layout.length; i ++ ) {
        for (var j = 0; j < blankGame.board.layout[i].length; j ++ ) {
          expect(blankGame.board.layout[i][j]).toEqual(" ");
        }
      }
    });
  });

  describe('checkIfWon', function() {
    var blankGame2 = new Game();

    var horizontalWinningGame = new Game();
    horizontalWinningGame.board.layout = [
      [ null, "x", "x" ],
      [ null, "o", "o" ],
      [ "x", "x", "x" ]
    ];
    horizontalWinningGame.playCounter = 7;

    var verticalWinningGame = new Game();
    verticalWinningGame.board.layout = [
      [ "o", null, "x" ],
      [ null, "o", "x" ],
      [ "x", "o", "x" ]
    ];
    verticalWinningGame.playCounter = 7;

    var diagonalWinningGame = new Game();
    diagonalWinningGame.board.layout = [
      [ "x", "o", null ],
      [ "o", "x", null ],
      [ "o", "o", "x" ]
    ];
    diagonalWinningGame.playCounter = 7;

    var catGame = new Game();
    catGame.board.layout = [
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


  describe('play', function() {
    var game = new Game();
    var game2 = new Game();
    var game3 = new Game();
    var game4 = new Game();
    var game5 = new Game();

    it('xPlay should be true if no one has played', function() {
      expect(game.get("xPlay")).toEqual(true) ;
    });

    it('xPlay should be false if one play has occurred', function() {
      game2.play({row: 1, column: 1});
      expect(game2.get("xPlay")).toEqual(false);
    });

    it('xPLay should be true if two plays have occurred', function() {
      game3.play({row: 1, column: 1});
      game3.play({row: 2, column: 1});
      expect(game3.get("xPlay")).toEqual(true);
    });

    it('xPlay should be false if two plays have ocurred on the same space (because the second play was not valid', function() {
      game4.play({row: 1, column: 1});
      game4.play({row: 1, column: 1});
      expect(game4.get("xPlay")).toEqual(false);
    });

    it('xPLay should be true if three plays have ocurred, with x incorrectly playing on turn 2', function() {
      game3.play({row: 1, column: 1});
      game3.play({row: 1, column: 3});
      game3.play({row: 1, column: 3});
      expect(game3.get("xPlay")).toEqual(true);
    });

    it('should increment playCounter by 1 if play is valid', function() {
      // counter should start at 0
      expect(game5.get("playCounter")).toEqual(0);

      // counter should increment by 1 with valid play
      game5.play({row: 1, column: 1});
      expect(game5.get("playCounter")).toEqual(1);

      // counter should not increment by 1 with invalid play
      game5.play({row: 1, column: 1});
      expect(game5.get("playCounter")).toEqual(1);

      // counter should increment by 1 with valid play
      game5.play({row: 1, column: 2});
      expect(game5.get("playCounter")).toEqual(2);
    });
  });
});
