import { rest } from "msw";
import { appConfig } from "../_config/appConfig";

export const handlers = [
  rest.get(appConfig.apiPath + "/results/leaderboard", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            user: {
              username: "user-test",
            },
            score: 24,
            difficulty: 2,
          },
          {
            user: {
              username: "player 2",
            },
            score: 45,
            difficulty: 3,
          },
          {
            user: {
              username: "user-test",
            },
            score: 5,
            difficulty: 1,
          },
          {
            user: {
              username: "user-test",
            },
            score: 67,
            difficulty: 2,
          },
          {
            user: {
              username: "user-test",
            },
            score: 78,
            difficulty: 2,
          },
          {
            user: {
              username: "player 2",
            },
            score: 2,
            difficulty: 3,
          },
          {
            user: {
              username: "user-test",
            },
            score: 167,
            difficulty: 3,
          },
          {
            user: {
              username: "player 3",
            },
            score: 90,
            difficulty: 3,
          },
        ],
      })
    );
  }),
];
