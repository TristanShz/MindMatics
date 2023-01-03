const apiConfig = {
  apiPath: "/api/v1",
  jwtSecret: process.env.jwtSecret,

  mongo: {
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
  },
};

module.exports = apiConfig;
