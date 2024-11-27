module.exports = function (repository) {

    return async function (_, res, _) {
        const expenseTypes = await repository.transactionType.find();
        return res.json(expenseTypes);
    };
};