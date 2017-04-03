import { Deck, } from 'bee52';
import { append, spread, } from 'fenugreek-collections';
import { deduct, total, } from '../score';
import { copy, hand, setHand, sets, setSets, } from './data';

const { add, drop, } = Deck;

export const addHand = (...cards) => p => setHand(add(...cards)(hand(p)))(p); 

export const scrap = (...cards) => p => setHand(drop(...cards)(hand(p)))(p); 

export const draw = amt => deck => p => addHand(...Deck.draw(amt)(deck))(p);

export const drawTo = c => deck => p => addHand(...Deck.drawTo(c)(deck))(p);

export const addSet = s => p => setSets(append(sets(p))((s)))(scrap(...s)(p));
export const playBin = (p,set) => addSet(set)(p);
export const addSets = (...sets) => p => sets.map(spread).reduce(playBin, p);

export const matches = next => p => next.id === p.id;
export const xMatches = next => p => !matches(next)(p);
export const update = next => p => matches(next)(p) ? copy(next) : p;

export const score = p => total(sets(p));
export const final = p => total(sets(p)) + deduct(hand(p));
