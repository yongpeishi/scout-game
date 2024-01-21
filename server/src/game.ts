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
}; 

export function newGame(): Game {
  const shuffledDeck = shuffle(deck);

  let hand1 = shuffledDeck.slice(0, (0+11));
  let hand2 = shuffledDeck.slice(11, (11+11));

  return {
    hand1: hand1,
    hand2: hand2
  }
}