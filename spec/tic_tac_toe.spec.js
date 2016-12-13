import Game from 'tic_tac_toe';


describe('Game', function() {
    var blankGame = new Game();
    var horizontalWinningGame = new Game();
    horizontalWinningGame.board = [
      [ null, 1, 1 ],
      [ null, 0, 0 ],
      [ 1, 1, 1 ]
    ];
    // console.log("########");
    // console.log(blankGame.board);

    it('should be an array of three arrays', function() {
      expect(blankGame.board.length).toEqual(3);
    });

    it('should be an array', function () {
      expect(blankGame.board).toEqual(jasmine.any(Array));
    });
    it('should know if there is a horizontal win', function() {
      expect(horizontalWinningGame.checkIfWon()).toBeTruthy();
    });

});
