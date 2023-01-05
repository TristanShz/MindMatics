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

describe("Test results routes: create", () => {
  
  const usernameTest = "userTest";
  
  afterEach(() => {
    request(app)
      .get(apiConfig.apiPath + "/results/remove")
      .send({
        username: usernameTest,
      });
  });

  test("It should response the GET method create", () => {
    return request(app)
      .get(apiConfig.apiPath + "/results/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test results routes: remove", () => {
  
  const scoreTest = "scoreTest";
  const difficultyTest = "difficultyTest";

  beforeEach(() => {
    request(app)
      .get(apiConfig.apiPath + "/results/create")
      .send({
        score: scoreTest,
        difficulty: difficultyTest,
      });
  });
  
  test("It should response the GET method remove", () => {
    return request(app)
      .get(apiConfig.apiPath + "/results/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});
