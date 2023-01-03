const Result = require("../models/Result");


exports.getAll = () => {
    return Result.find({}).select({user:1, score:1, }).exec();
}
