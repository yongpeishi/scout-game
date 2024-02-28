import { flipHand, newGame, playerTakeTurn } from "../../src/game";

describe('Game', () => {
  describe('When two players', () => {
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

  describe('pre game', () => {
    it('players can flip hand', () => {
      const playerHand = [
        { top: 5, bottom: 3 },
        { top: 1, bottom: 2 },
        { top: 4, bottom: 7 },
        { top: 8, bottom: 6 },
        { top: 9, bottom: 3 },
      ]

      expect(flipHand(playerHand)).toStrictEqual([
        { top: 3, bottom: 5 },
        { top: 2, bottom: 1 },
        { top: 7, bottom: 4 },
        { top: 6, bottom: 8 },
        { top: 3, bottom: 9 },
      ])
    })
  })

  describe('when player put on a show', () => {
    const player2 = {
      hand: [
        { top: 2, bottom: 3 }
      ],
      scoutTokenCount: 0,
      scoutAndShowTokenCount: 0
    }

    const gameState = {
      player1: {
        hand: [
          { top: 5, bottom: 3 },
          { top: 1, bottom: 2 },
          { top: 4, bottom: 7 },
          { top: 8, bottom: 6 },
          { top: 9, bottom: 3 },
        ],
        scoutTokenCount: 0,
        scoutAndShowTokenCount: 0
      },
      player2: player2,
      currentShow: []
    }

    it('updates current show', () => {
      const newGameState = playerTakeTurn(gameState, "player1", { handPosition: [3] })
      expect(newGameState.currentShow).toStrictEqual(
        [{ top: 8, bottom: 6 }]
      )
    })

    it('updates the player hand', () => {
      const newGameState = playerTakeTurn(gameState, "player1", { handPosition: [3] })
      expect(newGameState.player1.hand).toStrictEqual(
        [
          { top: 5, bottom: 3 },
          { top: 1, bottom: 2 },
          { top: 4, bottom: 7 },
          { top: 9, bottom: 3 }
        ]
      )
    })

    it('keep opponent unimpacted', () => {
      const newGameState = playerTakeTurn(gameState, "player1", { handPosition: [3] })
      expect(newGameState.player2).toStrictEqual(player2)
    })

    describe('check for valid show', () => {
      it('updates the player hand', () => { })

    })
  })
})