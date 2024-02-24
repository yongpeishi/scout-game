import { Immutable, produce } from "immer";
import { deck } from "./deck";
import { Card, Game } from "./types";

// core logic from the internet. Adapted to immerjs
const shuffle = (deck: Card[]) => {
  const shuffledDeck = produce(deck, draftDeck=> {
    for (let i = draftDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [draftDeck[i], draftDeck[j]] = [draftDeck[j], draftDeck[i]];
    }
  })

  return shuffledDeck;
}

const flipCard = (card: Card): Card => {
  const flippedCard = produce(card, draft => {
    draft.top = card.bottom;
    draft.bottom = card.top;
  })

  return flippedCard;
}

const shuffleTopBottom = (deck: Card[]) => {
  const shuffledDeck = produce(deck, draft => {
    for (let i = 0; i < deck.length; i++) {
      const randomBool = Math.random() > 0.5 ? true : false;
      if (randomBool) {
        draft[i] = flipCard(deck[i])
      }
    }
  })
  return shuffledDeck;
}

export const flipHand = (hand: Card[]): Card[] => {
  return hand.map((card) => flipCard(card));
}

export function newGame(): Game {
  const shuffledDeck = shuffleTopBottom(shuffle(deck));

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
    currentShow: []
  }
}

//type PlayAction = //union type of valid action
type Show = {
  handPosition: number[];
}
/* type Scout = {
  card: Card,
  insertPosition: number
} */

export const playerTakeTurn = (gameState: Game, playerID: "player1"|"player2" , action: Show): Game => {
  const newGameState = produce(gameState, draft => {
    const removedCards = draft[playerID].hand.splice(action.handPosition[0], action.handPosition.length)
    draft.currentShow = removedCards;
  })

  return newGameState;
}
