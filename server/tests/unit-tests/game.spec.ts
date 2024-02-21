import { List } from "immutable";
import { flipHand, newGame, playerTakeTurn } from "../../src/game";
import { makeCard } from "../../src/types";

describe('Game', () => {
  describe('When two players', () => {
    it('each player starts with 11 cards', () => {
      const game = newGame();
      expect(game.player1.hand.size).toBe(11);
      expect(game.player2.hand.size).toBe(11);
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

  describe('pre game', () => {
    it('players can flip hand', () => {
      const playerHand = [
        makeCard({ top: 5, bottom: 3 }),
        makeCard({ top: 1, bottom: 2 }),
        makeCard({ top: 4, bottom: 7 }),
        makeCard({ top: 8, bottom: 6 }),
        makeCard({ top: 9, bottom: 3 }),
      ]

      expect(flipHand(playerHand)).toStrictEqual([
        makeCard({ top: 3, bottom: 5 }),
        makeCard({ top: 2, bottom: 1 }),
        makeCard({ top: 7, bottom: 4 }),
        makeCard({ top: 6, bottom: 8 }),
        makeCard({ top: 3, bottom: 9 }),
      ])
    })
  })

  describe('when player put on a show', () => {
    const player2 = {
      hand: List([
        makeCard({ top: 2, bottom: 3 })
      ]),
      scoutTokenCount: 0,
      scoutAndShowTokenCount: 0
    }

    const gameState = {
      player1: {
        hand: List([
          makeCard({ top: 5, bottom: 3 }),
          makeCard({ top: 1, bottom: 2 }),
          makeCard({ top: 4, bottom: 7 }),
          makeCard({ top: 8, bottom: 6 }),
          makeCard({ top: 9, bottom: 3 }),
        ]),
        scoutTokenCount: 0,
        scoutAndShowTokenCount: 0
      },
      player2: player2,
      currentShow: List([])
    }

    it('updates current show', () => {
      console.log("**********")
      console.log(gameState.player1.hand)
      const newGameState = playerTakeTurn(gameState, "player1", { cardIndexes: { startIndex: 3, endIndex: 3 } })
      console.log(newGameState.player1.hand)
      expect(newGameState.currentShow).toEqual(
        List([
          makeCard({ top: 8, bottom: 6 })
        ])
      )
    })

    it('updates the player hand', () => {
      console.log("-----------")
      console.log(gameState.player1.hand)
      const newGameState = playerTakeTurn(gameState, "player1", { cardIndexes: { startIndex: 3, endIndex: 3 } })
      console.log(newGameState.player1.hand)
      expect(newGameState.player1.hand).toEqual(
        List([
          makeCard({ top: 5, bottom: 3 }),
          makeCard({ top: 1, bottom: 2 }),
          makeCard({ top: 4, bottom: 7 }),
          makeCard({ top: 9, bottom: 3 })
        ])
      )
    })

    it('keep opponent unimpacted', () => {
      const newGameState = playerTakeTurn(gameState, "player1", { cardIndexes: { startIndex: 3, endIndex: 3 } })
      expect(newGameState.player2).toStrictEqual(player2)
    })

    describe('check for valid show', () => {
      it('updates the player hand', () => { })

    })
  })
})