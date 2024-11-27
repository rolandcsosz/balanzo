conn = new Mongo();
db = conn.getDB("data");

db.createCollection("expense_types");
db.createCollection("transaction_types");
db.createCollection("main_categories");
db.createCollection("subcategories");
db.createCollection("transactions");
db.createCollection("users");

const expenseTypes = [
    { _id: ObjectId(), name: "Fixed" },
    { _id: ObjectId(), name: "Variable" },
    { _id: ObjectId(), name: "Intermittent" },
    { _id: ObjectId(), name: "Discretionary" },
];

db.expense_types.insertMany(expenseTypes);

const transactionTypes = [
    { _id: ObjectId(), name: "Expense" },
    { _id: ObjectId(), name: "Income" },
];

db.transaction_types.insertMany(transactionTypes);

let mainCategories = [
    { _id: ObjectId(), name: "Housing", expenseType: "Fixed", transactionType: "Expense" },
    { _id: ObjectId(), name: "Household", expenseType: "Variable", transactionType: "Expense" },
    { _id: ObjectId(), name: "Gift", expenseType: "Intermittent", transactionType: "Expense" },
    { _id: ObjectId(), name: "Free time", expenseType: "Discretionary", transactionType: "Expense" },
    { _id: ObjectId(), name: "Hobbies", expenseType: "Discretionary", transactionType: "Expense" },
    { _id: ObjectId(), name: "Services", expenseType: "Fixed", transactionType: "Expense" },
    { _id: ObjectId(), name: "Health", expenseType: "Intermittent", transactionType: "Expense" },
    { _id: ObjectId(), name: "Groceries", expenseType: "Variable", transactionType: "Expense" },
    { _id: ObjectId(), name: "Restaurants", expenseType: "Discretionary", transactionType: "Expense" },
    { _id: ObjectId(), name: "Transportation", expenseType: "Fixed", transactionType: "Expense" },
    { _id: ObjectId(), name: "Spending money", expenseType: "Discretionary", transactionType: "Expense" },
    { _id: ObjectId(), name: "Salary", expenseType: "Fixed", transactionType: "Income" },
];

for (let mainCategory of mainCategories) {
    const expenseType = expenseTypes.find(item => item.name === mainCategory.expenseType);
    if (expenseType) {
        mainCategory.expenseType = expenseType._id;
    }

    const transactionType = transactionTypes.find(item => item.name === mainCategory.transactionType);
    if (transactionType) {
        mainCategory.transactionType = transactionType._id;
    }
}

db.main_categories.insertMany(mainCategories);

let subcategories = [
    { _id: ObjectId(), name: "Rent", mainCategory: "Housing", expenseType: "Fixed" },
    { _id: ObjectId(), name: "Utilities", mainCategory: "Housing", expenseType: "Fixed" },
    { _id: ObjectId(), name: "Running", mainCategory: "Hobbies", expenseType: "Discretionary" },
    { _id: ObjectId(), name: "Wolt", mainCategory: "Restaurants", expenseType: "Discretionary" },
    { _id: ObjectId(), name: "YouTube", mainCategory: "Services", expenseType: "Fixed" },
    { _id: ObjectId(), name: "Bank", mainCategory: "Services", expenseType: "Fixed" },
    { _id: ObjectId(), name: "Gym", mainCategory: "Services", expenseType: "Fixed" },
    { _id: ObjectId(), name: "Supplements", mainCategory: "Health", expenseType: "Variable" },
    { _id: ObjectId(), name: "LIDL", mainCategory: "Groceries", expenseType: "Variable" },
    { _id: ObjectId(), name: "ALDI", mainCategory: "Groceries", expenseType: "Variable" },
    { _id: ObjectId(), name: "Coffee shop", mainCategory: "Free time", expenseType: "Discretionary" },
    { _id: ObjectId(), name: "DÖNER", mainCategory: "Restaurants", expenseType: "Discretionary" },
    { _id: ObjectId(), name: "Padthai", mainCategory: "Restaurants", expenseType: "Discretionary" },
    { _id: ObjectId(), name: "Wolt", mainCategory: "Services", expenseType: "Fixed" },
    { _id: ObjectId(), name: "Pho", mainCategory: "Restaurants", expenseType: "Discretionary" },
    { _id: ObjectId(), name: "Clothes", mainCategory: "Spending money", expenseType: "Discretionary" },
    { _id: ObjectId(), name: "Gift", mainCategory: "Gift", expenseType: "Intermittent" },
    { _id: ObjectId(), name: "Salary", mainCategory: "Salary", expenseType: "Fixed" },
];

const subcategoriesNames = subcategories.map(item => item.name);

for (let subcategory of subcategories) {
    const expenseType = expenseTypes.find(item => item.name === subcategory.expenseType);
    if (expenseType) {
        subcategory.expenseType = expenseType._id;
    }

    const mainCategory = mainCategories.find(item => item.name === subcategory.mainCategory);
    if (mainCategory) {
        subcategory.mainCategory = mainCategory._id;
    }
}

db.subcategories.insertMany(subcategories);

const generateRandomDate = () => {
    const start = new Date(2021, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

let transactions = [];

for (let i = 0; i < 200; i++) {
    let categoryName = subcategoriesNames[Math.floor(Math.random() * mainCategories.length)];
    transactions.push({
        _id: ObjectId(),
        item: categoryName,
        amount: Math.floor(Math.random() * 1000),
        date: generateRandomDate(),
        subcategory: subcategories.find(item => item.name === categoryName)._id
    });
}

transactions.push({
    _id: ObjectId(),
    item: "Salary",
    amount: 200000,
    date: new Date(),
    subcategory: subcategories.find(item => item.name === "Salary")._id
});

db.transactions.insertMany(transactions);

const users = [
    {
        _id: ObjectId(),
        email: "test@test.com",
        password: "1234"
    },
];

db.users.insertMany(users);
