import { Immutable } from "immer";

export type Card = Immutable<{
  readonly top: number;
  readonly bottom: number;
}>

export type Player = Immutable<{
  readonly hand: Array<Card>;
  readonly scoutTokenCount: number;
  readonly scoutAndShowTokenCount: number;
}>

export type Game = Immutable<{
  readonly player1: Player;
  readonly player2: Player;
  readonly currentShow: Card[];
}>

export type Show = {
  handPosition: number[];
}
