const resultsService = require("../services/resultsService");
const usersService = require("../services/usersService");
const utilsService = require("../services/utilsService");

/**
 * get all results
 * @param {*} req
 * @param {*} res
 */
exports.getAll = async (req, res) => {
    const results = await resultsService.getAll();
    return res.status(200).json({data: results});
}

/**
 * create Result
 * @param {*} req
 * @param {*} res
 */
exports.create = async (req, res) => {
    if (!req.body.username || !req.body.score || !req.body.difficulty){
        return res.status(400).json({error: 'At least one field is empty'});
    }
    const loggedUser = await usersService.getUserByUsername(req.body.username);
    if(!loggedUser){
        return res.status(404).json({error: 'No user matching id'});
    }
    const resultToSave = {
        user: loggedUser._id,
        score: req.body.score,
        difficulty: req.body.difficulty,
    }
    const createdResult = await resultsService.create(resultToSave);
    if(!createdResult){
        return res.status(500).json({error: 'error while creating result'});
    }
    return res.status(200).json({data: createdResult});
}

/**
 * remove result using his id
 * @param {*} req
 * @param {*} res
 */
exports.remove = async (req, res) => {
    if (!utilsService.checkObjectId(req.body.resultId)){
        return res.status(400).json({error: 'ObjectId is not valid'});
    }
    const resultToDelete = await resultsService.get(req.body.resultId);
    if(!resultToDelete){
        return res.status(404).json({error: 'No result matching id'});
    }
    resultsService.remove(resultToDelete);
    return res.status(200);
  }
  resultsService.remove(resultToDelete);
};
