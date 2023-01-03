const userModel = require("../models/User");

exports.retrieveAllUsers = (req, res) => {
    console.log('retrieveAllUsers');
    console.log(userModel.find());
    return res.status(200).json({data: "ok"});
};

exports.retrieveUserByPseudo = (req, res) => {
    console.log(`retrieveUserByPseudo : ${req.body.pseudo}`);
    return res.status(200).json({data: req.body.pseudo});
};