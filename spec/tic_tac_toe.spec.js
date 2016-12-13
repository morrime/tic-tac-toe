import TicTacToe from 'tic_tac_toe';


describe('TicTacToe', function() {
  describe('board', function () {

    it('should be an array of three arrays', function() {
      expect(TicTacToe.board.length).toEqual(3);
    });

    it('should be an array', function () {
      expect(TicTacToe.board).toEqual(jasmine.any(Array));
    });

  });
});
