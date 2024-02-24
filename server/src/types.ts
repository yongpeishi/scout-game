// import { List, Record, RecordOf } from "immutable";

// export type Card = RecordOf<{ top: number, bottom: number }>;
// export const makeCard = Record({ top: 0, bottom: 0 });

// export type Player = RecordOf<{
//   hand: List<Card>,
//   scoutTokenCount: number,
//   scoutAndShowTokenCount: number
// }>
// export const createPlayer = Record({
//   hand: List<Card>([]),
//   scoutTokenCount: 0,
//   scoutAndShowTokenCount: 0
// })

// export type Game = RecordOf<{
//   player1: Player,
//   player2: Player,
//   currentShow: List<Card>
// }>
// export const createGame = Record({
//   player1: createPlayer(),
//   player2: createPlayer(),
//   currentShow: List<Card>([])
// })