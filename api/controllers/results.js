const resultsService = require("../services/resultsService")
const jwt = require("jsonwebtoken");


/**
 * create Result
 * @param {*} req 
 * @param {*} res 
 */
exports.create = async (req, res) => {
    if (!req.body.userId || !req.body.score || !req.body.difficulty){
        res.status(400).json({error: 'At least one field is empty'});
    }
    const result = {
        user: req.body.userId,
        score: req.body.score,
        difficulty: req.body.difficulty,
    }
    const createdResult = await resultsService.create(result);
    if(!createdResult){
        res.status(500).json({error: 'error while creating result'});
    }
    res.status(200).json({data: createdResult});
}