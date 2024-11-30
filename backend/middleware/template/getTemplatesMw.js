module.exports = function (repository) {

    return async function (req, res, next) {
        const mainCategories = await repository.template.find();
        return res.json(mainCategories);
    };
};