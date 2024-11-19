module.exports = function (repository) {

    return async function (_, res, _) {
        const expenseTypes = await repository.expenseType.find();
        return res.json(expenseTypes);
    };
};