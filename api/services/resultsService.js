const Result = require("../models/Result");

exports.getAll = () => {
    return Result.find({}).select({user: 1, score: 1, difficulty: 1}).exec();
}

exports.create = (result) => {
    const createdResult = new Result(result);
    return createdResult.save().then(res => res);
}

exports.remove = async (result) => {
    const res = await Result.deleteOne({ _id: result._id });
    return res.deletedCount;
  }