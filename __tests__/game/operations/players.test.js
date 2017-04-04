import 'jasmine-expect';
import { Deck, } from 'bee52';
import { player, } from 'src/player';
import { active, deck, discard, game, players,setDiscard, } from 'src/game/data';
import { addPlr, claim, claimCards, dropCards, hasPlr, isActive, mendPlr, 
  pdeckDraw, pdisDraw, pdrawTo, pushPlr, rmPlr, rotate, turn, } from 'src/game/operations/players';

const dick = player('dick', [], [], 'dick');
const jane = player('jane', [], [], 'jane');
const bob = player('bob', [], [], 'bob');
const first3 = Deck.deck().slice(0, 3);

const myGame = game([ dick, jane, ], (Deck.deck()), []);

describe('Player ops', () => {
  describe('rotate', () => {
    it('places the first element in an array at the end', () => {
      expect(rotate([ 1, 2, 3, ])).toEqual([ 2, 3, 1, ]);
    });
  });
  describe('turn', () => {
    it('rotates the ggames players', () => {
      expect(players(turn(myGame))).toEqual([ jane, dick, ]);
    });
  });
  describe('hasPlr', () => {
    it('checks if any of the players match by id', () => {
      expect(hasPlr(dick)(myGame)).toBeTruthy();
      expect(hasPlr(bob)(myGame)).toBeFalse();
    });
  });
  describe('isActive', () => {
    it('checks for id equality between player and active player of the game', () => {
      expect(isActive(myGame)(dick)).toBeTruthy();
      expect(isActive(myGame)(jane)).toBeFalse();
    });
  });
  describe('mendPlr', () => {
    it('updates players', () => {
      expect(players(mendPlr(jane)(myGame))).toContain(dick);
    });
  });
  describe('pushPlr', () => {
    it('concatenates a new player', () => {
      expect(players(pushPlr(bob)(myGame))).toContain(bob);
    });
  }); 
  describe('addPlr', () => {
    it('concatenates a new player', () => {
      expect(players(addPlr(bob)(myGame))).toContain(bob);
    });
  }); 
  describe('rmPlr', () => {
    it('drops matching player', () => {
      expect(players(rmPlr(jane)(myGame))).not.toContain(jane);
    });
  });
  describe('claimCards', () => {
    it('adds cards to a players hands', () => {
      expect(players(claimCards(...first3)(jane)(myGame))).toBeArray();
    });
  }); 
  describe('dropCards', () => {
    it('adds cards to a players hands', () => {
      expect(players(dropCards(...first3)(jane)(myGame))).toBeArray();
      expect(discard(dropCards(...first3)(jane)(myGame))).toContain(...first3);
    });
  });
  describe('claim', () => {
    it('adds cards to a players hands', () => {
      expect(active(claim(...first3)(myGame)).hand).toContain(first3[0]);
    }); 
  });

  // describe('deckDraw', () => {
  //   describe('when player is active', () => {
  //     it('draws the next card to thespecified player', () => {
  //       expect(deck(deckDraw(dick)(myGame)).length).toEqual(51);
  //     });
  //   });
  //   describe('when player is inactive', () => {
  //     it('draws the next card to thespecified player', () => {
  //       expect(deck(deckDraw(jane)(myGame)).length).toEqual(52);
  //     });
  //   });
  // });
  // describe('disDraw', () => {
  //   it('draws multiple cards from the discard pile', () => {
  //     expect(discard(disDraw(first3[2])(dick)(setDiscard(deck(myGame).slice(0, 6))(myGame))).length).toEqual(5);
  //     expect(discard(disDraw(first3[2])(dick)(setDiscard(deck(myGame).slice(0, 6))(myGame)))).not.toContain(first3[2]);
  //   });
  // });
  // describe('drawTo', () => {
  //   it('draws multiple cards into the active players hand', () => {
  //     expect(discard(drawTo(first3[2])(dick)(setDiscard(deck(myGame).slice(0, 6))(myGame)))).not.toContain(first3[2]);
  //     expect(discard(drawTo(first3[2])(dick)(setDiscard(deck(myGame).slice(0, 6))(myGame))).length).toEqual(3);
  //   });
  // });
});
