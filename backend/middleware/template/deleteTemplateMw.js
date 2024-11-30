module.exports = function (repository) {
    return async function (req, res, next) {
        let id = req.params.id;

        try {
            const deleteResult = await repository.template.deleteOne({ _id: id });

            if (deleteResult.deletedCount === 0) {
                return res.status(404).json({ message: "Entry not found" });
            }

            return res.json({ message: "Template deleted successfully" });

        } catch (err) {
            return res.status(500).json({ message: "Server error", error: err.message });
        }
    };
};
