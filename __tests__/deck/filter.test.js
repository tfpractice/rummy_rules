import 'jasmine-expect';
import { Deck, } from 'bee52';
import { byAdj, bySet, hasMatch, } from 'src/deck/filter';

const { deck, shuffle, } = Deck;
const myDeck = shuffle(deck());

describe('filter', () => {
  describe('byAdj', () => {
    it('filters cards to those which are adjacent to the given node', () => {
      expect(byAdj(myDeck[0])(myDeck)).toBeArray();
      expect(byAdj(myDeck[0])(myDeck).length).toBe(2);
    });
  });
  describe('bySet', () => {
    it('filters cards those which share rank but have different suit', () => {
      expect(bySet(myDeck[0])(myDeck)).toBeArray();
      expect(bySet(myDeck[0])(myDeck).length).toBe(3);
    });
  });
  describe('hasMatch', () => {
    it('checks if an array contains a matching card', () => {
      expect(hasMatch(myDeck[0])(myDeck)).toEqual(true);
    });
  });
});
