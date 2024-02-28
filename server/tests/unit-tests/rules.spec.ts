import { isValidShow } from "../../src/rules"
import { Card } from "../../src/types";

describe('rules', () => {
  describe('isValidShow()', () => {
    it('true if only 1 card', () => {
      const cards = [
        { top: 5, bottom: 3 }
      ];
      expect(isValidShow(cards)).toBe(true)
    })

    it('true if set', () => {
      const cards = [
        { top: 5, bottom: 3 },
        { top: 5, bottom: 2 },
        { top: 5, bottom: 7 }
      ];
      expect(isValidShow(cards)).toBe(true)
    })

    it('true if ascending sequence', () => {
      const cards = [
        { top: 4, bottom: 3 },
        { top: 5, bottom: 2 },
        { top: 6, bottom: 7 }
      ];
      expect(isValidShow(cards)).toBe(true)
    })

    it('true if descending sequence', () => {
      const cards = [
        { top: 8, bottom: 3 },
        { top: 7, bottom: 2 },
        { top: 6, bottom: 7 }
      ];
      expect(isValidShow(cards)).toBe(true)
    })

    it('false if not a set nor sequence', () => {
      const cards = [
        { top: 5, bottom: 3 },
        { top: 1, bottom: 2 },
        { top: 4, bottom: 7 },
        { top: 8, bottom: 6 },
        { top: 9, bottom: 3 }
      ];
      expect(isValidShow(cards)).toBe(false)
    })

    it('false if empty', () => {
      const cards: Card[] = [];
      expect(isValidShow(cards)).toBe(false)
    })
  })
})