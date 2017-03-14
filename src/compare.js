import { Card, diffSuit, hasAdjRank, sameRank, sameSuit, } from 'bee52';

const { adjRanks,hasRank, } = Card;

export const rankAdj = c0 => c1 => adjRanks(c0).map(hasRank).some(f => f(c1));

// export const rankEq = c0 => c1 => [ sameRank(c0), diffSuit(c0), ].every(f => f(c1));
export const suitAdj = c0 => c1 => [ sameRank(c0), diffSuit(c0), ].every(f => f(c1));

export const isAdj = c0 => c1 => [ sameSuit(c0), hasAdjRank(c0), ].every(f => f(c1));
