import { isValidShow } from "../../src/rules"

describe('rules', () => {
  describe('isValidShow()', () => {
    it('true if only 1 card', () => {
      const cards = [
        { top: 5, bottom: 3 }
      ];
      expect(isValidShow(cards)).toBe(true)
    })

    it('true if set of 1 or more cards', () => {
    })

    it('true if ascending sequence', () => {

    })

    it('true if descending sequence', () => {

    })

    it('false if not a set nor sequence', () => {
      const cards = [
        { top: 5, bottom: 3 },
        { top: 1, bottom: 2 },
        { top: 4, bottom: 7 },
        { top: 8, bottom: 6 },
        { top: 9, bottom: 3 },
      ];
      expect(isValidShow(cards)).toBe(false)
    })
  })
})