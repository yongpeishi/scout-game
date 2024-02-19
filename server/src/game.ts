import { deck } from "./deck";
import { Card, makeCard } from "./types";

type Player = {
  hand: Array<Card>;
  scoutTokenCount: number;
  scoutAndShowTokenCount: number;
}

type Game = {
  player1: Player;
  player2: Player;
  currentShow: Card[];
}

// copied from internet. Alter the array
const shuffle = (deck: Card[]) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

const flipCard = (card: Card): Card => {
  return makeCard({
    top: card.get("bottom"),
    bottom: card.get("top")
  })
}

const shuffleTopBottom = (deck: Card[]) => {
  for (let i = 0; i < deck.length; i++) {
    const randomBool = Math.random() > 0.5 ? true : false;
    if (randomBool) {
      deck[i] = flipCard(deck[i])
    }
  }
  return deck;
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
  let newGameState = { ...gameState };
  const targetPlayer = newGameState[playerID];

  const removedCards = newGameState[playerID].hand.splice(action.handPosition[0], action.handPosition.length)

  newGameState.currentShow = removedCards;

  return newGameState
}