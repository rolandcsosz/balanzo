module.exports = function (repository) {
    return async function (req, res, next) {

        res.locals.user = undefined;

        try {
            const users = await repository.user.find({ email: req.body.email, password: req.body.password });

            if (users && users.length > 0) {
                res.locals.user = users[0];
            }

        } catch (err) { }

        return next();
    };
};
