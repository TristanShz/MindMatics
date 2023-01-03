const resultModel = require("../models/Result");

/**
 * Retrieve all result using filter for difficulty and order by 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.retrieveFilteredResults = (req, res) => {
    console.log('retrieveFilteredResults');
    console.log(req.body); // difficulty and order eventually
    console.log(resultModel.find());
    return res.status(200).json({data: "ok"});
};

/**
 * Retrieve results by user
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.retrieveUserResults = (req, res) => {
    console.log(`retrieveUserResults pseudo : ${req.body.pseudo}`);
    return res.status(200).json({data: req.body.pseudo});
};