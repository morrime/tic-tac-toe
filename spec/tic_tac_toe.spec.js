import Game from 'tic_tac_toe';


describe('Game', function() {
  var blankGame = new Game();

  var horizontalWinningGame = new Game(),
      horizontalWinningGame.board = [
        [ null, "x", "x" ],
        [ null, "o", "o" ],
        [ "x", "x", "x" ]
      ];

  var horizontalNullGame = new Game(),
      horizontalNullGame.board = [
        [ null, null, null ],
        [ null, "o", "o" ],
        [ "x", "x", "o" ]
      ];

  var verticalWinningGame = new Game(),
      verticalWinningGame.board = [
        [ "o", null, "x" ],
        [ null, "o", "x" ],
        [ "x", "o", "x" ]
      ];

  var verticalNullGame = new Game(),
      verticalNullGame.board = [
        [ "o", null, null ],
        [ null, "x", null ],
        [ "x", "o", null ]
      ];

  var diagonalWinningGame = new Game(),
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
    expect(horizontalNullGame.checkIfWon()).toEqual(false);
  });

  it('should know if there is a vertical win', function() {
    expect(verticalWinningGame.checkIfWon()).toEqual(true);
  });

  it('should know to return false if null is in vertical place', function() {
    expect(verticalNullGame.checkIfWon()).toEqual(false);
  });

  it('should know if there is a diagonal win', function() {
    expect(diagonalWinningGame.checkIfWon()).toEqual(true);
  });

});
