import Scoring from 'scrabble';

describe('Scoring', function() {
  describe('score', function () {

    it('should score a given word', function() {
      expect(Scoring.score("word")).toEqual(8);
    });
    });
  });
});
