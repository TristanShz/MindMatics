const usersService = require("../../api/services/usersService");

const usernameTest = "usernameTest";
const userPasswordTest = "userPsswdTest";
const createdUser = undefined;

beforeAll(async () => {
  const password = await usersService.hashPassword(userPasswordTest);
  const user = {
    username: usernameTest,
    password,
  };
  createdUser = usersService.register(user);
});

afterAll(() => {
  usersService.remove(createdUser);
});

test("register new user should return data : user", async () => {
  expect(createdUser, _id).not.toBeUndefined();
});

test("register new user using incorrect data should return error", async () => {
  const user = {
    username: "",
    password: "",
  };
  createdUser = usersService.register(user);
});

test("login to user should return data : token", () => {
  const user = {
    username: usernameTest,
    password,
  };
  expect(usersService.signToken(user)).not.toBeUndefined();
});

test("login to nonexistent user should return data : error", () => {
  const user = {
    username: "nonexistant",
    password: "",
  };
  expect(usersService.signToken(user)).toBeUndefined();
});

test("get all users should get non empty list", () => {
  expect(usersService.getAllUser()).not.toBeUndefined();
});

test("get user by userName should data : user", () => {
  expect(usersService.getUserByUsername(createdUser.username)).toBe(createdUser);
});

test("remove user should reduce user list size by one", async () => {
  const password = await usersService.hashPassword('passwdToDelete');
  const user = {
    username: 'userToDelete',
    password,
  };
  const userToDelete = usersService.register(user);
  const listSize = usersService.getAllUsers().size();
  usersService.remove(userToDelete);
  expect(usersService.getAllUsers().size()).toBeLessThan(listSize);
});
