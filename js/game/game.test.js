import {Game} from "./game";

describe('Game test', function () {

    it('should return gridSize', () => {
        const game = new Game()

        game.settings = {
            gridSize: {
                columns: 10,
                rows: 10
            }
        }

        const settings = game.settings
        expect(settings.gridSize.columns).toBe(10)
        expect(settings.gridSize.rows).toBe(10)
    })

    it('should change status', () => {
        const game = new Game()

        expect(game.status).toBe('pending')
        game.start()
        expect(game.status).toBe('in-process')
    })

    it('should units unique position', () => {

        for (let i = 0; i < 10; i++) {
            const game = new Game()
            game.settings = {
                gridSize: {
                    columns: 4,
                    rows: 3
                }
            }
            game.start()

            expect([1, 2, 3, 4]).toContain(game.player1.position.x)
            expect([1, 2, 3]).toContain(game.player1.position.y)

            expect([1, 2, 3, 4]).toContain(game.player2.position.x)
            expect([1, 2, 3]).toContain(game.player2.position.y)
        }

    })

})

