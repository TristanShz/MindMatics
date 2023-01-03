const apiConfig = {
  apiPath: "/api/v1",
  jwtSecret: process.env.JWT_SECRET,

  mongo: {
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
  },
};

module.exports = apiConfig;
