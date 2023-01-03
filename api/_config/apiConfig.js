const { DIFFICULTY } = require("../../client/src/_config/appConfig");
const apiConfig = {
  apiPath: "/api/v1",
  jwtSecret: process.env.jwtSecret,

  mongo: {
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
  },
};

exports.DIFFICULTY = {
  EASY: 0,
  NORMAL: 1,
  HARD: 2,
};

module.exports = apiConfig;
