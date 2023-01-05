const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const apiConfig = require("../_config/apiConfig");
const { ObjectId } = require('mongodb');

exports.get = (id) => {
  return User.findById(id).exec();
}

exports.register = (user) => {
  const createdUser = new User(user);
  return createdUser.save();
};

exports.getUserByUsername = (username) => {
  return User.findOne({ username }).select({ username: 1, password: 1 }).exec();
};

exports.hashPassword = (password) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

exports.getAllUser = () => {
  return User.find({});
};
exports.comparePasswords = (plainTextPassword, hash) => {
  return bcrypt.compare(plainTextPassword, hash);
};

exports.getSession = (token) => {
  return User.findOne({ _id: ObjectId(jwt.decode(token).id) });
};

exports.signToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    apiConfig.jwtSecret,
    { expiresIn: "30 days" }
  );
};

exports.remove = async (user) => {
  const res = await User.deleteOne({ username: user.username });
  return res.deletedCount;
}
