export const gameConfig = {
  duration: 60000,
  penalty: {
    wrongAnswer: 5000,
    skip: 2500,
  },
  scorePerOperation: {
    EASY: {
      ADDITION: 10,
      SUBTRACTION: 10,
      MULTIPLICATION: 15,
      DIVISION: 15,
    },
    NORMAL: {
      ADDITION: 15,
      SUBTRACTION: 15,
      MULTIPLICATION: 20,
      DIVISION: 20,
    },
    HARD: {
      ADDITION: 20,
      SUBTRACTION: 20,
      MULTIPLICATION: 25,
      DIVISION: 25,
    },
  },
  difficulties: {
    EASY: 1,
    NORMAL: 2,
    HARD: 3,
  },
  states: {
    CHOOSE_DIFFICULTY: "CHOOSE_DIFFICULTY",
    START: "START",
    PLAY: "PLAY",
    FINISH: "FINISH",
  },
  answerState: {
    CORRECT: "CORRECT",
    WRONG: "WRONG",
    SKIP: "SKIP",
  },
  operations: {
    ADDITION: "ADDITION",
    SUBTRACTION: "SUBTRACTION",
    MULTIPLICATION: "MULTIPLICATION",
    DIVISION: "DIVISION",
  },
  generationRange: {
    EASY: {
      ADDITION: {
        MIN: 1,
        MAX: 99,
      },
      SUBTRACTION: {
        MIN: 1,
        MAX: 99,
      },
      MULTIPLICATION: {
        MIN: 1,
        MAX: 10,
      },
      DIVISION: {
        MIN: 2,
        MAX: 10,
      },
    },
    NORMAL: {
      ADDITION: {
        MIN: 99,
        MAX: 499,
      },
      SUBTRACTION: {
        MIN: 99,
        MAX: 499,
      },
      MULTIPLICATION: {
        MIN: 5,
        MAX: 15,
      },
      DIVISION: {
        MIN: 5,
        MAX: 15,
      },
    },
    HARD: {
      ADDITION: {
        MIN: 499,
        MAX: 999,
      },
      SUBTRACTION: {
        MIN: 499,
        MAX: 999,
      },
      MULTIPLICATION: {
        MIN: 11,
        MAX: 20,
      },
      DIVISION: {
        MIN: 11,
        MAX: 20,
      },
    },
  },
};
