const request = require("supertest");
const app = require("../../../app");
const apiConfig = require("../../../api/_config/apiConfig");

describe("Test users routes", () => {

  test("It should response the GET method getUserByUsername", () => {
    return request(app)
      .get(apiConfig.apiPath + "/users/getUserByUsername")
      .send({
        username: "gauthier",
      })
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });

  test("It should response the GET method getAllUsers", () => {
    return request(app)
      .get(apiConfig.apiPath + "/users/getAllUsers")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});