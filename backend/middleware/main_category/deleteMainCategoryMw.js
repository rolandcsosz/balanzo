module.exports = function (repository) {
    return async function (req, res, next) {
        let id = req.params.id;

        try {
            const deleteResult = await repository.mainCategory.deleteOne({ _id: id });
            if (deleteResult.deletedCount === 0) {
                return res.status(404).json({ message: "Entry not found" });
            }

            const subcategories = await repository.subcategory.find({ mainCategory: id });
            for (const subcategory of subcategories) {
                await repository.transaction.deleteMany({ subcategory: subcategory._id });
                await repository.template.deleteMany({ subcategory: subcategory._id });
            }

            await repository.subcategory.deleteMany({ mainCategory: id });

            return res.json({ message: "Main category and connecting subcategories, transactions deleted successfully" });

        } catch (err) {
            return res.status(500).json({ message: "Server error", error: err.message });
        }
    };
};
