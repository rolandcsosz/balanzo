module.exports = function (repository) {
    return async function (req, res, next) {
        let id = req.params.id;

        try {
            const transaction = await repository.transaction.findById(id);

            if (transaction) {
                return res.json(transaction);
            }

            return res.status(404).json({ message: "Entry not found" });

        } catch (err) {
            return res.status(500).json({ message: "Server error", error: err.message });
        }
    };
};
