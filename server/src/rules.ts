import { produce } from "immer";
import { Card } from "./types"

const isSet = (cards: Card[]): boolean => {
  const firstTopNumber = cards[0].top;
  const isSameTopNumber = (card: Card) => card.top == firstTopNumber;

  return cards.length > 1 &&cards.every(isSameTopNumber);
}

const isAscending = (cards: Card[]): boolean => {
  const isCurrentSmallerThanNext = (card: Card, index: number) => {
    return index === cards.length - 1 || card.top < cards[index + 1].top;
  }

  return cards.every(isCurrentSmallerThanNext);
}

const isDescending = (cards: Card[]): boolean => {
  const reversedCards = produce(cards, draft => draft.reverse())
  return isAscending(reversedCards);
}

export const isValidShow = (cards: Card[]):boolean => {
  const notEmpty = cards.length >= 1

  return notEmpty &&
    (cards.length == 1 || isSet(cards) || isAscending(cards) || isDescending(cards))
}