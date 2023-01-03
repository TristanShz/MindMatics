const User = require("../models/User");
const bcrypt = require('bcrypt');

exports.register = (user) => {
    const createdUser = new User(user);
    return createdUser.save().then(result => result);
}

exports.getUserByPseudo = (pseudo) => {
    return User.findOne({pseudo}).select({pseudo:1, password:1}).exec();
}

exports.hashPassword = (password) => {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
}

exports.comparePasswords = async (plainTextPassword, hash) => {
    return await bcrypt.compare(plainTextPassword, hash);
}

exports.getAllUser = () => {
    return User.find({});
}
