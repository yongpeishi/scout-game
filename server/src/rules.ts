import { Card } from "./types"

export const isValidShow = (cards: Card[]):boolean => {
  return cards.length == 1 ? true : false
}