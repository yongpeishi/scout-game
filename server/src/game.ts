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
const shuffle = (array: Card[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const rotateTopBottom = (array: Card[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const randomBool = Math.random() > 0.5 ? true : false;
    if (randomBool) {
      const originalTop = array[i].top;
      const originalBottom = array[i].bottom;
      array[i] = { top: originalBottom, bottom: originalTop }
    }
  }
  return array;
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