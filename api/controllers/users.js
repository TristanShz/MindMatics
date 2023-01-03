const userModel = require("../models/User");
const usersService = require("../services/usersService")
const jwt = require("jsonwebtoken");
const apiConfig = require('../_config/apiConfig');

/**
 * register new user account
 * @param {*} req 
 * @param {*} res 
 */
exports.register = async (req, res) => {
    if(!req.body.password || !req.body.pseudo){
        res.status(400).json({error: 'Password or pseudo is empty'});
    }
    const password = await usersService.hashPassword(req.body.password);
    const user = {
        pseudo: req.body.pseudo,
        password,
    }
    const createdUser = await usersService.register(user);
    if(!createdUser){
        res.status(500).json({error: 'error while saving user profile'});
    }
    res.status(200).json({data: createdUser});
}

exports.login = async (req, res) => {
    if(!req.body.password || !req.body.pseudo){
        res.status(400).json({error: 'Password or pseudo is empty'});
    }
    const existingUser = await usersService.getUserByPseudo(req.body.pseudo);
    if(!existingUser){
        res.status(400).json({error: 'User not found'});
    }
    const checkPassword = await usersService.checkPassword(req.body.password, existingUser.password);
    if(!checkPassword){
        res.status(400).json({error: 'Wrong password'});
    }else{
        const token = jwt.sign(
            {
              id: existingUser._id,
              pseudo: existingUser.pseudo,
            },
            apiConfig.jwtSecret,
            { expiresIn: "30 days" }
          );
        res.status(200).json({data: token});
    }
}

/**
 * Retrieve all users
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.retrieveAllUsers = (req, res) => {
    console.log('retrieveAllUsers');
    console.log(userModel.find());
    return res.status(200).json({data: "ok"});
};

/**
 * Retrieve user data from user pseudo
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.retrieveUserByPseudo = (req, res) => {
    console.log(`retrieveUserByPseudo : ${req.body.pseudo}`);
    return res.status(200).json({data: req.body.pseudo});
};