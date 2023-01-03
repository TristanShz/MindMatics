const apiConfig = {
  apiPath: "/api/v1",

  mongo: {
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
  },
};

module.exports = apiConfig;
