conn = new Mongo();
db = conn.getDB("data");

db.createCollection("expense_types");
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

let mainCategories = [
    { _id: ObjectId(), name: "Housing", expenseType: "Fixed" },
    { _id: ObjectId(), name: "Household", expenseType: "Variable" },
    { _id: ObjectId(), name: "Gift", expenseType: "Intermittent" },
    { _id: ObjectId(), name: "Free time", expenseType: "Discretionary" },
    { _id: ObjectId(), name: "Hobbies", expenseType: "Discretionary" },
    { _id: ObjectId(), name: "Services", expenseType: "Fixed" },
    { _id: ObjectId(), name: "Health", expenseType: "Intermittent" },
    { _id: ObjectId(), name: "Groceries", expenseType: "Variable" },
    { _id: ObjectId(), name: "Restaurants", expenseType: "Discretionary" },
    { _id: ObjectId(), name: "Transportation", expenseType: "Fixed" },
    { _id: ObjectId(), name: "Spending money", expenseType: "Discretionary" },
];

for (let mainCategory of mainCategories) {
    const expenseType = expenseTypes.find(item => item.name === mainCategory.expenseType);
    if (expenseType) {
        mainCategory.expenseType = expenseType._id;
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

];

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

const transactions = [
    {
        _id: ObjectId(),
        item: "Bread",
        amount: 590,
        date: new Date(),
        type: "expense",
        subcategory: subcategories.find(item => item.name === "LIDL")._id,
    },
    {
        _id: ObjectId(),
        item: "Rent",
        amount: 100000,
        date: new Date(),
        type: "expense",
        subcategory: subcategories.find(item => item.name === "Rent")._id,
    },
    {
        _id: ObjectId(),
        item: "Electricity",
        amount: 5680,
        date: new Date(),
        type: "expense",
        subcategory: subcategories.find(item => item.name === "Utilities")._id,
    },
    
];

db.transactions.insertMany(transactions);

const users = [
    {
        _id: ObjectId(),
        email: "test@test.com",
        password: "1234"
    },
];

db.users.insertMany(users);
