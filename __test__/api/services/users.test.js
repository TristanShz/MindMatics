
const usernameTest = "usernameTest";
const userPasswordTest = "userPsswdTest";
const createdUser = undefined;

describe("Test results routes", () => {
  
  test("It should response the GET method getAllUsers", () => {
    return request(app)
      .get(apiConfig.apiPath + "/users/getAllUsers")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});