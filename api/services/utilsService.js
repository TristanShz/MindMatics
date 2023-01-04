
exports.checkObjectId = (objectId) => {
    return objectId.match(/^[0-9a-fA-F]{24}$/);
}