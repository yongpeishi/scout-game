import { newGame } from "../../src/game";

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
})