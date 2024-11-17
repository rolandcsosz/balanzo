module.exports = function (repository) {

    return async function (req, res, next) {
        const mainCategories = await repository.mainCategory.find();
        return res.json(mainCategories);
    };
};