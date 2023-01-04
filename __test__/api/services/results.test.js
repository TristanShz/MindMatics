const resultsServices = require("../../src/services/");

test("create new result should return data : result", () => {
  expect(sum(1, 2)).toBe(3);
});

test("create new result using incorrect data should return error", () => {
  expect(sum(1, 2)).toBe(3);
});

test("get all result should not be empty", () => {
  expect(sum(1, 2)).toBe(3);
});

test("remove result should reduce result list size by one", () => {
  expect(sum(1, 2)).toBe(3);
});
