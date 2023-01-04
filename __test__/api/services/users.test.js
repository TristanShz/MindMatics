const usersService = require("../../src/services/usersService");

const usernameTest = "usernameTest";
const userPasswordTest = "userPsswdTest";
const userId = "";

test("register new user should return data : user", async () => {
    const password = await usersService.hashPassword(userPasswordTest);
    const user = {
      username: usernameTest,
      password,
    };
    const createdUser = usersService.register(user);
  expect(sum(1, 2)).toBe(3);
});

test("register new user using incorrect data should return error", () => {
  expect(sum(1, 2)).toBe(3);
});

test("login to user should return data : token", () => {
  expect(sum(1, 2)).toBe(3);
});

test("login to nonexistent user should return data : error", () => {
  expect(sum(1, 2)).toBe(3);
});

test("get all users should get non empty list", () => {
  expect(sum(1, 2)).toBe(3);
});

test("get user by pseudo should data : user", () => {
  expect(sum(1, 2)).toBe(3);
});

test("remove user should reduce user list size by one", () => {
  expect(sum(1, 2)).toBe(3);
});
