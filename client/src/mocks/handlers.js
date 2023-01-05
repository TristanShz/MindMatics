import { rest } from 'msw'

export const handlers = [
    rest.get('http://localhost:3001/api/v1/results/', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                data: [
                    {
                        user: {
                            pseudo: "player 1",
                        },
                        score: 24,
                        difficulty: 'NORMAL',
                    },
                    {
                        user: {
                            pseudo: "player 2",
                        },
                        score: 45,
                        difficulty: 'HARD',
                    },
                    {
                        user: {
                            pseudo: "player 1",
                        },
                        score: 5,
                        difficulty: 'EASY',
                    },
                    {
                        user: {
                            pseudo: "player 1",
                        },
                        score: 67,
                        difficulty: 'NORMAL',
                    },
                    {
                        user: {
                            pseudo: "player 1",
                        },
                        score: 78,
                        difficulty: 'NORMAL',
                    },
                    {
                        user: {
                            pseudo: "player 2",
                        },
                        score: 2,
                        difficulty: 'HARD',
                    },
                    {
                        user: {
                            pseudo: "player 1",
                        },
                        score: 167,
                        difficulty: 'HARD',
                    },
                    {
                        user: {
                            pseudo: "player 3",
                        },
                        score: 90,
                        difficulty: 'HARD',
                    },
                ]
            })
        )
    })

]