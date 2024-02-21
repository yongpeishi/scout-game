import { deck } from "./deck";
import { List } from "immutable";
import { Card, makeCard } from "./types";

type Player = {
  hand: List<Card>;
  scoutTokenCount: number;
  scoutAndShowTokenCount: number;
}

type Game = {
  player1: Player;
  player2: Player;
  currentShow: List<Card>;
}

// copied from internet. Alter the array
const shuffle = (deck: List<Card>) => {
  var mutableDeck = deck.toArray()
  for (let i = mutableDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mutableDeck[i], mutableDeck[j]] = [mutableDeck[j], mutableDeck[i]];
  }
  return List(mutableDeck);
}

const flipCard = (card: Card): Card => {
  return makeCard({
    top: card.get("bottom"),
    bottom: card.get("top")
  })
}

const shuffleTopBottom = (deck: List<Card>) => {
  var mutableDeck = deck.toArray()
  for (let i = 0; i < mutableDeck.length; i++) {
    const randomBool = Math.random() > 0.5 ? true : false;
    if (randomBool) {
      mutableDeck[i] = flipCard(mutableDeck[i])
    }
  }
  return List(mutableDeck);
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
    currentShow: List([])
  }
}

//type PlayAction = //union type of valid action
type Show = {
  cardIndexes: {
    startIndex: number,
    endIndex: number  //index of the last card shown, inclusive
  }
}
/* type Scout = {
  card: Card,
  insertPosition: number
} */

export const playerTakeTurn = (gameState: Game, playerID: "player1"|"player2" , action: Show): Game => {
  const startIndex = action.cardIndexes.startIndex;
  const endIndex = action.cardIndexes.endIndex + 1;

  const targetPlayerOldHand = gameState[playerID].hand;
  const cardsRemoved = targetPlayerOldHand.slice(startIndex, endIndex);
  const targetPlayerNewHand = targetPlayerOldHand.splice(startIndex, cardsRemoved.size);

  let newGameState = { ...gameState };
  newGameState.currentShow = cardsRemoved;
  newGameState[playerID].hand = targetPlayerNewHand;

  return newGameState
}