const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ExpenseType = require('./model/expense_type');
const MainCategory = require('./model/main_category');
const Subcategory = require('./model/subcategory');
const Transaction = require('./model/transactions');
const TransactionType = require('./model/transaction_type');
const Template = require('./model/template');
const User = require('./model/user');
require('dotenv').config();

const app = express();
const repository = {
    expenseType: ExpenseType,
    mainCategory: MainCategory,
    subcategory: Subcategory,
    transaction: Transaction,
    transactionType: TransactionType,
    template: Template,
    user: User
};

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./route/index')(app, repository);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
