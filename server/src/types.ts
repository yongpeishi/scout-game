import { Record, RecordOf } from "immutable";

export type Card = RecordOf<{ top: number, bottom: number }>;
export const makeCard = Record({ top: 0, bottom: 0 });
