const jwt = require("jsonwebtoken");
require("dotenv").config();

const checkTokenMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split(" ");

  if (!token[1]) {
    return res.status(401).json({ message: "Error. Need a token" });
  }
  jwt.verify(token[1], process.env.SECRET, (err, decodedToken) => {
    if (err) {
      res.status(401).json({ message: "Error. Bad token" });
    } else {
      return next();
    }
  });
};

module.exports = checkTokenMiddleware;
