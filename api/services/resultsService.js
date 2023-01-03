const Result = require("../models/Result");

exports.create = (result) => {
    const createdResult = new Result(result);
    return createdResult.save().then(res => res);
}