const resultsService = require("../services/resultsService");
const usersService = require("../services/usersService");


/**
 * create Result
 * @param {*} req 
 * @param {*} res 
 */
exports.create = async (req, res) => {
    if (!req.body.score || !req.body.difficulty){
        res.status(400).json({error: 'At least one field is empty'});
    }
    const loggedUser = usersService.getLoggedUser();
    if(!loggedUser){
        res.status(500).json({error: 'No user logged in'});
    }
    const result = {
        user: loggedUser,
        score: req.body.score,
        difficulty: req.body.difficulty,
    }
    const createdResult = await resultsService.create(result);
    if(!createdResult){
        res.status(500).json({error: 'error while creating result'});
    }
    res.status(200).json({data: createdResult});
}