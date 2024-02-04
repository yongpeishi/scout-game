import { deck } from "./deck";

type Card = {
  top: number;
  bottom: number;
}

type Game = {
  hand1: Array<Card>;
  hand2: Array<Card>;
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
    hand1: hand1,
    hand2: hand2
  }
}