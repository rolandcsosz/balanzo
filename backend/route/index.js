const getExpenseTypesMw = require('../middleware/expense_type/getExpenseTypesMw');
const getMainCategoriesMw = require('../middleware/main_category/getMainCategoriesMw');
const getMainCategoryMw = require('../middleware/main_category/getMainCategoryMw');
const saveMainCategoryMw = require('../middleware/main_category/saveMainCategoryMw');
const deleteMainCategoryMw = require('../middleware/main_category/deleteMainCategoryMw');
const getSubcategoriesMw = require('../middleware/subcategory/getSubcategoriesMw');
const getSubcategoryMw = require('../middleware/subcategory/getSubcategoryMw');
const saveSubcategoryMw = require('../middleware/subcategory/saveSubcategoryMw');
const deleteSubcategoryMw = require('../middleware/subcategory/deleteSubcategoryMw');
const getTransactionsMw = require('../middleware/transaction/getTransactionsMw');
const saveTransactionMw = require('../middleware/transaction/saveTransactionMw');
const deleteTransactionMw = require('../middleware/transaction/deleteTransactionMw');
const getTransactionMw = require('../middleware/transaction/getTransactionMw');

module.exports = function (app, repository) {

    app.get('/expense_types',
        getExpenseTypesMw(repository),
    );

    app.get('/main_categories',
        getMainCategoriesMw(repository),
    );

    app.get('/main_categories/:id',
        getMainCategoryMw(repository),
    );

    app.post('/main_categories',
        saveMainCategoryMw(repository),
    );

    app.delete('/main_categories/:id',
        deleteMainCategoryMw(repository),
    );

    app.get('/subcategories',
        getSubcategoriesMw(repository),
    );

    app.get('/subcategories/:id',
        getSubcategoryMw(repository),
    );

    app.post('/subcategories',
        saveSubcategoryMw(repository),
    );

    app.delete('/subcategories/:id',
        deleteSubcategoryMw(repository),
    );

    app.get('/transactions',
        getTransactionsMw(repository),
    );

    app.get('/transactions/:id',
        getTransactionMw(repository),
    );

    app.post('/transactions',
        saveTransactionMw(repository),
    );

    app.delete('/transactions/:id',
        deleteTransactionMw(repository),
    );

    app.get('*',
        function (req, res) {
            res.status(404).json({ message: "Page not found" });
        }
    );
};