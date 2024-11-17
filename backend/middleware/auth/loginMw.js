const jwt = require('jsonwebtoken');

module.exports = function () {

    return function (req, res, next) {

        if (res.locals.user === undefined) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const token = jwt.sign({ _id: res.locals.user._id }, process.env.JWT_SECRET);
        res.status(200).json({ message: 'Authenticated successfully', token });
    };
};