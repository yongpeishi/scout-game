import { deck } from "./deck";

type Card = {
  top: number;
  bottom: number;
}

type Player = {
  hand: Array<Card>;
  scoutTokenCount: number;
  scoutAndShowTokenCount: number;
}

type Game = {
  player1: Player;
  player2: Player;
}

// copied from internet. Alter the array
const shuffle = (deck: Card[]) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

const rotateTopBottom = (deck: Card[]) => {
  for (let i = 0; i < deck.length; i++) {
    const randomBool = Math.random() > 0.5 ? true : false;
    if (randomBool) {
      const originalTop = deck[i].top;
      const originalBottom = deck[i].bottom;
      deck[i] = { top: originalBottom, bottom: originalTop }
    }
  }
  return deck;
}

export function newGame(): Game {
  const shuffledDeck = rotateTopBottom(shuffle(deck));

  let hand1 = shuffledDeck.slice(0, (0+11));
  let hand2 = shuffledDeck.slice(11, (11+11));

  return {
    player1: {
      hand: hand1,
      scoutTokenCount: 3,
      scoutAndShowTokenCount: 0
    },
    player2: {
      hand: hand2,
      scoutTokenCount: 3,
      scoutAndShowTokenCount: 0
    },
  }
}