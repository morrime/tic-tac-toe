import Game from 'tic_tac_toe';


describe('Game', function() {

    var game = new Game();
    console.log("########");
    console.log(game.checkIfWon());

    it('should be an array of three arrays', function() {
      expect(game.board.length).toEqual(3);
    });

    it('should be an array', function () {
      expect(game.board).toEqual(jasmine.any(Array));
    });


});
