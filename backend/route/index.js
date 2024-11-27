const loginMw = require('../middleware/auth/loginMw');
const authMw = require('../middleware/auth/authMw');
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
const getTransactionTypesMw = require('../middleware/transaction_type/getTransactionTypesMw');
const getUserMw = require('../middleware/user/getUserMw');

module.exports = function (app, repository) {

    app.post('/login',
        getUserMw(repository),
        loginMw(),
    );

    app.get('/expense_types',
        authMw(),
        getExpenseTypesMw(repository),
    );

    app.get('/main_categories',
        authMw(),
        getMainCategoriesMw(repository),
    );

    app.get('/main_categories/:id',
        authMw(),
        getMainCategoryMw(repository),
    );

    app.post('/main_categories',
        authMw(),
        saveMainCategoryMw(repository),
    );

    app.delete('/main_categories/:id',
        authMw(),
        deleteMainCategoryMw(repository),
    );

    app.get('/subcategories',
        authMw(),
        getSubcategoriesMw(repository),
    );

    app.get('/subcategories/:id',
        authMw(),
        getSubcategoryMw(repository),
    );

    app.post('/subcategories',
        authMw(),
        saveSubcategoryMw(repository),
    );

    app.delete('/subcategories/:id',
        authMw(),
        deleteSubcategoryMw(repository),
    );

    app.get('/transactions',
        authMw(),
        getTransactionsMw(repository),
    );

    app.get('/transactions/:id',
        authMw(),
        getTransactionMw(repository),
    );

    app.post('/transactions',
        authMw(),
        saveTransactionMw(repository),
    );

    app.delete('/transactions/:id',
        authMw(),
        deleteTransactionMw(repository),
    );

    app.get('/transaction_types',
        authMw(),
        getTransactionTypesMw(repository),
    );

    app.get('*',
        function (req, res) {
            res.status(404).json({ message: "Page not found" });
        }
    );
};