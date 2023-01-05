import { gameConfig } from "../_config/gameConfig";
import { appConfig } from "../_config/appConfig";
import { getSessionCookie } from "../context/SessionContext";

class GameUtils {
  config = gameConfig;
  operations = Object.keys(this.config.operations);

  calculation(operation, a, b) {
    if (operation === this.config.operations.ADDITION) {
      return a + b;
    } else if (operation === this.config.operations.SUBTRACTION) {
      return a - b;
    } else if (operation === this.config.operations.DIVISION) {
      return a / b;
    } else if (operation === this.config.operations.MULTIPLICATION) {
      return a * b;
    }
  }

  generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateRandomOperation() {
    const index = this.generateRandomNumber(0, this.operations.length - 1);
    return this.operations[index];
  }

  getGenerationRange(difficulty, operation) {
    return this.config.generationRange[difficulty][operation];
  }

  generateDivision(a, b) {
    const dividend = a * b;

    return {
      formattedCalculation: this.formatCalculation(
        dividend,
        b,
        this.config.operations.DIVISION
      ),
      operation: this.config.operations.DIVISION,
      result: dividend / b,
    };
  }

  getOperationSymbol(operation) {
    if (operation === this.config.operations.ADDITION) {
      return "+";
    }
    if (operation === this.config.operations.SUBTRACTION) {
      return "-";
    }
    if (operation === this.config.operations.MULTIPLICATION) {
      return "*";
    }
    if (operation === this.config.operations.DIVISION) {
      return "/";
    }
  }

  formatCalculation(a, b, operation) {
    return `${a} ${this.getOperationSymbol(operation)} ${b}`;
  }

  generateRandomCalculation(difficulty) {
    const operation = this.generateRandomOperation();
    const range = this.getGenerationRange(difficulty, operation);
    const min = range.MIN;
    const max = range.MAX;
    const a = this.generateRandomNumber(min, max);
    const b = this.generateRandomNumber(min, max);

    if (operation === this.config.operations.DIVISION) {
      return this.generateDivision(a, b);
    }

    return {
      formattedCalculation: this.formatCalculation(a, b, operation),
      operation,
      result: this.calculation(operation, a, b),
    };
  }

  async saveResult(score, difficulty) {
    const session = getSessionCookie();
    if (!session) return;
    const result = {
      username: session.username,
      score,
      difficulty,
    };

    const response = await fetch(`${appConfig.apiPath}/results/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.token}`,
      },
      body: JSON.stringify(result),
    });

    if (response.status !== 201) {
      throw new Error("Error while posting the result");
    }

    const postedResult = await response.json();

    if (postedResult.error) {
      throw new Error(postedResult.error);
    }

    return postedResult;
  }
}

export const gameUtils = new GameUtils();
