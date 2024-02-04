import { flipHand, newGame } from "../../src/game";

describe('Game', () => {
  describe('two players game', () => {
    it('each player starts with 11 cards', () => {
      const game = newGame();
      expect(game.player1.hand.length).toBe(11);
      expect(game.player2.hand.length).toBe(11);
    })

    it('each player starts with 3 Scout token', () => {
      const game = newGame();
      expect(game.player1.scoutTokenCount).toBe(3);
      expect(game.player2.scoutTokenCount).toBe(3);
    })

    it('each player starts with 0 Scout and Show token', () => {
      const game = newGame();
      expect(game.player1.scoutAndShowTokenCount).toBe(0);
      expect(game.player2.scoutAndShowTokenCount).toBe(0);
    })
  })

  describe('game mechanics', () => {
    const playerHand = [
      { top: 5, bottom: 3 },
      { top: 1, bottom: 2 },
      { top: 4, bottom: 7 },
      { top: 8, bottom: 6 },
      { top: 9, bottom: 3 },
    ]

    it('flips player hand', () => {
      expect(flipHand(playerHand)).toStrictEqual([
        { top: 3, bottom: 5 },
        { top: 2, bottom: 1 },
        { top: 7, bottom: 4 },
        { top: 6, bottom: 8 },
        { top: 3, bottom: 9 },
      ])
    })
  })
})