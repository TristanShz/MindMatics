const app = require("../../../app");
const request = require("supertest");
const apiConfig = require("../../../api/_config/apiConfig");

describe("Test results routes", () => {
  test("It should response the GET method getLeaderboard", () => {
    return request(app)
      .get(apiConfig.apiPath + "/results/leaderboard")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});
