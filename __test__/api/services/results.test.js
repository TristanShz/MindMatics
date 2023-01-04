const resultsServices = require("../../api/services/resultService");

const score = 10;
const difficulty = 2;
const userId = "63b52bdc4dd93a2ee647d12d";
const savedResult = undefined;

beforeAll(() => {
  const resultToSave = {
    user: userId,
    score: score,
    difficulty: difficulty,
  };
  savedResult = resultsServices.create(resultToSave);
});

afterAll(() => {
  resultsServices.remove(savedResult);
});

test("create new result should return data : result", () => {
  expect(savedResult._id).not.toBeUndefined();
});

test("create new result using incorrect data should return error", () => {
  const resultToSave = {
    user: userId,
    score: undefined,
    difficulty: "qwertyuiop",
  };
  const savedResult = resultsServices.create(resultToSave);
  expect(savedResult._id).not.toBeUndefined();
});

test("get all result should not be empty", () => {
  expect(resultsServices.getAll()).not.toBe(0);
});

test("remove result should reduce result list size by one", () => {
  const resultToSave = {
    user: userId,
    score: score,
    difficulty: difficulty,
  };
  const savedResultTest = resultsServices.create(resultToSave);
  const listSize = resultsServices.getAll().size();
  resultsServices.remove(savedResultTest);
  expect(resultsServices.getAll()).toBeLessThan(listSize);
});
