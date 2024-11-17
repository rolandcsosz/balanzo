module.exports = function (repository) {

    return async function (req, res, next) {
        let id = req.body.id;

        try {
            const updatedCategory = await repository.transaction.findByIdAndUpdate(id, req.body, { new: true });

            if (updatedCategory) {
                return res.status(200).json(updatedCategory);
            }

            const newCategory = await repository.transaction.create(req.body);
            return res.status(200).json(newCategory);

        } catch (err) {
            return res.status(400).json({ message: "Invalid data", error: err.message });
        }
    };
};