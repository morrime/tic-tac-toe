import TicTacToe from 'tic_tac_toe';


describe('TicTacToe', function() {
  // create instance

  describe('game', function () {
    console.log("########");
    console.log(Game.board);

    var game = new Game();
    it('should be an array of three arrays', function() {
      expect(game.board.length).toEqual(3);
    });

    it('should be an array', function () {
      expect(game.board).toEqual(jasmine.any(Array));
    });

  });
});
