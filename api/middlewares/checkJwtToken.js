const jwt = require("jsonwebtoken");
const apiConfig = require("../_config/apiConfig");

const checkTokenMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ");

  if (!token?.[1]) {
    return res.status(401).json({ message: "Error. Need a token" });
  }
  jwt.verify(token[1], apiConfig.jwtSecret, (err, decodedToken) => {
    if (err) {
      res.status(401).json({ message: "Error. Bad token" });
    } else {
      return next();
    }
  });
};

module.exports = checkTokenMiddleware;
