const apiConfig = {
  apiPath: "/api/v1",
  jwtSecret: process.env.JWT_SECRET,

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
