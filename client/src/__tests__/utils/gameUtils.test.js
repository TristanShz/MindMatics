import { gameUtils } from "../../utils/gameUtils";
import { gameConfig } from "../../_config/gameConfig";

const operations = gameConfig.operations;

test("Calculation with addition should return correct result", () => {
  const result = gameUtils.calculation(operations.ADDITION, 1, 1);
  expect(result).toBe(2);
});

test("Calculation with subtraction should return correct result", () => {
  const result = gameUtils.calculation(operations.SUBTRACTION, 1, 1);
  expect(result).toBe(0);
});

test("Calculation with multiplication should return correct result", () => {
  const result = gameUtils.calculation(operations.MULTIPLICATION, 2, 2);
  expect(result).toBe(4);
});

test("Calculation with division should return correct result", () => {
  const result = gameUtils.calculation(operations.DIVISION, 2, 2);
  expect(result).toBe(1);
});

test("Generate random number should return a number between min and max", () => {
  const min = 1;
  const max = 10;
  const result = gameUtils.generateRandomNumber(min, max);
  expect(result).toBeGreaterThanOrEqual(min);
  expect(result).toBeLessThanOrEqual(max);
});

test("Generate random operation should return a random operation", () => {
  const result = gameUtils.generateRandomOperation();
  expect(result).toBe(
    operations.ADDITION ||
      operations.SUBTRACTION ||
      operations.MULTIPLICATION ||
      operations.DIVISION
  );
});

test("Get generation range should return the correct range", () => {
  const difficulty = "EASY";
  const operation = operations.ADDITION;
  const result = gameUtils.getGenerationRange(difficulty, operation);
  expect(result).toEqual(gameConfig.generationRange.EASY.ADDITION);
});

test("Get operation symbol should return the correct symbol for all operations", () => {
  const addition = gameUtils.getOperationSymbol(operations.ADDITION);
  const subtraction = gameUtils.getOperationSymbol(operations.SUBTRACTION);
  const multiplication = gameUtils.getOperationSymbol(
    operations.MULTIPLICATION
  );
  const division = gameUtils.getOperationSymbol(operations.DIVISION);

  expect(addition).toBe("+");
  expect(subtraction).toBe("-");
  expect(multiplication).toBe("*");
  expect(division).toBe("/");
});

test("Format calculation should return the correct calculation", () => {
  const a = 1;
  const b = 1;
  const operation = operations.ADDITION;
  const result = gameUtils.formatCalculation(a, b, operation);
  expect(result).toBe("1 + 1");
});

test("Generate division should return the correct division", () => {
  const a = 2;
  const b = 2;
  const result = gameUtils.generateDivision(a, b);
  expect(result).toEqual({
    formattedCalculation: "4 / 2",
    operation: operations.DIVISION,
    result: 2,
  });
});
