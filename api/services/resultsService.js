const Result = require("../models/Result");

exports.getAll = () => {
    return Result.find({}).select({user: 1, score: 1, difficulty: 1}).exec();
}

exports.create = (result) => {
    console.log(result)
    const createdResult = new Result(result);
    return createdResult.save().then(res => res);
}