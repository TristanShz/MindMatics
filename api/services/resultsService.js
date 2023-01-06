const Result = require("../models/Result");

exports.getLeaderboard = () => {
  return Result.find({})
    .populate("user")
    .select({ user: 1, score: 1, difficulty: 1 })
    .sort({ score: -1 })
    .limit(100)
    .exec();
};

exports.create = (result) => {
  const createdResult = new Result(result);
  return createdResult.save().then((res) => res);
};

exports.remove = async (result) => {
  const res = await Result.deleteOne({ _id: result._id });
  return res.deletedCount;
};
