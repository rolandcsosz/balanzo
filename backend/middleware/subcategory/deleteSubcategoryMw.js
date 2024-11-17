module.exports = function (repository) {
    return async function (req, res, next) {
        let id = req.params.id;

        try {
            const deleteSubcategoryResult = await repository.subcategory.deleteOne({ _id: id });
            if (deleteSubcategoryResult.deletedCount === 0) {
                return res.status(404).json({ message: "Entry not found" });
            }

            await repository.transaction.deleteMany({ subcategory: id });

            return res.json({ message: "Subcategory and connecting transactions deleted successfully" });

        } catch (err) {
            return res.status(500).json({ message: "Server error", error: err.message });
        }
    };
};
