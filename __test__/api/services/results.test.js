const request = require("supertest");
const app = require("../../../app");
const apiConfig = require("../../../api/_config/apiConfig");

describe("Test results routes", () => {
  test("It should response the GET method getAllResult", () => {
    return request(app)
      .get(apiConfig.apiPath + "/results/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

